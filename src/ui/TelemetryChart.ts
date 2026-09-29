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
    this.root.className = 'absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2 pointer-events-auto';
    container.appendChild(this.root);

    this.root.innerHTML = /* html */ `
      <div class="hud-panel p-2 w-[340px] md:w-[430px]">
        <div class="flex justify-between items-center mb-0.5">
          <span class="hud-title">P(t) · РЕСИВЕР / КАМЕРА, бар</span>
          <span class="text-[8px] text-slate-500">ОКНО 8 c</span>
        </div>
        <canvas id="chart-p" height="96"></canvas>
      </div>
      <div class="hud-panel p-2 w-[340px] md:w-[430px] hidden sm:block">
        <div class="flex justify-between items-center mb-0.5">
          <span class="hud-title">Q(t) · РАСХОД / ФРОНТ СТРУИ</span>
          <span class="text-[8px] text-slate-500">ОКНО 8 c</span>
        </div>
        <canvas id="chart-q" height="96"></canvas>
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
    // Перезапуск симуляции (t «омолодел») или смена окна → полная пересборка
    const latest = this.sim.historyAt(this.sim.historyLength - 1);
    if (!latest || latest.t < this.lastSentT) {
      this.rebuildWindow(this.sim.time - WINDOW_S);
      return;
    }

    const n = this.sim.historyLength;
    const tMin = this.sim.time - WINDOW_S;

    // 1) Сдвигаем левую границу окна: удаляем устаревшие точки с начала массивов Chart.js.
    //    sentIdx — абсолютный индекс в кольцевом буфере; при prune сдвигаем его назад
    //    и синхронизируем chart-length === sentIdx - dropped.
    let drop = 0;
    while (drop < n) {
      const s = this.sim.historyAt(drop);
      if (!s || s.t >= tMin) break;
      drop++;
    }
    const chartLen = (this.chartP.data.datasets[0].data as unknown[]).length;
    if (drop > 0 && chartLen > 0) {
      const cnt = Math.min(drop, chartLen);
      for (const ds of this.chartP.data.datasets) (ds.data as unknown[]).splice(0, cnt);
      for (const ds of this.chartQ.data.datasets) (ds.data as unknown[]).splice(0, cnt);
    }
    this.sentIdx -= drop; // теперь sentIdx — кол-во точек в окне == длине графиков

    // 2) Догружаем только новые сэмплы (догоняющая загрузка, O(new))
    for (let i = Math.max(this.sentIdx, 0); i < n; i++) {
      const s = this.sim.historyAt(i);
      if (!s || s.t < tMin) continue;
      this.pushSample(s);
    }
    this.sentIdx = n;
    this.lastSentT = latest.t;

    this.applyXRange(tMin);
    this.chartP.update('none');
    this.chartQ.update('none');
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
