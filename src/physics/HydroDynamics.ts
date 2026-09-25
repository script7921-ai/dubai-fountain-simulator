/**
 * HydroDynamics.ts — гидрогазодинамика струйного контура.
 *
 * Модель: водяной поршень (столб воды в стволе) разгоняется перепадом давления
 * ΔP = P_камеры − P_атм − ρg·h_statis − P_потерь. Уравнение движения столба массы m:
 *
 *   m·dV/dt = A_barrel·ΔP − ½·ρ·A_nozzle·V²·(1/Cc² − 1) − f_visc·V
 *
 * На срезе сопла скорость истечения определяется формулой Торричелли/Bernoulli:
 *   V_jet = C_d · sqrt(2·ΔP/ρ)   (ограничена сверху скоростью фронта в стволе)
 *
 * Высота струи (баллистика с учётом сопротивления воздуха, приближённо):
 *   H = V²/(2g) · η_aero,  η_aero ≈ 0.75..0.95 для 100+ м
 */

import { CONSTANTS, SHOOTER_GEOMETRY, clamp } from '../core/types';

const { RHO_WATER, G, P_ATM } = CONSTANTS;
const GEO = SHOOTER_GEOMETRY;

/** Приведённая масса движущегося контура: вода в стволе + эквивалентная масса поршня + инерция газа */
export function reducedMass(pistonTravel: number): number {
  const waterColumnLen = Math.max(0.4, GEO.barrelLength * (1 - pistonTravel));
  const waterMass = RHO_WATER * GEO.barrelArea * waterColumnLen;
  const pistonEqMass = 850; // кг — поршень + шток + каретка Oarsman (эквивалент)
  const gasLoading = 320; // кг — присоединённая масса газа (added mass)
  return waterMass + pistonEqMass + gasLoading;
}

/** Гидростатический подпор озера на глубине заложения пушки (пушка на ~1.6 м ниже зеркала) */
export const STATIC_HEAD_M = 1.6;
export const staticBackPressurePa = (): number => RHO_WATER * G * STATIC_HEAD_M;

/** Потери на трение о стенки ствола (линейный демпфер, Н·с/м) */
const F_VISC = 9_500;

/** Квadratic drag coefficient of the free jet column against air, ½ρ_air·Cd·A_eff */
const AIR_DRAG_K = 0.62 * 1.225 * GEO.nozzleArea * 0.5;

/**
 * Ускорение водяного поршня по второму закону Ньютона для приведённой массы.
 * @param chamberPGauge избыточное давление в камере за поршнем, Па
 * @param v текущая скорость столба, м/с
 * @param travel ход поршня 0..1
 */
export function barrelAcceleration(chamberPGauge: number, v: number, travel: number): number {
  const dpDrive = Math.max(0, chamberPGauge - staticBackPressurePa());
  const forceDrive = dpDrive * GEO.barrelArea;
  // Bernoulli-сопротивление сужающегося сопла (contraction loss term)
  const contractionLoss =
    0.5 * RHO_WATER * v * Math.abs(v) * GEO.nozzleArea * (Math.pow(GEO.barrelArea / GEO.nozzleArea, 2) - 1);
  const visc = F_VISC * v;
  const m = reducedMass(travel);
  return (forceDrive - contractionLoss - visc) / m;
}

/** Скорость истечения из сопла по формуле Торричелли с коэффициентом расхода */
export function orificeVelocity(dpPa: number): number {
  if (dpPa <= 0) return 0;
  return CONSTANTS.C_D_ORIFICE * Math.sqrt((2 * dpPa) / RHO_WATER);
}

/** Расход через сопло при заданной скорости фронта, м³/с */
export function nozzleFlow(jetVelocity: number): number {
  return Math.max(0, jetVelocity) * GEO.nozzleArea;
}

/**
 * Стационарная высота струи по Бернулли с эмпирической потерей на аэродинамику.
 * Для Dubai Fountain: 7 бар → ~105–140 м (реально до 150 м у SuperShooters).
 */
export function theoreticalJetHeight(vNozzle: number): number {
  if (vNozzle <= 0) return 0;
  // Интегрирование замедления g + kv² (drag), аналитически:
  const k = AIR_DRAG_K / (RHO_WATER * GEO.nozzleArea); // на единицу площади струи
  const h = (1 / (2 * k)) * Math.log(1 + (k * vNozzle * vNozzle) / G);
  return h;
}

/** Баллистическая высота с поправкой на дискретность фронта (для HUD) */
export function ballisticHeight(vFront: number): number {
  const v = Math.min(vFront, 145); // физический предел SuperShooter ≈ 145 м/с
  return clamp((v * v) / (2 * G) * 0.92, 0, 160);
}

/** Мощность насосной станции подпитки (кВт) по расходу и напору */
export function pumpPowerKw(flowM3h: number, headBar: number, efficiency = 0.72): number {
  const q = flowM3h / 3600; // м³/с
  const hydraulicW = q * headBar * 1e5; // Вт
  return hydraulicW / 1000 / efficiency;
}

/** Число Рейнольдса в стволе (для справки в HUD-«датчике режима течения») */
export function reynoldsInBarrel(v: number): number {
  const nu = 1.004e-6; // кинематическая вязкость воды 20°C
  return (v * GEO.barrelDiameter) / nu;
}

export function flowRegimeLabel(re: number): string {
  if (re < 2300) return 'ЛАМИНАРНЫЙ';
  if (re < 4000) return 'ПЕРЕХОДНЫЙ';
  return 'ТУРБУЛЕНТНЫЙ';
}
