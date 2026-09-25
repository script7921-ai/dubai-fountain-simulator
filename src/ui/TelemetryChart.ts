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
import type { FountainSimulator } from '../physics/FountainSimulator';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Legend, Tooltip);

export class TelemetryChart {
  private chartP: Chart;
  private chartQ: Chart;
  private root: HTMLElement;
  /** Индекс последней отправленной точки истории */
  private sentIdx = 0;

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

    const common = {
      responsive: true,
      animation: false as const,
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: 'nearest' as const },
      elements: { point: { radius: 0 }, line: { borderWidth: 1.6, tension: 0.12 } },
      scales: {
        x: {
          type: 'linear' as const,
          grid: { color: 'rgba(56,189,248,0.06)' },
          ticks: { color: '#475569', font: { size: 8, family: 'JetBrains Mono' }, maxTicksLimit: 9, callback: (v: unknown) => `${Number(v).toFixed(1)}s` },
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

    this.chartP = new Chart((this.root.querySelector('#chart-p') as HTMLCanvasElement), {
      type: 'line',
      data: {
        datasets: [
          { label: 'P ресивера', data: [], borderColor: '#38bdf8', backgroundColor: 'rgba(56,189,248,0.08)', fill: true },
          { label: 'P камеры', data: [], borderColor: '#fbbf24', backgroundColor: 'rgba(251,191,36,0.06)', fill: true },
        ],
      },
      options: structuredClone(common),
    });

    this.chartQ = new Chart((this.root.querySelector('#chart-q') as HTMLCanvasElement), {
      type: 'line',
      data: {
        datasets: [
          { label: 'Q, л/с', data: [], borderColor: '#f472b6', backgroundColor: 'rgba(244,114,182,0.08)', fill: true, yAxisID: 'y' },
          { label: 'V, м/с', data: [], borderColor: '#34d399', backgroundColor: 'transparent', fill: false, yAxisID: 'y1' },
        ],
      },
      options: Object.assign(structuredClone(common), {
        scales: Object.assign(structuredClone(common.scales), {
          y: { ...common.scales.y, title: { display: false } },
          y1: {
            position: 'right' as const,
            min: 0,
            grid: { drawOnChartArea: false },
            ticks: { color: '#475569', font: { size: 8, family: 'JetBrains Mono' }, maxTicksLimit: 5 },
          },
        }),
      }),
    });
  }

  /** Кадровый апдейт: догружаем новые сэмплы, режем окно 8 сек */
  update(): void {
    const hist = this.sim.history;
    const WINDOW = 8;
    const tMin = this.sim.time - WINDOW;

    // Если произошёл reset истории (симуляция перезапущена)
    if (hist.length < this.sentIdx || (hist.length > 0 && hist[0].t > tMin + WINDOW)) {
      this.sentIdx = 0;
    }

    const pAcc: { x: number; y: number }[] = [];
    const pCh: { x: number; y: number }[] = [];
    const q: { x: number; y: number }[] = [];
    const v: { x: number; y: number }[] = [];

    for (let i = Math.max(0, hist.length - 600); i < hist.length; i++) {
      const s = hist[i];
      if (s.t < tMin) continue;
      pAcc.push({ x: s.t, y: s.pAccumBar });
      pCh.push({ x: s.t, y: s.pChamberBar });
      q.push({ x: s.t, y: s.qLps });
      v.push({ x: s.t, y: s.vMs });
    }

    const cp = this.chartP.data.datasets;
    cp[0].data = pAcc;
    cp[1].data = pCh;
    this.chartP.options.scales!.x!.min = tMin as never;
    this.chartP.options.scales!.x!.max = this.sim.time as never;
    this.chartP.update('none');

    const cq = this.chartQ.data.datasets;
    cq[0].data = q;
    cq[1].data = v;
    this.chartQ.options.scales!.x!.min = tMin as never;
    this.chartQ.options.scales!.x!.max = this.sim.time as never;
    this.chartQ.update('none');
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
