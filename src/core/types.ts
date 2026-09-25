/**
 * Общие типы и конфигурация цифрового двойника The Dubai Fountain.
 * Все размеры — в метрах, давления — в паскалях (абсолютных), время — в секундах.
 */

/** Физические константы среды и рабочей жидкости */
export const CONSTANTS = {
  G: 9.81, // ускорение свободного падения, м/с²
  RHO_WATER: 998.2, // плотность воды (20 °C), кг/м³
  RHO_HG: 13595.1, // плотность ртути для «манометрических» показаний
  P_ATM: 101_325, // атмосферное давление на уровне озера, Па
  GAMMA_AIR: 1.4, // показатель адиабаты воздуха (diatomic)
  T_AMBIENT_K: 293.15, // температура озера, K
  C_D_ORIFICE: 0.62, // коэффициент расхода sharp-edged orifice
  WATER_LEVEL_Y: 0, // отметка зеркала озера в сцене
} as const;

/** Геометрия узла ExtremeShooter (подводная пневмопушка) */
export interface ShooterGeometry {
  /** Внутренний диаметр ствола, м */
  barrelDiameter: number;
  /** Длина ствола, м */
  barrelLength: number;
  /** Объём воздушного ресивера (аккумулятора), м³ */
  accumulatorVolume: number;
  /** Эквивалентная площадь сопла, м² */
  nozzleArea: number;
  /** Площадь поперечного сечения ствола, м² */
  barrelArea: number;
}

export const SHOOTER_GEOMETRY: ShooterGeometry = (() => {
  const d = 0.61; // 24" gun barrel (реальный масштаб ExtremeShooter ~ 0.6 м)
  const barrelArea = Math.PI * d * d * 0.25;
  return {
    barrelDiameter: d,
    barrelLength: 7.5,
    accumulatorVolume: 4.2, // 4.2 м³ сжатого воздуха @ ~8 бар изб.
    nozzleArea: barrelArea * 0.62, // сопло немного уже ствола
    barrelArea,
  };
})();

/** Состояние гидропневматического контура, передаваемое между модулями физики */
export interface HydroState {
  time: number;
  /** Избыточное давление в ресивере, Па */
  accumulatorPressurePa: number;
  /** Давление в рабочую камеру за водяным поршнем, Па */
  chamberPressurePa: number;
  /** Ход поршня, м (0 — заряжено, 1 — полностью выстрелил) */
  pistonTravel: number;
  /** Скорость фронта воды в стволе, м/с */
  jetVelocityMs: number;
  /** Объёмный расход через сопло, м³/с */
  flowRateM3s: number;
  /** Расход в л/с (для HUD) */
  flowRateLps: number;
  /** Степень открытия ударного клапана (0..1) */
  valveOpening: number;
  /** Высота струи над соплом, м */
  jetHeightM: number;
  /** Температура газа в ресивере, K */
  gasTemperatureK: number;
  /** Заполненность сообщающихся сосудов (уровень в камере всасывания), 0..1 */
  vesselFillLevel: number;
  /** Мощность насосной станции подпитки, кВт */
  pumpPowerKw: number;
}

/** Фазы рабочего цикла пушки */
export enum GunPhase {
  IDLE = 'IDLE', // ожидание, ресивер под давлением
  CHARGE = 'CHARGE', // заряд: заполнение ствола водой, сброс воздуха
  ARM = 'ARM', // взвод: открытие соленоид-пилота, рост давления в камере
  FIRE = 'FIRE', // выстрел: ударный клапан открыт, адиабатическое расширение
  RECOVER = 'RECOVER', // откат / опорожнение, обратный клапан подпора
}

/** Конфигурация симуляции, изменяемая из панели управления */
export interface SimConfig {
  /** Давление зарядки ресивера, бар изб. */
  chargePressureBar: number;
  /** Время открытия ударного клапана, мс */
  valvePulseMs: number;
  /** Угол возвышения ствола, градусы */
  elevationDeg: number;
  /** Азимут серво-модуля Oarsmen, градусы */
  azimuthDeg: number;
  /** Скорость разворота Oarsmen, deg/s */
  slewRateDps: number;
  /** Производительность подпиточного насоса, м³/ч */
  pumpFlowM3h: number;
  /** Масштаб частиц (плотность выброса) */
  particleDensity: number;
  /** Постобработка Bloom */
  bloomEnabled: boolean;
  /** Интенсивность Bloom */
  bloomStrength: number;
  /** CAD-разрез включён */
  cutawayEnabled: boolean;
  /** Смещение режущей плоскости, м (-1..1 → нормализовано к габариту) */
  cutawayOffset: number;
  /** Звук */
  audioEnabled: boolean;
  /** Громкость общая */
  masterVolume: number;
  /** Авто-секвенция (программа шоу) */
  autoSequence: boolean;
  /** Темп шоу, выстрелов/мин */
  showRateBpm: number;
  /** Слоу-мо коэффициент времени */
  timeScale: number;
}

export const DEFAULT_CONFIG: SimConfig = {
  chargePressureBar: 7.5,
  valvePulseMs: 220,
  elevationDeg: 78,
  azimuthDeg: 0,
  slewRateDps: 120,
  pumpFlowM3h: 340,
  particleDensity: 1.0,
  bloomEnabled: true,
  bloomStrength: 0.85,
  cutawayEnabled: false,
  cutawayOffset: 0.0,
  audioEnabled: true,
  masterVolume: 0.8,
  autoSequence: false,
  showRateBpm: 12,
  timeScale: 1.0,
};

/** Дискретные события, генерируемые физикой (для звука / частиц / HUD) */
export type SimEvent =
  | { type: 'valve-open'; pressureBar: number }
  | { type: 'valve-close' }
  | { type: 'muzzle-break'; velocityMs: number; flowLps: number }
  | { type: 'piston-endstop' }
  | { type: 'recharge-complete' }
  | { type: 'oarsman-move'; fromDeg: number; toDeg: number };

export type EventListener = (e: SimEvent) => void;

/** Простая шина событий */
export class EventBus {
  private listeners: EventListener[] = [];
  on(fn: EventListener): () => void {
    this.listeners.push(fn);
    return () => {
      const i = this.listeners.indexOf(fn);
      if (i >= 0) this.listeners.splice(i, 1);
    };
  }
  emit(e: SimEvent): void {
    for (const fn of this.listeners) fn(e);
  }
}

export const clamp = (v: number, lo: number, hi: number): number =>
  v < lo ? lo : v > hi ? hi : v;

export const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;

export const smoothstep = (edge0: number, edge1: number, x: number): number => {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
};

/** bar ↔ Pa helpers */
export const barToPa = (bar: number): number => bar * 1e5;
export const paToBar = (pa: number): number => pa / 1e5;

/** Водяной столб (м) → избыточное давление (Па) */
export const headToPa = (headM: number): number => CONSTANTS.RHO_WATER * CONSTANTS.G * headM;
export const paToHead = (pa: number): number => pa / (CONSTANTS.RHO_WATER * CONSTANTS.G);
