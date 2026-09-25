/**
 * PneumaticAccumulator.ts — пневмоаккумулятор (ресивер) ExtremeShooter.
 *
 * Адиабатическое расширение/сжатие газа:  P·V^γ = const,  γ = 1.4 (воздух).
 * При выстреле воздух из ресивера поступает в рабочую камеру и толкает водяной
 * поршень; объём газа увеличивается на A_barrel · dx поршня.
 *
 *   P_gas(V) = P0 · (V0 / V)^γ
 *   T_gas    = T0 · (P/P0)·(V/V0)      (идеальный газ PV = nRT)
 *
 * Зарядка ресивера от компрессорной станции — изотермический подвод массы
 * (насос constant mass-flow), стравливание через пилот — дроссельный.
 */

import { CONSTANTS, SHOOTER_GEOMETRY, clamp } from '../core/types';

const GEO = SHOOTER_GEOMETRY;
const { GAMMA_AIR, P_ATM, T_AMBIENT_K } = CONSTANTS;

export class PneumaticAccumulator {
  /** Текущий объём газа = базовый V0 + смещение поршня */
  private v0: number; // эталонный объём при давлении зарядки
  private pAbs: number; // абсолютное давление газа, Па
  private tGas: number; // температура газа, K
  private chargeTargetPa: number;

  /** Утечки через седло клапана (эквивалентная площадь, м²) */
  private static LEAK_AREA = 2e-5;

  constructor() {
    this.v0 = GEO.accumulatorVolume;
    this.chargeTargetPa = 7.5e5 + P_ATM;
    this.pAbs = this.chargeTargetPa;
    this.tGas = T_AMBIENT_K;
  }

  /** Давление заряда ресивера (изб., Па) */
  setChargePressureGauge(pGaugePa: number): void {
    this.chargeTargetPa = Math.max(P_ATM * 0.5, pGaugePa + P_ATM);
  }

  get gaugePressurePa(): number {
    return this.pAbs - P_ATM;
  }

  get gasTemperatureK(): number {
    return this.tGas;
  }

  /** Абсолютное давление как функция приведённого объёма (адиабата) */
  pressureAtVolume(v: number): number {
    const vv = Math.max(0.05 * this.v0, v);
    return this.pAbs * Math.pow(this.v0 / vv, GAMMA_AIR);
  }

  /**
   * Интегрирование за шаг dt.
   * @param displacedVolume м³ — объём, который газ занял сверх текущего (движение поршня)
   * @param supplyFlow м³/с нормализованного (при P_atm) воздуха от компрессора подзарядки
   * @param valveOpening 0..1 — ударный клапан (слив в рабочую камеру моделируется снаружи)
   */
  step(dt: number, pistonSpeed: number, valveOpening: number, supplyFlowM3s: number): void {
    // Расширение газа из-за движения поршня
    const dV = GEO.barrelArea * pistonSpeed * dt;
    const gammaMinus1 = GAMMA_AIR - 1;

    if (dV > 0) {
      // адиабатическое расширение: dP = -γ P dV / V
      this.pAbs *= Math.pow(Math.max(0.05, (this.v0 + 0) / (this.v0 + dV)), GAMMA_AIR);
      // охлаждение: T·V^(γ-1)=const
      this.tGas *= Math.pow((this.v0 + dV) / this.v0, gammaMinus1);
    } else if (dV < 0) {
      this.pAbs *= Math.pow(this.v0 / Math.max(0.05, this.v0 + dV), GAMMA_AIR);
      this.tGas *= Math.pow(this.v0 / Math.max(0.05, this.v0 + dV), gammaMinus1);
    }
    this.v0 += dV;

    // Подзарядка от компрессорной станции (изотермический приток массы → рост P)
    if (supplyFlowM3s > 0 && this.pAbs < this.chargeTargetPa) {
      // эквивалентный прирост давления: dP = γ·P·dV/V, dV = Q_atm·dt·(P_atm/P)
      const dVc = (supplyFlowM3s * dt * P_ATM) / this.pAbs;
      this.pAbs *= Math.pow((this.v0 + dVc) / this.v0, GAMMA_AIR);
      this.v0 += dVc;
    }

    // Дроссельная утечка через неплотности (критический расход при больших перепадах)
    const dp = this.pAbs - P_ATM;
    if (dp > 0) {
      const mdot =
        PneumaticAccumulator.LEAK_AREA *
        (0.6 + 4 * valveOpening) *
        this.pAbs *
        0.0009; // эмпирическая кондуктанс-модель, Па-экв/с
      const dPe = (mdot * dt) / this.v0;
      this.pAbs = Math.max(P_ATM, this.pAbs - dPe);
    }

    // Возврат температуры к окружающей (теплообмен с корпусом/озером)
    this.tGas += (T_AMBIENT_K - this.tGas) * clamp(dt * 0.35, 0, 1);

    // Жёсткие пределы безопасности
    this.pAbs = clamp(this.pAbs, P_ATM * 0.4, 12.5e5 + P_ATM);
  }

  /** Сброс после выстрела: объём возвращается (поршень откатывается), газ остывает */
  resetAfterRecoil(newVolumeFraction: number): void {
    this.v0 = GEO.accumulatorVolume * clamp(newVolumeFraction, 0.2, 1.6);
  }

  /** Полная зарядка до уставки (для кнопки «ARM») */
  forceChargeToTarget(): void {
    this.pAbs = this.chargeTargetPa;
    this.v0 = GEO.accumulatorVolume;
    this.tGas = T_AMBIENT_K;
  }

  /** Степень зарядки 0..1 для LED-индикатора */
  get chargeFraction(): number {
    return clamp(this.gaugePressurePa / (this.chargeTargetPa - P_ATM), 0, 1);
  }
}
