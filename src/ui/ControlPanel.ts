/**
 * ControlPanel.ts — панель управления: слайдеры (Pзаряда, импульс клапана, азимут,
 * возвышение, slew-rate, насос, плотность частиц, time-scale), тумблеры CAD-среза,
 * Bloom, звук, авто-шоу и большая кнопка FIRE.
 */

import { DEFAULT_CONFIG, SimConfig } from '../core/types';
import type { FountainSimulator } from '../physics/FountainSimulator';
import type { SceneManager } from '../scene/SceneManager';
import type { SoundEngine } from '../audio/SoundEngine';

interface SliderSpec {
  key: keyof SimConfig;
  label: string;
  min: number;
  max: number;
  step: number;
  unit: string;
  fmt?: (v: number) => string;
}

const SLIDERS: SliderSpec[] = [
  { key: 'chargePressureBar', label: 'Заряд ресивера', min: 2, max: 12, step: 0.1, unit: 'бар' },
  { key: 'valvePulseMs', label: 'Импульс клапана', min: 60, max: 700, step: 10, unit: 'мс' },
  { key: 'elevationDeg', label: 'Возвышение', min: 45, max: 90, step: 1, unit: '°' },
  { key: 'azimuthDeg', label: 'Азимут Oarsmen', min: -180, max: 180, step: 1, unit: '°' },
  { key: 'slewRateDps', label: 'Slew-rate серво', min: 10, max: 300, step: 5, unit: '°/с' },
  { key: 'pumpFlowM3h', label: 'Подпиточный насос', min: 0, max: 800, step: 10, unit: 'м³/ч' },
  { key: 'particleDensity', label: 'Плотность частиц', min: 0.2, max: 2.5, step: 0.1, unit: '×' },
  { key: 'bloomStrength', label: 'Bloom', min: 0, max: 2, step: 0.05, unit: '' },
  { key: 'masterVolume', label: 'Громкость', min: 0, max: 1, step: 0.05, unit: '' },
  { key: 'showRateBpm', label: 'Темп шоу', min: 2, max: 40, step: 1, unit: 'в/мин' },
  { key: 'timeScale', label: 'Time scale', min: 0.1, max: 2, step: 0.05, unit: '×', fmt: (v) => v.toFixed(2) },
];

const CUT_SLIDER: SliderSpec = {
  key: 'cutawayOffset', label: 'Смещение реза X', min: -1, max: 1, step: 0.01, unit: '', fmt: (v) => v.toFixed(2),
};

export class ControlPanel {
  private root: HTMLElement;
  private fireBtn!: HTMLButtonElement;
  private toggles = new Map<string, HTMLElement>();
  private sliderEls = new Map<string, HTMLInputElement>();
  private collapsed = false;

  constructor(
    container: HTMLElement,
    private sim: FountainSimulator,
    private sm: SceneManager,
    private audio: SoundEngine
  ) {
    this.root = document.createElement('div');
    this.root.id = 'control-panel';
    this.root.className = 'absolute top-1/2 -translate-y-1/2 left-3 z-20 w-[228px] pointer-events-auto hidden lg:block';
    container.appendChild(this.root);
    this.build();
    this.pushAll();
  }

  private build(): void {
    const cfg = this.sim.config;
    this.root.innerHTML = /* html */ `
      <div class="hud-panel p-3 space-y-2.5 max-h-[86vh] overflow-y-auto scroll-slim">
        <div class="flex items-center justify-between">
          <span class="hud-title">УПРАВЛЕНИЕ КОМПЛЕКСОМ</span>
          <button id="cp-collapse" class="text-sky-400 text-xs px-1 hover:text-sky-200">▾</button>
        </div>

        <div id="cp-body" class="space-y-2.5">
          <button id="btn-fire" class="hud-btn-fire w-full">⬤ ОГОНЬ&nbsp;<span class="opacity-60 normal-case tracking-normal">[SPACE]</span></button>
          <div class="grid grid-cols-2 gap-1.5">
            <button id="btn-arm" class="hud-btn">ARM</button>
            <button id="btn-vent" class="hud-btn !border-red-500/40 !bg-red-500/10 !text-red-300">VENT</button>
          </div>

          <div class="pt-1 space-y-2" id="cp-sliders"></div>

          <div class="border-t border-sky-500/15 pt-2 space-y-1.5">
            ${toggleRow('tCut', 'CAD-разрез', cfg.cutawayEnabled)}
            ${toggleRow('tBloom', 'Bloom', cfg.bloomEnabled)}
            ${toggleRow('tAudio', 'Звук', cfg.audioEnabled)}
            ${toggleRow('tShow', 'Авто-шоу', cfg.autoSequence)}
            <div id="cp-cut-slider" class="hidden pt-1"></div>
          </div>

          <div class="border-t border-sky-500/15 pt-2 grid grid-cols-3 gap-1.5">
            <button id="cam-gun" class="hud-btn !text-[9px] !px-1">ПУШКА</button>
            <button id="cam-jet" class="hud-btn !text-[9px] !px-1">СТРУЯ</button>
            <button id="cam-wide" class="hud-btn !text-[9px] !px-1">ОБЩИЙ</button>
          </div>

          <div class="text-[8px] leading-relaxed text-slate-500 pt-1">
            <kbd class="key">Space</kbd> огонь · <kbd class="key">C</kbd> разрез ·
            <kbd class="key">B</kbd> bloom · <kbd class="key">A</kbd> авто-шоу ·
            <kbd class="key">←</kbd><kbd class="key">→</kbd> азимут · <kbd class="key">↑</kbd><kbd class="key">↓</kbd> возвышение
          </div>
        </div>
      </div>
    `;

    const host = this.root.querySelector('#cp-sliders')!;
    for (const s of SLIDERS) host.appendChild(this.makeSlider(s));

    this.root.querySelector('#cp-cut-slider')!.appendChild(this.makeSlider(CUT_SLIDER));

    // Кнопки
    this.fireBtn = this.root.querySelector('#btn-fire') as HTMLButtonElement;
    this.fireBtn.addEventListener('click', () => this.fire());
    (this.root.querySelector('#btn-arm') as HTMLButtonElement).addEventListener('click', () => {
      this.sim.accumulator.forceChargeToTarget();
    });
    (this.root.querySelector('#btn-vent') as HTMLButtonElement).addEventListener('click', () => {
      this.sim.emergencyVent();
    });

    (this.root.querySelector('#cam-gun') as HTMLButtonElement).addEventListener('click', () => this.sm.focusGun());
    (this.root.querySelector('#cam-jet') as HTMLButtonElement).addEventListener('click', () => this.sm.focusJet(this.sim.readout.jetHeight || 100));
    (this.root.querySelector('#cam-wide') as HTMLButtonElement).addEventListener('click', () => this.sm.wideShot());

    const collapseBtn = this.root.querySelector('#cp-collapse') as HTMLButtonElement;
    collapseBtn.addEventListener('click', () => {
      this.collapsed = !this.collapsed;
      (this.root.querySelector('#cp-body') as HTMLElement).style.display = this.collapsed ? 'none' : '';
      collapseBtn.textContent = this.collapsed ? '▸' : '▾';
    });

    // Тумблеры
    for (const id of ['tCut', 'tBloom', 'tAudio', 'tShow']) {
      const el = this.root.querySelector(`#wrap-${id}`) as HTMLElement;
      this.toggles.set(id, el);
      el.addEventListener('click', () => this.flipToggle(id));
    }
  }

  private makeSlider(spec: SliderSpec): HTMLElement {
    const wrap = document.createElement('div');
    const val = this.sim.config[spec.key] as number;
    wrap.innerHTML = /* html */ `
      <div class="flex justify-between items-baseline">
        <span class="text-[9px] uppercase tracking-wider text-slate-400">${spec.label}</span>
        <span class="text-[10px] text-sky-300 tabular-nums" data-val>${spec.fmt ? spec.fmt(val) : val.toFixed(spec.step < 0.1 ? 2 : spec.step < 1 ? 1 : 0)}${spec.unit}</span>
      </div>
      <input type="range" class="hud-slider" min="${spec.min}" max="${spec.max}" step="${spec.step}" value="${val}" />
    `;
    const input = wrap.querySelector('input')!;
    const label = wrap.querySelector('[data-val]') as HTMLElement;
    const paint = (): void => {
      const pct = ((Number(input.value) - spec.min) / (spec.max - spec.min)) * 100;
      input.style.setProperty('--fill', `${pct}%`);
      label.textContent = (spec.fmt ? spec.fmt(Number(input.value)) : Number(input.value).toFixed(spec.step < 0.1 ? 2 : spec.step < 1 ? 1 : 0)) + spec.unit;
    };
    paint();
    input.addEventListener('input', () => {
      paint();
      this.sim.setConfig({ [spec.key]: Number(input.value) } as Partial<SimConfig>);
      this.applySideEffects(spec.key);
    });
    this.sliderEls.set(spec.key, input);
    return wrap;
  }

  private applySideEffects(key: keyof SimConfig): void {
    const c = this.sim.config;
    switch (key) {
      case 'bloomStrength':
      case 'bloomEnabled':
        this.sm.setBloom(c.bloomEnabled, c.bloomStrength);
        break;
      case 'cutawayEnabled':
      case 'cutawayOffset':
        this.sm.setCutaway(c.cutawayEnabled, c.cutawayOffset);
        break;
      case 'audioEnabled':
        this.audio.setEnabled(c.audioEnabled);
        break;
      case 'masterVolume':
        this.audio.setVolume(c.masterVolume);
        break;
      default:
        break;
    }
  }

  private flipToggle(id: string): void {
    const c = this.sim.config;
    let next: Partial<SimConfig> = {};
    if (id === 'tCut') next = { cutawayEnabled: !c.cutawayEnabled };
    if (id === 'tBloom') next = { bloomEnabled: !c.bloomEnabled };
    if (id === 'tAudio') next = { audioEnabled: !c.audioEnabled };
    if (id === 'tShow') next = { autoSequence: !c.autoSequence };
    this.sim.setConfig(next);
    this.applySideEffects(Object.keys(next)[0] as keyof SimConfig);
    this.syncToggles();
    const cutHost = this.root.querySelector('#cp-cut-slider') as HTMLElement;
    cutHost.classList.toggle('hidden', !c.cutawayEnabled);
  }

  private syncToggles(): void {
    const c = this.sim.config;
    const map: Record<string, boolean> = { tCut: c.cutawayEnabled, tBloom: c.bloomEnabled, tAudio: c.audioEnabled, tShow: c.autoSequence };
    for (const [id, on] of Object.entries(map)) {
      const el = this.toggles.get(id);
      if (!el) continue;
      const sw = el.querySelector('.hud-toggle')!;
      sw.classList.toggle('on', on);
    }
  }

  /** Синхронизация UI извне (горячие клавиши) */
  refresh(): void {
    for (const [key, input] of this.sliderEls) {
      const v = this.sim.config[key as keyof SimConfig] as number;
      if (Math.abs(Number(input.value) - v) > Number(input.step) / 2) {
        input.value = String(v);
        input.dispatchEvent(new Event('input'));
      }
    }
    this.syncToggles();
    const cutHost = this.root.querySelector('#cp-cut-slider') as HTMLElement;
    cutHost.classList.toggle('hidden', !this.sim.config.cutawayEnabled);
  }

  setFireEnabled(enabled: boolean): void {
    if (this.fireBtn.disabled === !enabled) return;
    this.fireBtn.disabled = !enabled;
  }

  pulseFire(): void {
    this.fireBtn.classList.remove('fire-pulse');
    void (this.fireBtn as HTMLElement).offsetWidth; // reflow
    this.fireBtn.classList.add('fire-pulse');
  }

  private fire(): void {
    this.audio.ensureContext();
    if (this.sim.triggerFire()) this.pulseFire();
  }

  get config(): SimConfig {
    return this.sim.config;
  }

  resetDefaults(): void {
    this.sim.setConfig({ ...DEFAULT_CONFIG });
    this.refresh();
    this.pushAll();
  }

  private pushAll(): void {
    this.sm.setBloom(this.sim.config.bloomEnabled, this.sim.config.bloomStrength);
    this.sm.setCutaway(this.sim.config.cutawayEnabled, this.sim.config.cutawayOffset);
    this.audio.setEnabled(this.sim.config.audioEnabled);
    this.audio.setVolume(this.sim.config.masterVolume);
    this.syncToggles();
  }
}

function toggleRow(id: string, label: string, on: boolean): string {
  return `
  <div id="wrap-${id}" class="flex items-center justify-between cursor-pointer group">
    <span class="text-[10px] uppercase tracking-wider text-slate-400 group-hover:text-slate-200">${label}</span>
    <span class="hud-toggle ${on ? 'on' : ''}"><span class="knob"></span></span>
  </div>`;
}
