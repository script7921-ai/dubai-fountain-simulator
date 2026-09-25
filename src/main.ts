/**
 * main.ts — точка входа Digital Twin: сборка модулей, связывание физики, 3D-сцены,
 * частиц, звука и UI; фиксированный шаг интеграции + горячие клавиши.
 */

import * as THREE from 'three';
import './styles/main.css';

import { GunPhase } from './core/types';
import { FountainSimulator } from './physics/FountainSimulator';
import { SceneManager } from './scene/SceneManager';
import { WaterParticles } from './scene/WaterParticles';
import { SoundEngine } from './audio/SoundEngine';
import { HUD } from './ui/HUD';
import { TelemetryChart } from './ui/TelemetryChart';
import { ControlPanel } from './ui/ControlPanel';

// ---------------- Boot ----------------
const app = document.getElementById('app')!;
const boot = document.getElementById('boot');

const sim = new FountainSimulator();
const scene = new SceneManager(app);
const audio = new SoundEngine();
const hud = new HUD(app, sim);
const charts = new TelemetryChart(app, sim);
const panel = new ControlPanel(app, sim, scene, audio);

// Шина событий физики → звук / эффекты
sim.bus.on((e) => {
  audio.handleEvent(e);
  if (e.type === 'muzzle-break') {
    const pos = new THREE.Vector3();
    const dir = new THREE.Vector3();
    scene.muzzleWorld(pos, dir);
    scene.particles.burst(
      {
        velocity: e.velocityMs,
        direction: dir,
        origin: pos.clone().addScaledVector(dir, 0.2),
        flowLps: e.flowLps,
        duration: Math.max(0.18, sim.config.valvePulseMs / 1000),
      },
      sim.config.particleDensity
    );
    scene.fireFeedback(Math.min(1, e.velocityMs / 120));
  }
});

// ---------------- Fixed timestep physics ----------------
const PHYS_DT = 1 / 240; // жёсткий шаг из-за «жёсткой» пружины давления камеры
let accumulator = 0;
let lastPhase: GunPhase = sim.phase;

const muzzlePos = new THREE.Vector3();
const muzzleDir = new THREE.Vector3();

// FPS meter
let fpsFrames = 0;
let fpsTime = 0;
let fps = 60;
let dripTimer = 0;

scene.start((realDt /* , visualTime */) => {
  // Физика с масштабом времени
  accumulator += realDt * sim.config.timeScale;
  let steps = 0;
  while (accumulator >= PHYS_DT && steps < 24) {
    sim.step(PHYS_DT);
    accumulator -= PHYS_DT;
    steps++;
  }
  if (steps >= 24) accumulator = 0; // защита от спирали смерти

  // Переходы фаз → побочные эффекты
  if (sim.phase !== lastPhase) {
    if (sim.phase === GunPhase.RECOVER) audio.rechargeSwell(sim.accumulator.chargeFraction);
    lastPhase = sim.phase;
  }

  // Анимация пушки по состоянию физики
  scene.fountain.update({
    pistonTravel: sim.pistonTravel,
    valveOpening: sim.valveOpening,
    jetVelocity: sim.jetVelocity,
    chargeFrac: sim.accumulator.chargeFraction,
    azimuthDeg: sim.oarsmanAzimuth,
    elevationDeg: sim.oarsmanElevation,
    firing: sim.phase === GunPhase.FIRE || sim.phase === GunPhase.ARM,
  });

  // Частицы живут в реальном времени шейдера
  scene.particles.update(scene.time, realDt);

  // Фоновое оседание брызг + волна рассеивания при падении струи
  if (sim.jetHeight > 5) {
    dripTimer += realDt;
    if (dripTimer > 0.12) {
      dripTimer = 0;
      scene.particles.ambientDrip();
    }
    // Точка падения струи ~ по баллистике: смещаемся вдоль направления ствола
    scene.muzzleWorld(muzzlePos, muzzleDir);
    const range = sim.jetHeight * 0.18; // почти вертикальный выстрел → радиус падения мал
    scene.environment.spawnRipple(
      muzzlePos.x + muzzleDir.x * range,
      muzzlePos.z + muzzleDir.z * range,
      Math.min(1, sim.jetVelocity / 90)
    );
  }

  // HUD/графики — не чаще 30 Гц
  fpsFrames++;
  fpsTime += realDt;
  if (fpsTime >= 0.5) {
    fps = fpsFrames / fpsTime;
    fpsFrames = 0;
    fpsTime = 0;
  }
  hud.update(fps, scene.particles.particleBudget);
  charts.update();
  panel.setFireEnabled(sim.phase === GunPhase.IDLE && sim.accumulator.chargeFraction > 0.35);
});

// ---------------- Hotkeys ----------------
window.addEventListener('keydown', (ev) => {
  if ((ev.target as HTMLElement)?.tagName === 'INPUT') return;
  const c = sim.config;
  switch (ev.code) {
    case 'Space':
      ev.preventDefault();
      audio.ensureContext();
      if (sim.triggerFire()) panel.pulseFire();
      break;
    case 'KeyC':
      sim.setConfig({ cutawayEnabled: !c.cutawayEnabled });
      scene.setCutaway(sim.config.cutawayEnabled, sim.config.cutawayOffset);
      panel.refresh();
      break;
    case 'KeyB':
      sim.setConfig({ bloomEnabled: !c.bloomEnabled });
      scene.setBloom(sim.config.bloomEnabled, sim.config.bloomStrength);
      panel.refresh();
      break;
    case 'KeyA':
      sim.setConfig({ autoSequence: !c.autoSequence });
      panel.refresh();
      break;
    case 'KeyR':
      panel.resetDefaults();
      break;
    case 'ArrowLeft':
      ev.preventDefault();
      sim.setConfig({ azimuthDeg: clampAz(c.azimuthDeg - 5) });
      panel.refresh();
      break;
    case 'ArrowRight':
      ev.preventDefault();
      sim.setConfig({ azimuthDeg: clampAz(c.azimuthDeg + 5) });
      panel.refresh();
      break;
    case 'ArrowUp':
      ev.preventDefault();
      sim.setConfig({ elevationDeg: Math.min(90, c.elevationDeg + 2) });
      panel.refresh();
      break;
    case 'ArrowDown':
      ev.preventDefault();
      sim.setConfig({ elevationDeg: Math.max(45, c.elevationDeg - 2) });
      panel.refresh();
      break;
    default:
      break;
  }
});

function clampAz(a: number): number {
  while (a > 180) a -= 360;
  while (a < -180) a += 360;
  return Math.round(a * 10) / 10;
}

// Разблокировка WebAudio по первому клику
window.addEventListener('pointerdown', () => audio.ensureContext(), { once: true });

// Убираем boot-экран
requestAnimationFrame(() => {
  setTimeout(() => {
    if (boot) {
      boot.style.opacity = '0';
      setTimeout(() => boot.remove(), 700);
    }
  }, 350);
});

// Экспорт для отладки в консоли
declare global {
  interface Window {
    __DF_SIM: FountainSimulator;
    __DF_SCENE: SceneManager;
    __DF_PARTICLES: WaterParticles;
  }
}
window.__DF_SIM = sim;
window.__DF_SCENE = scene;
window.__DF_PARTICLES = scene.particles;

console.info(
  '%c DUBAI FOUNTAIN · DIGITAL TWIN %c ExtremeShooter + Oarsmen · GPU particles: ' + scene.particles.particleBudget.toLocaleString('en-US'),
  'background:#0ea5e9;color:#04121f;font-weight:bold;padding:2px 6px;border-radius:3px',
  'color:#38bdf8'
);
