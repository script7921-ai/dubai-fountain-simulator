/**
 * SoundEngine.ts — процедурный аудио-движок на Web Audio API.
 *
 * Синтез без семплов:
 *  • valve-open   — короткий «клац» соленоида (band-pass impulse) + шипение утечки;
 *  • muzzle-break — удар выстрела: взрывной burst шума через lowpass-огибающую,
 *                   саб-удар (sine sweep 90→35 Гц), нелинейный дисторшн-сатурация;
 *  • splash       — падение струи в озеро: расщеплённый шум с гребёнкой резонансов;
 *  • recharge     — нарастающий свист подзарядки ресивера (resonant noise);
 *  • oarsman      — сервопривод: тиканье червячного редуктора + гул 50 Гц.
 */

import { SimEvent } from '../core/types';

export class SoundEngine {
  private ctx: AudioContext | null = null;
  private master!: GainNode;
  private comp!: DynamicsCompressorNode;
  private noiseBuf!: AudioBuffer;
  enabled = true;
  volume = 0.8;

  /** Инициализация по первому user-gesture (политика автоплея) */
  ensureContext(): void {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') void this.ctx.resume();
      return;
    }
    const AC: typeof AudioContext =
      window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new AC({ latencyHint: 'interactive' });

    this.comp = this.ctx.createDynamicsCompressor();
    this.comp.threshold.value = -16;
    this.comp.knee.value = 24;
    this.comp.ratio.value = 6;
    this.comp.attack.value = 0.003;
    this.comp.release.value = 0.25;

    this.master = this.ctx.createGain();
    this.master.gain.value = this.volume;
    this.comp.connect(this.master).connect(this.ctx.destination);

    // Розовый-ish noise buffer 4 сек
    const len = this.ctx.sampleRate * 4;
    this.noiseBuf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      b0 = 0.99765 * b0 + w * 0.099046;
      b1 = 0.963 * b1 + w * 0.2965164;
      b2 = 0.57 * b2 + w * 1.0526913;
      d[i] = Math.max(-1, Math.min(1, (b0 + b1 + b2 + w * 0.1848) * 0.25));
    }
  }

  setVolume(v: number): void {
    this.volume = v;
    if (this.ctx) this.master.gain.setTargetAtTime(v, this.ctx.currentTime, 0.05);
  }

  setEnabled(on: boolean): void {
    this.enabled = on;
    if (!on && this.ctx) this.master.gain.setTargetAtTime(0, this.ctx.currentTime, 0.03);
    if (on && this.ctx) this.master.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.03);
  }

  /** Диспетчер событий физики → звук */
  handleEvent(e: SimEvent): void {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    switch (e.type) {
      case 'valve-open':
        this.valveClick();
        this.hiss(0.35, 900);
        break;
      case 'muzzle-break':
        this.shot(e.velocityMs, e.flowLps);
        break;
      case 'piston-endstop':
        this.thud(70, 0.5);
        break;
      case 'recharge-complete':
        this.chime();
        break;
      case 'oarsman-move':
        this.servoWhir();
        break;
      default:
        break;
    }
  }

  /** Падающая струя в воду */
  splash(strength = 0.6): void {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    src.loop = true;

    const bp = this.ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.setValueAtTime(1600, t);
    bp.frequency.exponentialRampToValueAtTime(320, t + 1.4);
    bp.Q.value = 0.8;

    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.5 * strength, t + 0.05);
    g.gain.exponentialRampToValueAtTime(0.001, t + 1.8);

    src.connect(bp).connect(g).connect(this.comp);
    src.start(t);
    src.stop(t + 2.0);
  }

  // ---------------- синтезаторы ----------------

  /** Хлопок клапана: клик + щелчок пилота */
  private valveClick(): void {
    const ctx = this.ctx!;
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = 'square';
    osc.frequency.setValueAtTime(2400, t);
    osc.frequency.exponentialRampToValueAtTime(300, t + 0.03);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.22, t);
    g.gain.exponentialRampToValueAtTime(0.0005, t + 0.05);
    osc.connect(g).connect(this.comp);
    osc.start(t);
    osc.stop(t + 0.06);
  }

  /** Шипение стравливания */
  private hiss(level: number, cutoff: number): void {
    const ctx = this.ctx!;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    src.loop = true;
    src.playbackRate.value = 0.85 + Math.random() * 0.3;

    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = cutoff;

    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(level * 0.3, t + 0.04);
    g.gain.exponentialRampToValueAtTime(0.0005, t + 0.7);

    src.connect(hp).connect(g).connect(this.comp);
    src.start(t);
    src.stop(t + 0.8);
  }

  /** Основной выстрел пневмопушки */
  private shot(velocity: number, flowLps: number): void {
    const ctx = this.ctx!;
    const t = ctx.currentTime;
    const power = Math.min(1, velocity / 120) * Math.min(1, flowLps / 1000 + 0.4);

    // --- Саб-удар: синус-sweep вниз ---
    const sub = ctx.createOscillator();
    sub.type = 'sine';
    sub.frequency.setValueAtTime(95, t);
    sub.frequency.exponentialRampToValueAtTime(33, t + 0.35);
    const subG = ctx.createGain();
    subG.gain.setValueAtTime(0.9 * power, t);
    subG.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
    sub.connect(subG).connect(this.comp);
    sub.start(t);
    sub.stop(t + 0.55);

    // --- Взрывной broadband burst (шум через LPF с огибающей + waveshaper) ---
    const burst = ctx.createBufferSource();
    burst.buffer = this.noiseBuf;
    burst.loop = true;
    burst.playbackRate.value = 1.4;

    const shaper = ctx.createWaveShaper();
    shaper.curve = this.distortionCurve(18 * power);
    shaper.oversample = '4x';

    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(9000, t);
    lp.frequency.exponentialRampToValueAtTime(220, t + 0.4);
    lp.Q.value = 1.2;

    const bg = ctx.createGain();
    bg.gain.setValueAtTime(0.0001, t);
    bg.gain.exponentialRampToValueAtTime(0.85 * power + 0.1, t + 0.004); // атака 4 мс
    bg.gain.exponentialRampToValueAtTime(0.001, t + 0.5);

    burst.connect(shaper).connect(lp).connect(bg).connect(this.comp);
    burst.start(t);
    burst.stop(t + 0.6);

    // --- Свист разгоняемой струи (whoosh) ---
    const whoosh = ctx.createBufferSource();
    whoosh.buffer = this.noiseBuf;
    whoosh.loop = true;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.setValueAtTime(500, t + 0.02);
    bp.frequency.exponentialRampToValueAtTime(2600 + velocity * 12, t + 0.25);
    bp.Q.value = 2.2;
    const wg = ctx.createGain();
    wg.gain.setValueAtTime(0.0001, t + 0.02);
    wg.gain.exponentialRampToValueAtTime(0.28 * power, t + 0.12);
    wg.gain.exponentialRampToValueAtTime(0.0005, t + 0.9);
    whoosh.connect(bp).connect(wg).connect(this.comp);
    whoosh.start(t + 0.02);
    whoosh.stop(t + 1.0);

    // --- Эхо над озером (импульсный отклик Waterfront) ---
    const slap = ctx.createDelay();
    slap.delayTime.value = 0.19;
    const fb = ctx.createGain();
    fb.gain.value = 0.32;
    const damp = ctx.createBiquadFilter();
    damp.type = 'lowpass';
    damp.frequency.value = 1800;
    bg.connect(slap);
    slap.connect(damp).connect(fb).connect(slap);
    slap.connect(this.comp);
  }

  /** Низкий упругий удар поршня об ограничитель */
  private thud(freq: number, level: number): void {
    const ctx = this.ctx!;
    const t = ctx.currentTime;
    const o = ctx.createOscillator();
    o.type = 'triangle';
    o.frequency.setValueAtTime(freq * 1.6, t);
    o.frequency.exponentialRampToValueAtTime(freq * 0.6, t + 0.12);
    const g = ctx.createGain();
    g.gain.setValueAtTime(level, t);
    g.gain.exponentialRampToValueAtTime(0.0008, t + 0.22);
    o.connect(g).connect(this.comp);
    o.start(t);
    o.stop(t + 0.25);
  }

  /** Звуковой сигнал готовности после перезарядки */
  private chime(): void {
    const ctx = this.ctx!;
    const t = ctx.currentTime;
    [880, 1320].forEach((f, i) => {
      const o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.value = f;
      const g = ctx.createGain();
      const st = t + i * 0.09;
      g.gain.setValueAtTime(0.0001, st);
      g.gain.exponentialRampToValueAtTime(0.12, st + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0005, st + 0.3);
      o.connect(g).connect(this.comp);
      o.start(st);
      o.stop(st + 0.32);
    });
  }

  /** Сервопривод Oarsmen: гул редуктора */
  private servoWhir(): void {
    const ctx = this.ctx!;
    const t = ctx.currentTime;
    const dur = 0.9;

    const hum = ctx.createOscillator();
    hum.type = 'sawtooth';
    hum.frequency.setValueAtTime(48, t);
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 320;
    const hg = ctx.createGain();
    hg.gain.setValueAtTime(0.0001, t);
    hg.gain.linearRampToValueAtTime(0.06, t + 0.08);
    hg.gain.setValueAtTime(0.06, t + dur - 0.15);
    hg.gain.linearRampToValueAtTime(0.0001, t + dur);
    hum.connect(lp).connect(hg).connect(this.comp);
    hum.start(t);
    hum.stop(t + dur);

    // Тики червяка
    const ticks = 14;
    for (let i = 0; i < ticks; i++) {
      const tt = t + (i / ticks) * dur + Math.random() * 0.01;
      const o = ctx.createOscillator();
      o.type = 'square';
      o.frequency.value = 1800 + Math.random() * 500;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.028, tt);
      g.gain.exponentialRampToValueAtTime(0.0002, tt + 0.012);
      o.connect(g).connect(this.comp);
      o.start(tt);
      o.stop(tt + 0.02);
    }
  }

  /** Подзарядка ресивера — resonant swell (вызывается из main при RECOVER) */
  rechargeSwell(level: number): void {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    src.loop = true;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.Q.value = 6;
    bp.frequency.setValueAtTime(240, t);
    bp.frequency.exponentialRampToValueAtTime(1400, t + 1.6);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.09 * level, t + 0.8);
    g.gain.exponentialRampToValueAtTime(0.0002, t + 1.9);
    src.connect(bp).connect(g).connect(this.comp);
    src.start(t);
    src.stop(t + 2.0);
  }

  private distortionCurve(k: number): Float32Array<ArrayBuffer> {
    const n = 1024;
    const curve = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const x = (i * 2) / n - 1;
      curve[i] = ((3 + k) * x * 20 * (Math.PI / 180)) / (Math.PI + k * Math.abs(x));
    }
    return curve;
  }

  dispose(): void {
    if (this.ctx) void this.ctx.close();
    this.ctx = null;
  }
}
