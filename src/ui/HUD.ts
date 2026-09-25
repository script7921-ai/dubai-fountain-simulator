/**
 * HUD.ts — оверлей приборов: canvas-спидометры (P_acc, P_chamber, V_jet, Q) +
 * цифровые датчики, LED-статус фазы автомата, компас Oarsmen, высота струи.
 */

import { GunPhase } from '../core/types';
import type { FountainSimulator, GunReadout } from '../physics/FountainSimulator';

interface GaugeSpec {
  id: string;
  label: string;
  unit: string;
  max: number;
  color: string;
  get: (s: GunReadout) => number;
}

const GAUGES: GaugeSpec[] = [
  { id: 'gAcc', label: 'РЕСИВЕР P·Vᵞ', unit: 'бар', max: 12, color: '#38bdf8', get: (s) => s.pAccumBar },
  { id: 'gCh', label: 'КАМЕРА ΔP', unit: 'бар', max: 12, color: '#fbbf24', get: (s) => s.pChamberBar },
  { id: 'gV', label: 'ФРОНТ V_JET', unit: 'м/с', max: 150, color: '#34d399', get: (s) => s.jetVelocity },
  { id: 'gQ', label: 'РАСХОД Q', unit: 'л/с', max: 1600, color: '#f472b6', get: (s) => s.flowLps },
];

const PHASE_LABEL: Record<GunPhase, { ru: string; led: string }> = {
  [GunPhase.IDLE]: { ru: 'ГОТОВ', led: 'led-green' },
  [GunPhase.CHARGE]: { ru: 'ЗАРЯД ВОДЫ', led: 'led-amber' },
  [GunPhase.ARM]: { ru: 'ВЗВОД ПИЛОТА', led: 'led-amber' },
  [GunPhase.FIRE]: { ru: '▮ ВЫСТРЕЛ ▮', led: 'led-red' },
  [GunPhase.RECOVER]: { ru: 'ПЕРЕЗАРЯДКА', led: 'led-amber' },
};

export class HUD {
  private root: HTMLElement;
  private canvases = new Map<string, HTMLCanvasElement>();
  private needles = new Map<string, number>(); // сглаживание стрелки
  private digital: Record<string, HTMLElement> = {};

  constructor(container: HTMLElement, private sim: FountainSimulator) {
    this.root = document.createElement('div');
    this.root.id = 'hud';
    this.root.className = 'pointer-events-none absolute inset-0 z-10';
    container.appendChild(this.root);
    this.buildLayout();
  }

  private buildLayout(): void {
    this.root.insertAdjacentHTML(
      'beforeend',
      /* html */ `
      <!-- Верхняя строка -->
      <div class="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-4 hud-panel px-5 py-2">
        <div class="text-[11px] tracking-[0.3em] text-sky-300 font-bold">DUBAI&nbsp;FOUNTAIN · DIGITAL&nbsp;TWIN</div>
        <div class="w-px h-4 bg-sky-500/30"></div>
        <div class="flex items-center gap-2">
          <span id="hud-led" class="led led-green"></span>
          <span id="hud-phase" class="text-[11px] font-bold tracking-widest text-emerald-300">ГОТОВ</span>
        </div>
        <div class="w-px h-4 bg-sky-500/30"></div>
        <div class="text-[10px] text-slate-400 tabular-nums">T+<span id="hud-clock">0.00</span>s</div>
      </div>

      <!-- Спидометры слева -->
      <div class="absolute left-3 top-16 grid grid-cols-2 gap-2" id="hud-gauges"></div>

      <!-- Цифровые датчики справа -->
      <div class="absolute right-3 top-16 w-56 hud-panel p-3 space-y-2 text-[11px]" id="hud-digital">
        <div class="hud-title mb-1">ТЕЛЕМЕТРИЯ УЗЛА</div>
        ${row('JET HEIGHT', 'hJet', 'м')}
        ${row('SLUG TRAVEL', 'hSlug', '%')}
        ${row('VALVE', 'hValve', '%')}
        ${row('VESSEL FILL', 'hFill', '%')}
        ${row('GAS TEMP', 'hTemp', '°C')}
        ${row('Re NUMBER', 'hRe', '')}
        ${row('REGIME', 'hRegime', '', true)}
        ${row('PUMP POWER', 'hPump', 'кВт')}
        ${row('OARSMEN AZ', 'hAz', '°')}
        ${row('AZ RATE', 'hAzR', '°/с')}
        ${row('ELEVATION', 'hEl', '°')}
        ${row('PARTICLES', 'hParts', '')}
      </div>

      <!-- Компас Oarsmen снизу справа -->
      <div class="absolute right-3 bottom-3 hud-panel p-2">
        <canvas id="hud-compass" width="120" height="120"></canvas>
      </div>

      <!-- Шкала высоты струи снизу слева -->
      <div class="absolute left-3 bottom-3 hud-panel p-2 hidden md:block">
        <div class="hud-title mb-1">ВЫСОТА СТРУИ</div>
        <div class="relative h-40 w-10 bg-slate-900/60 rounded border border-sky-500/20 overflow-hidden">
          <div id="hud-jetbar" class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-sky-600 to-cyan-300 transition-none" style="height:0%"></div>
          <div class="absolute inset-0 flex flex-col justify-between text-[7px] text-slate-500 px-1 py-0.5">
            <span>160</span><span>120</span><span>80</span><span>40</span><span>0 м</span>
          </div>
        </div>
      </div>
      `
    );

    const gaugeHost = this.root.querySelector('#hud-gauges')!;
    for (const g of GAUGES) {
      const wrap = document.createElement('div');
      wrap.className = 'hud-panel p-1.5';
      wrap.innerHTML = `<canvas width="118" height="96" data-g="${g.id}"></canvas>
        <div class="gauge-label text-center -mt-1">${g.label}</div>`;
      gaugeHost.appendChild(wrap);
      this.canvases.set(g.id, wrap.querySelector('canvas')!);
    }

    for (const key of ['hJet', 'hSlug', 'hValve', 'hFill', 'hTemp', 'hRe', 'hRegime', 'hPump', 'hAz', 'hAzR', 'hEl', 'hParts']) {
      this.digital[key] = this.root.querySelector(`#v-${key}`) as HTMLElement;
    }

    this.compassCtx = (this.root.querySelector('#hud-compass') as HTMLCanvasElement).getContext('2d')!;
  }

  private compassCtx!: CanvasRenderingContext2D;
  private jetBar!: HTMLElement | null;

  /** Обновление каждый кадр */
  update(fps: number, particleCount: number): void {
    const s = this.sim.readout;

    // Фаза / LED / clock
    const ph = PHASE_LABEL[s.phase];
    const led = this.root.querySelector('#hud-led') as HTMLElement;
    led.className = `led ${ph.led}`;
    const phaseEl = this.root.querySelector('#hud-phase') as HTMLElement;
    phaseEl.textContent = ph.ru;
    phaseEl.style.color =
      s.phase === GunPhase.FIRE ? '#f87171' : s.phase === GunPhase.IDLE ? '#34d399' : '#fbbf24';
    (this.root.querySelector('#hud-clock') as HTMLElement).textContent = s.time.toFixed(2);

    // Стрелки спидометров (EMA сглаживание)
    for (const g of GAUGES) {
      const target = Math.min(1, Math.max(0, g.get(s) / g.max));
      const cur = this.needles.get(g.id) ?? 0;
      const next = cur + (target - cur) * 0.22;
      this.needles.set(g.id, next);
      this.drawGauge(g, next, g.get(s));
    }

    // Цифровые поля
    const d = this.digital;
    setTxt(d.hJet, s.jetHeight.toFixed(1));
    setTxt(d.hSlug, (s.pistonTravel * 100).toFixed(0));
    setTxt(d.hValve, s.valvePct.toFixed(0));
    setTxt(d.hFill, s.fillPct.toFixed(0));
    setTxt(d.hTemp, s.gasTempC.toFixed(1));
    setTxt(d.hRe, fmtRe(s.reynolds));
    setTxt(d.hRegime, regime(s.reynolds));
    setTxt(d.hPump, s.pumpKw.toFixed(1));
    setTxt(d.hAz, s.azimuth.toFixed(1));
    setTxt(d.hAzR, s.azimuthVel.toFixed(0));
    setTxt(d.hEl, s.elevation.toFixed(1));
    setTxt(d.hParts, `${particleCount.toLocaleString('ru-RU')} @${fps.toFixed(0)}fps`);

    // Jet bar
    if (!this.jetBar) this.jetBar = this.root.querySelector('#hud-jetbar');
    if (this.jetBar) this.jetBar.style.height = `${Math.min(100, (s.jetHeight / 160) * 100)}%`;

    this.drawCompass(s.azimuth, s.azimuthTarget, s.azimuthVel);
  }

  // ---------- Canvas gauge ----------
  private drawGauge(spec: GaugeSpec, frac: number, value: number): void {
    const cv = this.canvases.get(spec.id);
    if (!cv) return;
    const ctx = cv.getContext('2d')!;
    const W = cv.width, H = cv.height;
    const cx = W / 2, cy = H * 0.62, R = Math.min(W, H) * 0.44;
    ctx.clearRect(0, 0, W, H);

    const A0 = Math.PI * 0.78, A1 = Math.PI * 2.22; // дуга ~260°

    // Дуга-фон
    ctx.lineWidth = 7;
    ctx.strokeStyle = 'rgba(148,163,184,0.12)';
    ctx.beginPath();
    ctx.arc(cx, cy, R, A0, A1);
    ctx.stroke();

    // Активная дуга со свечением
    const ang = A0 + (A1 - A0) * frac;
    ctx.strokeStyle = spec.color;
    ctx.shadowColor = spec.color;
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(cx, cy, R, A0, ang);
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Деления
    ctx.strokeStyle = 'rgba(203,213,225,0.5)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 10; i++) {
      const a = A0 + ((A1 - A0) * i) / 10;
      const r0 = R - 10, r1 = R - (i % 5 === 0 ? 3 : 6);
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0);
      ctx.lineTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1);
      ctx.stroke();
    }

    // Стрелка
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(ang);
    ctx.fillStyle = '#e2e8f0';
    ctx.beginPath();
    ctx.moveTo(0, -2.2);
    ctx.lineTo(R - 6, 0);
    ctx.lineTo(0, 2.2);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.arc(cx, cy, 4.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = spec.color;
    ctx.stroke();

    // Значение
    ctx.fillStyle = spec.color;
    ctx.font = 'bold 15px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(fmtNum(value), cx, cy + R * 0.62);
    ctx.fillStyle = 'rgba(148,163,184,0.8)';
    ctx.font = '8px "JetBrains Mono", monospace';
    ctx.fillText(spec.unit, cx, cy + R * 0.62 + 11);
  }

  // ---------- Компас ----------
  private drawCompass(az: number, target: number, vel: number): void {
    const ctx = this.compassCtx;
    const cv = ctx.canvas;
    const W = cv.width, H = cv.height;
    const cx = W / 2, cy = H / 2, R = W * 0.38;
    ctx.clearRect(0, 0, W, H);

    ctx.strokeStyle = 'rgba(56,189,248,0.35)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = 'rgba(148,163,184,0.7)';
    ctx.font = '9px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    for (let a = 0; a < 360; a += 30) {
      const rad = ((a - 90) * Math.PI) / 180;
      const big = a % 90 === 0;
      ctx.strokeStyle = 'rgba(148,163,184,0.4)';
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(rad) * (R - (big ? 8 : 4)), cy + Math.sin(rad) * (R - (big ? 8 : 4)));
      ctx.lineTo(cx + Math.cos(rad) * R, cy + Math.sin(rad) * R);
      ctx.stroke();
      if (big) ctx.fillText(String(a), cx + Math.cos(rad) * (R + 9), cy + Math.sin(rad) * (R + 11));
    }

    // Маркер цели
    const tr = ((target - 90) * Math.PI) / 180;
    ctx.strokeStyle = 'rgba(251,191,36,0.8)';
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(tr) * R, cy + Math.sin(tr) * R);
    ctx.stroke();
    ctx.setLineDash([]);

    // Стрелка азимута
    const ar = ((az - 90) * Math.PI) / 180;
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2.5;
    ctx.shadowColor = '#38bdf8';
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(ar) * (R - 4), cy + Math.sin(ar) * (R - 4));
    ctx.stroke();
    ctx.shadowBlur = 0;

    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 11px "JetBrains Mono", monospace';
    ctx.fillText(`${az.toFixed(0)}°`, cx, cy + R + 22 > H ? H - 2 : cy + 4);
    ctx.fillStyle = 'rgba(148,163,184,0.8)';
    ctx.font = '8px "JetBrains Mono", monospace';
    ctx.fillText('OARSMEN AZ', cx, 12);
    ctx.fillText(`${vel.toFixed(0)}°/s`, cx, H - 5);
  }
}

function row(label: string, id: string, unit: string, small = false): string {
  return `
  <div class="flex items-baseline justify-between gap-2">
    <span class="text-slate-400 text-[9px] uppercase tracking-wider">${label}</span>
    <span class="flex items-baseline gap-1">
      <span id="v-${id}" class="hud-value ${small ? 'text-[10px] !font-semibold' : 'text-sm'}">${'—'}</span>
      <span class="hud-unit">${unit}</span>
    </span>
  </div>`;
}

function setTxt(el: HTMLElement | undefined, v: string): void {
  if (el && el.textContent !== v) el.textContent = v;
}

function fmtNum(v: number): string {
  return v >= 100 ? v.toFixed(0) : v >= 10 ? v.toFixed(1) : v.toFixed(2);
}

function fmtRe(re: number): string {
  if (re <= 0) return '0';
  if (re >= 1e6) return (re / 1e6).toFixed(2) + 'M';
  if (re >= 1e3) return (re / 1e3).toFixed(1) + 'k';
  return re.toFixed(0);
}

function regime(re: number): string {
  if (re < 2300) return re === 0 ? 'СТОЙ' : 'ЛАМ';
  if (re < 4000) return 'ПЕР';
  return 'ТУРБ';
}
