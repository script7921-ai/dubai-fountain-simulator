/**
 * CommunicatingVessels.ts — дифференциал гидростатического заполнения
 * всасывающей камеры (сообщающихся сосудов) пушки из озера.
 *
 * После выстрела ствол опорожняется; при закрытии ударного клапана и открытии
 * впускных окон вода из озера под действием гидростатического перепада
 * заполняет камеру. Модель — ODE первого порядка:
 *
 *   A_vessel · dh/dt = Q_in(h),  Q_in = C_d·A_win·sqrt(2g·(H_lake − h))
 *
 * где h — уровень воды в камере (м от дна), H_lake — отметка зеркала озера,
 * A_win — суммарная площадь впускных окон, A_vessel — площадь сосуда.
 *
 * Решение интегрируется полунеявным Эйлером со стабилизацией при h→H_lake
 * (аналитическое время заполнения до 98%: t ≈ 2·A_v·(√H−√0.02H)/(C_d·A_w·√(2g))).
 */

import { CONSTANTS, clamp } from '../core/types';

const { G } = CONSTANTS;

export class CommunicatingVessels {
  /** Площадь сечения всасывающей камеры, м² */
  readonly vesselArea: number;
  /** Суммарная площадь впускных окон, м² */
  private windowArea: number;
  /** Коэффициент расхода окон */
  private readonly cd: number = 0.68;
  /** Уровень воды в камере, м (от «дна» до H_LAKE) */
  public level: number;
  /** Отметка зеркала озера относительно дна камеры, м */
  public readonly lakeHead: number;
  /** Пропускная способность насоса подпитки, м³/с */
  private pumpFlow: number;

  constructor(vesselArea = 1.4, lakeHead = 5.5) {
    this.vesselArea = vesselArea;
    this.windowArea = 0.16; // 4 окна по 0.04 м²
    this.lakeHead = lakeHead;
    this.level = lakeHead; // заполнено по умолчанию
    this.pumpFlow = 0;
  }

  setPumpFlow(m3ph: number): void {
    this.pumpFlow = m3ph / 3600;
  }

  /** Мгновенный приток через окна, м³/с */
  inflow(): number {
    const dp = Math.max(0, this.lakeHead - this.level);
    return this.cd * this.windowArea * Math.sqrt(2 * G * dp);
  }

  /**
   * Шаг интегрирования.
   * @param dt сек
   * @param drain м³/с — отбор (уход в ствол при выстреле, отрицательный = подача)
   */
  step(dt: number, drainM3s: number): void {
    // Полунеявный Эйлер: производная dh/dt линеаризована по sqrt для устойчивости у dна
    const dhdt = (this.inflow() + this.pumpFlow - drainM3s) / this.vesselArea;
    this.level = clamp(this.level + dhdt * dt, 0, this.lakeHead);
  }

  /** Нормированное заполнение 0..1 */
  get fillFraction(): number {
    return this.level / this.lakeHead;
  }

  /** Аналитическая оценка времени полного заполнения (сек), для HUD-таймера */
  estimatedFillTime(fromFraction = 0.02): number {
    const h0 = this.lakeHead * clamp(fromFraction, 0.001, 0.999);
    const num = 2 * this.vesselArea * (Math.sqrt(this.lakeHead) - Math.sqrt(h0));
    const den = this.cd * this.windowArea * Math.sqrt(2 * G);
    return num / den;
  }

  /** Опорожнение перед выстрелом (уровень падает → давление в камере растёт) */
  forceDrain(fraction: number): void {
    this.level = clamp(this.level * (1 - fraction), 0, this.lakeHead);
  }

  /** Мгновенное заполнение камеры (полный сброс симуляции) */
  refill(): void {
    this.level = this.lakeHead;
  }
}
