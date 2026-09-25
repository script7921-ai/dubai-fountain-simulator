/**
 * FountainSimulator — оркестратор физической модели (Digital Twin core).
 * Связывает PneumaticAccumulator + HydroDynamics + CommunicatingVessels
 * в конечный автомат рабочего цикла ExtremeShooter и серво-модуль Oarsmen.
 */

import {
  CONSTANTS,
  DEFAULT_CONFIG,
  EventBus,
  GunPhase,
  SHOOTER_GEOMETRY,
  SimConfig,
  SimEvent,
  clamp,
  lerp,
  smoothstep,
} from '../core/types';
import {
  barrelAcceleration,
  ballisticHeight,
  nozzleFlow,
  orificeVelocity,
  pumpPowerKw,
  reynoldsInBarrel,
  staticBackPressurePa,
} from './HydroDynamics';
import { PneumaticAccumulator } from './PneumaticAccumulator';
import { CommunicatingVessels } from './CommunicatingVessels';

const GEO = SHOOTER_GEOMETRY;
const { P_ATM } = CONSTANTS;

export interface TelemetrySample {
  t: number;
  pAccumBar: number; // ресивер, бар изб.
  pChamberBar: number; // камера, бар изб.
  qLps: number; // расход, л/с
  vMs: number; // фронт, м/с
  jetH: number; // высота струи, м
  valve: number; // открытие клапана, %
  fill: number; // заполнение сосудов, %
  azimuth: number; // текущий азимут Oarsmen
  elevation: number; // угол возвышения
}

/** Снимок состояния пушки для HUD/панели (типизированный контракт readout). */
export interface GunReadout {
  phase: GunPhase;
  time: number;
  pAccumBar: number;
  pChamberBar: number;
  chargeFrac: number;
  gasTempC: number;
  jetVelocity: number;
  flowLps: number;
  jetHeight: number;
  valvePct: number;
  pistonTravel: number;
  fillPct: number;
  reynolds: number;
  pumpKw: number;
  azimuth: number;
  azimuthTarget: number;
  azimuthVel: number;
  elevation: number;
}

export class FountainSimulator {
  readonly bus = new EventBus();
  config: SimConfig = { ...DEFAULT_CONFIG };

  readonly accumulator = new PneumaticAccumulator();
  readonly vessels = new CommunicatingVessels();

  phase: GunPhase = GunPhase.IDLE;
  time = 0;
  private phaseTime = 0;

  /** Кинематика водяного поршня */
  pistonTravel = 0; // 0..1
  pistonSpeed = 0; // м/с (доля хода за секунду → пересчёт внутри)
  chamberPGauge = 0; // Па изб.
  jetVelocity = 0; // м/с на срезе сопла
  flowRate = 0; // м³/с
  valveOpening = 0; // 0..1
  jetHeight = 0;
  muzzleBroken = false;

  /** Серво Oarsmen */
  oarsmanAzimuth = 0;
  oarsmanTargetAzimuth = 0;
  oarsmanElevation = DEFAULT_CONFIG.elevationDeg;
  oarsmanVelocityDps = 0;

  /** Компрессорная станция */
  compressorOn = true;

  /** Цикл авто-шоу */
  private showTimer = 0;

  /** История для графиков */
  history: TelemetrySample[] = [];
  private historyAccum = 0;
  private lastRe = 0;

  constructor() {
    this.accumulator.setChargePressureGauge(this.config.chargePressureBar * 1e5);
    this.vessels.setPumpFlow(this.config.pumpFlowM3h);
    this.oarsmanTargetAzimuth = this.config.azimuthDeg;
  }

  setConfig(cfg: Partial<SimConfig>): void {
    const prevAz = this.config.azimuthDeg;
    this.config = { ...this.config, ...cfg };
    this.accumulator.setChargePressureGauge(this.config.chargePressureBar * 1e5);
    this.vessels.setPumpFlow(this.config.pumpFlowM3h);
    this.oarsmanTargetAzimuth = this.config.azimuthDeg;
    if (Math.abs(prevAz - this.config.azimuthDeg) > 0.01) {
      this.bus.emit({ type: 'oarsman-move', fromDeg: prevAz, toDeg: this.config.azimuthDeg });
    }
  }

  /** Ручной спуск (кнопка FIRE / пробел) */
  triggerFire(): boolean {
    if (this.phase !== GunPhase.IDLE) return false;
    if (this.accumulator.chargeFraction < 0.35) return false; // недостаточно заряжено
    this.enterPhase(GunPhase.ARM);
    return true;
  }

  emergencyVent(): void {
    // Аварийный сброс давления
    this.accumulator.resetAfterRecoil(1.4);
    (this.accumulator as unknown as { pAbs: number }).pAbs = P_ATM * 1.02;
  }

  private enterPhase(p: GunPhase): void {
    this.phase = p;
    this.phaseTime = 0;
  }

  /** Главный шаг физики; dt уже домножен на timeScale вызывающим */
  step(dtRaw: number): void {
    const dt = Math.min(dtRaw, 1 / 30); // защита от всплесков
    this.time += dt;
    this.phaseTime += dt;

    // --- Ударный клапан: соленоид-пилот с фронтом ~40 мс ---
    this.updateValve(dt);
    // --- Пневмоаккумулятор ---
    this.updateGas(dt);
    // --- Гидродинамика ствола ---
    this.updateHydro(dt);
    // --- Сообщающиеся сосуды (зарядка из озера) ---
    this.updateVessels(dt);
    // --- Конечный автомат цикла ---
    this.updateStateMachine();
    // --- Авто-секвенция шоу ---
    this.updateAutoSequence(dt);
    // --- Серво Oarsmen ---
    this.updateOarsman(dt);

    // Производные величины
    this.jetHeight = this.muzzleBroken ? ballisticHeight(this.jetVelocity) : 0;
    this.lastRe = reynoldsInBarrel(this.jetVelocity);

    this.sampleHistory(dt);
  }

  private updateValve(dt: number): void {
    const wantOpen = this.phase === GunPhase.FIRE;
    const tau = 0.04; // время срабатывания клапана, сек
    const target = wantOpen ? 1 : 0;
    const next = lerp(this.valveOpening, target, clamp(dt / tau, 0, 1));
    if (!wantOpen && this.valveOpening > 0.5 && next <= 0.5) {
      this.bus.emit({ type: 'valve-close' });
    }
    this.valveOpening = next;
  }

  private updateGas(dt: number): void {
    // Поршень движется со скоростью pistonSpeed (доля хода/с) → линейная скорость
    const linearSpeed = this.pistonSpeed * GEO.barrelLength;
    // Подзарядка компрессором только в IDLE/CHARGE
    const supply =
      this.compressorOn && (this.phase === GunPhase.IDLE || this.phase === GunPhase.CHARGE)
        ? 0.9 // м³/с при atm — производительность станции
        : 0;
    this.accumulator.step(dt, this.phase === GunPhase.FIRE ? linearSpeed : 0, this.valveOpening, supply);

    // Давление в камере за поршнем: при открытом клапане газ поступает → P_камеры
    // растёт с задержкой наполнения камеры (ёмкостной эффект), иначе — стравливается в ствол.
    const pAcc = this.accumulator.gaugePressurePa;
    if (this.valveOpening > 0.01) {
      const target = pAcc * smoothstep(0, 0.6, this.valveOpening);
      this.chamberPGauge = lerp(this.chamberPGauge, target, clamp(dt * 28, 0, 1));
    } else {
      // Закрыт: камера соединена со стволом через открытые окна → падает к гидростатике
      this.chamberPGauge = lerp(this.chamberPGauge, staticBackPressurePa() * 0.4, clamp(dt * 3.5, 0, 1));
    }
  }

  private updateHydro(dt: number): void {
    // Ньютон для водяного столба: a = (A·ΔP − losses)/m
    const a = barrelAcceleration(this.chamberPGauge, this.pistonSpeed * GEO.barrelLength, this.pistonTravel);
    let vLinear = this.pistonSpeed * GEO.barrelLength + a * dt;
    if (this.phase !== GunPhase.FIRE && this.phase !== GunPhase.RECOVER) vLinear *= Math.pow(0.02, dt); // торможение закрытым циклом
    vLinear = clamp(vLinear, -6, 70);

    this.pistonTravel = clamp(this.pistonTravel + (vLinear / GEO.barrelLength) * dt, 0, 1);
    this.pistonSpeed = this.pistonTravel >= 1 ? Math.max(0, vLinear) / GEO.barrelLength : vLinear / GEO.barrelLength;

    if (this.pistonTravel >= 1 && !this.muzzleBroken && this.phase === GunPhase.FIRE) {
      this.pistonSpeed = 0;
      this.bus.emit({ type: 'piston-endstop' });
    }

    // Скорость на срезе сопла: Торричелли по ΔP камеры, ограничена расходом continuity
    const vOrifice = orificeVelocity(Math.max(0, this.chamberPGauge - staticBackPressurePa()));
    const vContinuity = Math.max(0, vLinear) * (GEO.barrelArea / GEO.nozzleArea);
    this.jetVelocity = Math.min(vOrifice, vContinuity * 1.08);
    this.flowRate = nozzleFlow(this.jetVelocity);

    // Момент разрыва фронта на срезе (для звука "whoosh" и частиц)
    if (!this.muzzleBroken && this.jetVelocity > 12 && this.phase === GunPhase.FIRE) {
      this.muzzleBroken = true;
      this.bus.emit({ type: 'muzzle-break', velocityMs: this.jetVelocity, flowLps: this.flowRate * 1000 });
    }
  }

  private updateVessels(dt: number): void {
    // При выстреле вода уходит из всасывающей камеры в ствол; при зарядке — возвращается
    const drain = this.phase === GunPhase.FIRE ? this.flowRate : -this.vessels.inflow() * 0.15;
    this.vessels.step(dt, Math.max(0, drain));
  }

  private updateStateMachine(): void {
    switch (this.phase) {
      case GunPhase.IDLE:
        break;

      case GunPhase.ARM: // предударный рост давления в камере (пилот)
        if (this.phaseTime >= 0.12) {
          this.muzzleBroken = false;
          this.enterPhase(GunPhase.FIRE);
          this.bus.emit({
            type: 'valve-open',
            pressureBar: this.accumulator.gaugePressurePa / 1e5,
          });
        }
        break;

      case GunPhase.FIRE: {
        const pulseS = this.config.valvePulseMs / 1000;
        const spent = this.pistonTravel >= 0.995 || this.phaseTime > pulseS + 0.55;
        if (this.phaseTime > pulseS && this.valveOpening < 0.05 && (spent || this.phaseTime > pulseS + 0.2)) {
          this.enterPhase(GunPhase.RECOVER);
        }
        break;
      }

      case GunPhase.RECOVER: {
        // Откат поршня, подсос воды из озера, ресивер снова подзаряжается
        this.pistonTravel = lerp(this.pistonTravel, 0, clamp(this.phaseTime * 0.9, 0, 1) * 0.12);
        if (this.pistonTravel < 0.02 && this.vessels.fillFraction > 0.9) {
          this.pistonTravel = 0;
          this.pistonSpeed = 0;
          this.muzzleBroken = false;
          this.enterPhase(GunPhase.IDLE);
          this.bus.emit({ type: 'recharge-complete' });
        }
        // страховка от зависания
        if (this.phaseTime > 6) {
          this.pistonTravel = 0;
          this.enterPhase(GunPhase.IDLE);
          this.bus.emit({ type: 'recharge-complete' });
        }
        break;
      }

      case GunPhase.CHARGE:
        if (this.vessels.fillFraction > 0.98) this.enterPhase(GunPhase.IDLE);
        break;
    }
  }

  private updateAutoSequence(dt: number): void {
    if (!this.config.autoSequence) {
      this.showTimer = 0;
      return;
    }
    const period = 60 / clamp(this.config.showRateBpm, 1, 60);
    this.showTimer += dt;
    if (this.showTimer >= period) {
      this.showTimer = 0;
      // рандомизация азимута в коридоре ±40° — «живое» шоу
      this.config.azimuthDeg = Math.round((Math.random() * 80 - 40) * 10) / 10;
      this.oarsmanTargetAzimuth = this.config.azimuthDeg;
      this.triggerFire();
    }
  }

  /** Сервопривод Oarsmen: профиль ускорения trapezoid, ограничение slew rate */
  private updateOarsman(dt: number): void {
    const maxW = clamp(this.config.slewRateDps, 5, 360);
    const target = clamp(this.oarsmanTargetAzimuth, -180, 180);
    const diff = target - this.oarsmanAzimuth;
    const abs = Math.abs(diff);
    // замедление перед целью
    const wMax = abs < 12 ? maxW * smoothstep(0, 12, abs) : maxW;
    const stepAmt = clamp(wMax * dt, 0, abs);
    const moved = Math.sign(diff) * stepAmt;
    this.oarsmanAzimuth += moved;
    this.oarsmanVelocityDps = dt > 0 ? moved / dt : 0;
    this.oarsmanElevation = lerp(this.oarsmanElevation, this.config.elevationDeg, clamp(dt * 4, 0, 1));
  }

  private sampleHistory(dt: number): void {
    this.historyAccum += dt;
    if (this.historyAccum < 1 / 60) return; // 60 Гц дискретизация телеметрии
    this.historyAccum = 0;
    const s: TelemetrySample = {
      t: this.time,
      pAccumBar: this.accumulator.gaugePressurePa / 1e5,
      pChamberBar: this.chamberPGauge / 1e5,
      qLps: this.flowRate * 1000,
      vMs: this.jetVelocity,
      jetH: this.jetHeight,
      valve: this.valveOpening * 100,
      fill: this.vessels.fillFraction * 100,
      azimuth: this.oarsmanAzimuth,
      elevation: this.oarsmanElevation,
    };
    this.history.push(s);
    const MAX = 60 * 40; // 40 секунд окно
    if (this.history.length > MAX) this.history.splice(0, this.history.length - MAX);
  }

  /** Снимок для HUD */
  get readout(): GunReadout {
    return {
      phase: this.phase,
      time: this.time,
      pAccumBar: this.accumulator.gaugePressurePa / 1e5,
      pChamberBar: this.chamberPGauge / 1e5,
      chargeFrac: this.accumulator.chargeFraction,
      gasTempC: this.accumulator.gasTemperatureK - 273.15,
      jetVelocity: this.jetVelocity,
      flowLps: this.flowRate * 1000,
      jetHeight: this.jetHeight,
      valvePct: this.valveOpening * 100,
      pistonTravel: this.pistonTravel,
      fillPct: this.vessels.fillFraction * 100,
      reynolds: this.lastRe,
      pumpKw: pumpPowerKw(this.config.pumpFlowM3h, Math.max(1, this.config.chargePressureBar)),
      azimuth: this.oarsmanAzimuth,
      azimuthTarget: this.oarsmanTargetAzimuth,
      azimuthVel: this.oarsmanVelocityDps,
      elevation: this.oarsmanElevation,
    };
  }
}
