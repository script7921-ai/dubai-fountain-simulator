/**
 * TelemetryChart.ts — графики переходных процессов P(t), Q(t), V(t) на Chart.js.
 *
 * Два стробированных окна: 8 сек (микроскопический переходный процесс выстрела)
 * и 60 сек (обзор цикла «выстрел → перезарядка»). Данные берутся из ring-buffer
 * симулятора с фиксированным шагом дискретизации 60 Гц.
 */

import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Legend,
  Tooltip,
} from 'chart.js';
import type { FountainSimulator, TelemetrySample } from '../physics/FountainSimulator';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Legend, Tooltip);

/** Размер скользящего окна графиков, сек */
const WINDOW_S = 8;

/**
 * Сколько отправленных точек ещё остаётся в окне [simTime-WINDOW_S, simTime].
 * Верхняя оценка: не больше числа отправленных (sentIdx), не больше размера
 * кольцевого буфера симулятора и не больше ёмкости окна WINDOW_S*HZ.
 * Функция монотонна по n, поэтому «remove = dataLen - keep» никогда не удаляет
 * новые данные; длина графиков жёстко ограничена CAP точками — рост исключён.
 */
const SAMPLE_HZ = 60;
const HISTORY_CAP = 60 * 40; // синхронно с FountainSimulator.HISTORY_SIZE
const WINDOW_CAP = WINDOW_S * SAMPLE_HZ + 2; // запас на квантование dt
function sentIdxInWindow(sentIdx: number, n: number): number {
  return Math.max(0, Math.min(sentIdx, n, HISTORY_CAP, WINDOW_CAP));
}

export class TelemetryChart {
  private chartP: Chart;
  private chartQ: Chart;
  private root: HTMLElement;
  /** Абсолютный индекс последнего отправленного сэмпла кольцевого буфера */
  private sentIdx = 0;
  /** Время последней отправленной точки — детектор перезапуска симуляции */
  private lastSentT = -1;

  constructor(container: HTMLElement, private sim: FountainSimulator) {
    this.root = document.createElement('div');
    this.root.id = 'telemetry';
    this.root.className =
      'absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-2 max-w-[98vw] pointer-events-auto';
    container.appendChild(this.root);

    // ВАЖНО: wrapper с фиксированной высотой (h-24) обязателен.
    // Chart.js responsive + maintainAspectRatio:false растягивает canvas по высоте
    // родителя; без ограничивающего контейнера каждый resize-цикл увеличивал панель
    // («график съедает экран» на мобильных WebView).
    this.root.innerHTML = /* html */ `
      <div class="hud-panel p-2 w-[46vw] min-w-[170px] max-w-[430px] shrink-0">
        <div class="flex justify-between items-center mb-0.5">
          <span class="hud-title truncate">P(t) · bar</span>
          <span class="text-[8px] text-slate-500 shrink-0">8 c</span>
        </div>
        <div class="relative h-24 w-full"><canvas id="chart-p"></canvas></div>
      </div>
      <div class="hud-panel p-2 w-[46vw] min-w-[170px] max-w-[430px] shrink-0 hidden sm:block">
        <div class="flex justify-between items-center mb-0.5">
          <span class="hud-title truncate">Q(t) · л/с · м/с</span>
          <span class="text-[8px] text-slate-500 shrink-0">8 c</span>
        </div>
        <div class="relative h-24 w-full"><canvas id="chart-q"></canvas></div>
      </div>
    `;

    // БАЗА опций без функций: structuredClone не умеет клонировать колбэки
    // (DOMException в WebView/Termux). Функции-колбэки назначаются после клонирования.
    const timeTickCb = (v: unknown) => `${Number(v).toFixed(1)}s`;

    type ScaleOpts = Record<string, unknown>;
    const commonBase: Record<string, unknown> & { scales: Record<string, ScaleOpts> } = {
      responsive: true,
      animation: false as const,
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: 'nearest' as const },
      elements: { point: { radius: 0 }, line: { borderWidth: 1.6, tension: 0.12 } },
      scales: {
        x: {
          type: 'linear' as const,
          grid: { color: 'rgba(56,189,248,0.06)' },
          ticks: { color: '#475569', font: { size: 8, family: 'JetBrains Mono' }, maxTicksLimit: 9 },
        },
        y: {
          min: 0,
          grid: { color: 'rgba(56,189,248,0.06)' },
          ticks: { color: '#475569', font: { size: 8, family: 'JetBrains Mono' }, maxTicksLimit: 5 },
        },
      },
      plugins: {
        legend: { display: true, position: 'bottom' as const, labels: { boxWidth: 8, boxHeight: 2, color: '#64748b', font: { size: 8, family: 'JetBrains Mono' } } },
        tooltip: { enabled: false },
      },
    };

    const optionsP = structuredClone(commonBase);
    // назначаем функцию уже в клон — она не участвует в сериализации
    (optionsP.scales.x.ticks as Record<string, unknown>).callback = timeTickCb;

    this.chartP = new Chart((this.root.querySelector('#chart-p') as HTMLCanvasElement), {
      type: 'line',
      data: {
        datasets: [
          { label: 'P ресивера', data: [], borderColor: '#38bdf8', backgroundColor: 'rgba(56,189,248,0.08)', fill: true },
          { label: 'P камеры', data: [], borderColor: '#fbbf24', backgroundColor: 'rgba(251,191,36,0.06)', fill: true },
        ],
      },
      options: optionsP,
    });

    const qScales = structuredClone(commonBase.scales);
    qScales.y.title = { display: false };
    qScales.y1 = {
      position: 'right' as const,
      min: 0,
      grid: { drawOnChartArea: false },
      ticks: { color: '#475569', font: { size: 8, family: 'JetBrains Mono' }, maxTicksLimit: 5 },
    };
    (qScales.x.ticks as Record<string, unknown>).callback = timeTickCb;

    const optionsQ = structuredClone(commonBase);
    optionsQ.scales = qScales;

    this.chartQ = new Chart((this.root.querySelector('#chart-q') as HTMLCanvasElement), {
      type: 'line',
      data: {
        datasets: [
          { label: 'Q, л/с', data: [], borderColor: '#f472b6', backgroundColor: 'rgba(244,114,182,0.08)', fill: true, yAxisID: 'y' },
          { label: 'V, м/с', data: [], borderColor: '#34d399', backgroundColor: 'transparent', fill: false, yAxisID: 'y1' },
        ],
      },
      options: optionsQ,
    });
  }

  /** Кадровый апдейт: догружаем новые сэмплы, режем окно 8 сек */
  update(): void {
    const n = this.sim.historyLength;
    // Перезапуск симуляции (история пуста или t «омолодел») → полная пересборка
    const latest = n > 0 ? this.sim.historyAt(n - 1) : undefined;
    if (!latest || latest.t < this.lastSentT) {
      this.rebuildWindow(this.sim.time - WINDOW_S);
      return;
    }

    const tMin = this.sim.time - WINDOW_S;

    // Инкрементальная поддержка скользящего окна. Два уровня защиты от роста:
    // 1) trimToCapacity() — жёсткий потолок числа точек (гарантия bounded);
    // 2) prune по keep()-оценке — точное удаление устаревших точек окна.
    this.trimToCapacity();
    const dataLen = (this.chartP.data.datasets[0].data as unknown[]).length;
    let remove = dataLen - sentIdxInWindow(this.sentIdx, n);
    if (!(remove > 0)) remove = 0;
    if (remove > dataLen) remove = dataLen;
    if (remove > 0) {
      for (const ds of this.chartP.data.datasets) (ds.data as unknown[]).splice(0, remove);
      for (const ds of this.chartQ.data.datasets) (ds.data as unknown[]).splice(0, remove);
    }
    this.sentIdx -= remove;

    // Догружаем только новые сэмплы (догоняющая загрузка, O(new))
    for (let i = this.sentIdx; i < n; i++) {
      const s = this.sim.historyAt(i);
      if (!s) continue;
      this.pushSample(s);
    }
    this.sentIdx = n;
    this.lastSentT = latest.t;
    this.trimToCapacity();

    this.applyXRange(tMin);
    this.chartP.update('none');
    this.chartQ.update('none');
  }

  /** Жёсткий потолок: никогда не держать в графиках больше WINDOW_CAP точек */
  private trimToCapacity(): void {
    const len = (this.chartP.data.datasets[0].data as unknown[]).length;
    const over = len - WINDOW_CAP;
    if (over > 0) {
      const cnt = Math.min(over, len);
      for (const ds of this.chartP.data.datasets) (ds.data as unknown[]).splice(0, cnt);
      for (const ds of this.chartQ.data.datasets) (ds.data as unknown[]).splice(0, cnt);
      this.sentIdx = Math.max(0, this.sentIdx - cnt);
    }
  }

  /** Полная пересборка окна (reset симуляции / первый кадр) */
  private rebuildWindow(tMin: number): void {
    const cp = this.chartP.data.datasets;
    const cq = this.chartQ.data.datasets;
    for (const ds of [cp[0], cp[1], cq[0], cq[1]]) (ds.data as unknown[]).length = 0;

    const n = this.sim.historyLength;
    let lastT = -1;
    for (let i = 0; i < n; i++) {
      const s = this.sim.historyAt(i);
      if (!s || s.t < tMin) continue;
      this.pushSample(s);
      lastT = s.t;
    }
    this.sentIdx = n;
    this.lastSentT = lastT;
    this.trimToCapacity();

    this.applyXRange(tMin);
    this.chartP.update('none');
    this.chartQ.update('none');
  }

  private pushSample(s: TelemetrySample): void {
    const p = { x: s.t, y: s.pAccumBar };
    const c = { x: s.t, y: s.pChamberBar };
    const q = { x: s.t, y: s.qLps };
    const v = { x: s.t, y: s.vMs };
    (this.chartP.data.datasets[0].data as unknown[]).push(p);
    (this.chartP.data.datasets[1].data as unknown[]).push(c);
    (this.chartQ.data.datasets[0].data as unknown[]).push(q);
    (this.chartQ.data.datasets[1].data as unknown[]).push(v);
  }

  private applyXRange(tMin: number): void {
    this.chartP.options.scales!.x!.min = tMin as never;
    this.chartP.options.scales!.x!.max = this.sim.time as never;
    this.chartQ.options.scales!.x!.min = tMin as never;
    this.chartQ.options.scales!.x!.max = this.sim.time as never;
  }

  setVisible(show: boolean): void {
    this.root.style.display = show ? '' : 'none';
  }

  dispose(): void {
    this.chartP.destroy();
    this.chartQ.destroy();
    this.root.remove();
  }
}
