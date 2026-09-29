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
  /** Эталонный объём газа при давлении зарядки, м³ */
  private readonly v0: number;
  private gasVolume: number; // текущий объём газа (V0 + смещение поршня), м³
  private pAbs: number; // абсолютное давление газа, Па
  private tGas: number; // температура газа, K
  private chargeTargetPa: number;

  /** Утечки через седло клапана (эквивалентная площадь, м²) */
  private static LEAK_AREA = 2e-5;

  constructor() {
    this.v0 = GEO.accumulatorVolume;
    this.gasVolume = GEO.accumulatorVolume;
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

  /** Текущий объём газа в ресивере, м³ */
  get currentGasVolume(): number {
    return this.gasVolume;
  }

  /** Абсолютное давление как функция приведённого объёма (адиабата) */
  pressureAtVolume(v: number): number {
    const vv = Math.max(0.05 * this.v0, v);
    return this.pAbs * Math.pow(this.gasVolume / vv, GAMMA_AIR);
  }

  /**
   * Интегрирование за шаг dt.
   * @param pistonSpeed м/с — скорость водяного поршня (>0 = выстрел, газ расширяется)
   * @param valveOpening 0..1 — ударный клапан (слив в рабочую камеру моделируется снаружи)
   * @param supplyFlowM3s м³/с нормализованного (при P_atm) воздуха от компрессора подзарядки
   */
  step(dt: number, pistonSpeed: number, valveOpening: number, supplyFlowM3s: number): void {
    // Расшижение/сжатие газа из-за движения поршня
    const dV = GEO.barrelArea * pistonSpeed * dt;
    const gammaMinus1 = GAMMA_AIR - 1;

    if (dV !== 0) {
      const vNext = Math.max(0.05 * this.v0, this.gasVolume + dV);
      const ratio = this.gasVolume / vNext;
      // адиабата: P·V^γ = const, T·V^(γ-1) = const
      this.pAbs *= Math.pow(ratio, GAMMA_AIR);
      this.tGas *= Math.pow(ratio, gammaMinus1);
      this.gasVolume = vNext;
    }

    // Подзарядка от компрессорной станции (изотермический приток массы → рост P)
    if (supplyFlowM3s > 0 && this.pAbs < this.chargeTargetPa) {
      // эквивалентный прирост давления: dP = γ·P·dV/V, dV = Q_atm·dt·(P_atm/P)
      const dVc = (supplyFlowM3s * dt * P_ATM) / this.pAbs;
      const vNext = Math.min(this.v0, this.gasVolume + dVc);
      this.pAbs *= Math.pow(this.gasVolume / vNext, GAMMA_AIR);
      this.gasVolume = vNext;
    }

    // Дроссельная утечка через неплотности (критический расход при больших перепадах)
    const dp = this.pAbs - P_ATM;
    if (dp > 0) {
      const mdot =
        PneumaticAccumulator.LEAK_AREA *
        (0.6 + 4 * valveOpening) *
        this.pAbs *
        0.0009; // эмпирическая кондуктанс-модель, Па-экв/с
      const dPe = (mdot * dt) / this.gasVolume;
      this.pAbs = Math.max(P_ATM, this.pAbs - dPe);
    }

    // Возврат температуры к окружающей (теплообмен с корпусом/озером)
    this.tGas += (T_AMBIENT_K - this.tGas) * clamp(dt * 0.35, 0, 1);

    // Жёсткие пределы безопасности
    this.pAbs = clamp(this.pAbs, P_ATM * 0.4, 12.5e5 + P_ATM);
  }

  /** Сброс после выстрела: объём возвращается (поршень откатывается), газ остывает */
  resetAfterRecoil(newVolumeFraction: number): void {
    this.gasVolume = GEO.accumulatorVolume * clamp(newVolumeFraction, 0.2, 1.0);
  }

  /** Полная зарядка до уставки (для кнопки «ARM») */
  forceChargeToTarget(): void {
    this.pAbs = this.chargeTargetPa;
    this.gasVolume = this.v0;
    this.tGas = T_AMBIENT_K;
  }

  /** Сброс в атмосферу (аварийный клапан VENT) */
  ventToAtmosphere(): void {
    this.pAbs = P_ATM * 1.02;
    this.tGas = T_AMBIENT_K;
  }

  /** Степень зарядки 0..1 для LED-индикатора */
  get chargeFraction(): number {
    return clamp(this.gaugePressurePa / (this.chargeTargetPa - P_ATM), 0, 1);
  }
}
