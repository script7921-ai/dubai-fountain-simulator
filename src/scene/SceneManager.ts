/**
 * SceneManager.ts — ядро рендера: WebGLRenderer, камера, свет, PBR-окружение (IBL),
 * OrbitControls и постобработка EffectComposer (Render → UnrealBloom → Output).
 *
 * Здесь же — clipping planes для CAD-разреза и «дирижирование» всеми 3D-компонентами
 * из единого render-loop.
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

import { Environment } from './Environment';
import { FountainModel } from './FountainModel';
import { WaterParticles } from './WaterParticles';
import { CutawayPlane } from './CutawayPlane';

export interface FrameCallbacks {
  /** вызывается перед рендером каждого кадра; dt — реальное время кадра, simTime — визуальный таймер */
  onFrame: (dt: number, simTime: number) => void;
}

export class SceneManager {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene = new THREE.Scene();
  readonly camera: THREE.PerspectiveCamera;
  readonly controls: OrbitControls;
  readonly composer: EffectComposer;
  readonly bloomPass: UnrealBloomPass;

  readonly environment = new Environment();
  readonly fountain = new FountainModel();
  readonly particles: WaterParticles;
  readonly cutaway = new CutawayPlane();

  private clock = new THREE.Clock();
  private visualTime = 0;
  private rafId = 0;
  private running = false;
  private callbacks: FrameCallbacks | null = null;
  private disposed = false;

  // Вспышка выстрела (свет + тряска камеры)
  private muzzleFlash: THREE.PointLight;
  private flashEnergy = 0;
  private shakeAmp = 0;

  // API-состояние для main.ts
  cutawayOffset = 0;
  readonly cutCenter = new THREE.Vector3(0, 2.2, 0);
  readonly lastMuzzlePos = new THREE.Vector3(0, 8, 0);

  constructor(private container: HTMLElement) {
    // ---------- Renderer ----------
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    // Явно фиксируем колор-пайплайн: по умолчанию в r150+ он и так sRGB,
    // но явная установка защищает от рассинхрона с #include <colorspace_fragment> в шейдерах
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.localClippingEnabled = true;
    this.renderer.domElement.className = 'webgl';
    container.appendChild(this.renderer.domElement);

    // ---------- Scene / fog ----------
    this.scene.fog = new THREE.FogExp2(0x08131f, 0.0038);

    // ---------- Camera ----------
    this.camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      2500
    );
    this.camera.position.set(26, 14, 34);

    // ---------- Controls ----------
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 6, 0);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    this.controls.maxPolarAngle = Math.PI * 0.52;
    this.controls.minDistance = 6;
    this.controls.maxDistance = 320;
    this.controls.update();

    // ---------- PBR environment (IBL) ----------
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();

    // ---------- Lights ----------
    this.scene.add(new THREE.HemisphereLight(0x9fc7ff, 0x0a1a26, 0.55));

    const moon = new THREE.DirectionalLight(0xcfe0ff, 1.15);
    moon.position.set(120, 180, 90);
    moon.castShadow = true;
    moon.shadow.mapSize.set(2048, 2048);
    moon.shadow.camera.left = -60;
    moon.shadow.camera.right = 60;
    moon.shadow.camera.top = 60;
    moon.shadow.camera.bottom = -60;
    moon.shadow.camera.far = 500;
    moon.shadow.bias = -0.0004;
    this.scene.add(moon);

    // Key light шоу на баржу
    const bargeKey = new THREE.SpotLight(0x38bdf8, 320, 90, Math.PI / 5, 0.45, 1.4);
    bargeKey.position.set(18, 26, 18);
    bargeKey.target.position.set(0, 2, 0);
    this.scene.add(bargeKey, bargeKey.target);

    // Тёплый контровой (городской свет Дубай Молла)
    const rimWarm = new THREE.SpotLight(0xffb45e, 160, 120, Math.PI / 4.5, 0.6, 1.2);
    rimWarm.position.set(-30, 18, -24);
    rimWarm.target.position.set(0, 4, 0);
    this.scene.add(rimWarm, rimWarm.target);

    this.muzzleFlash = new THREE.PointLight(0xbfe3ff, 0, 160, 1.6);
    this.muzzleFlash.position.set(0, 8, 0);
    this.scene.add(this.muzzleFlash);

    // ---------- Content ----------
    this.scene.add(this.environment.group);

    this.fountain.group.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (mesh.isMesh) {
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });
    this.scene.add(this.fountain.group);

    this.particles = new WaterParticles(this.scene);

    // CAD-разрез
    this.scene.add(this.cutaway.object);
    for (const m of this.fountain.clipMaterials) {
      m.clippingPlanes = [this.cutaway.plane];
      m.clipShadows = true;
      m.needsUpdate = true;
    }

    // ---------- Post-processing ----------
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(container.clientWidth, container.clientHeight),
      0.85,
      0.75,
      0.82
    );
    this.composer.addPass(this.bloomPass);
    this.composer.addPass(new OutputPass());

    window.addEventListener('resize', this.onResize);
  }

  get time(): number {
    return this.visualTime;
  }

  setBloom(enabled: boolean, strength: number): void {
    this.bloomPass.enabled = enabled;
    this.bloomPass.strength = strength;
  }

  /** Вспышка/тряска при выстреле; intensity 0..1 */
  fireFeedback(intensity: number): void {
    this.flashEnergy = Math.min(1, intensity);
    this.shakeAmp = Math.min(0.5, this.flashEnergy * 0.35);
  }

  start(cb: FrameCallbacks): void {
    if (this.running) return;
    this.running = true;
    this.callbacks = cb;
    this.clock.start();
    const loop = () => {
      if (!this.running) return;
      this.rafId = requestAnimationFrame(loop);
      const dt = Math.min(this.clock.getDelta(), 0.1);
      this.tick(dt);
    };
    loop();
  }

  stop(): void {
    this.running = false;
    cancelAnimationFrame(this.rafId);
  }

  private tick(realDt: number): void {
    // Логика приложения (физика, частицы) — через callback; он сам применяет timeScale
    this.callbacks?.onFrame(realDt, this.visualTime);
    this.visualTime += realDt;

    this.environment.update(this.visualTime);
    this.cutaway.update(this.visualTime, this.cutawayOffset, this.cutCenter);

    // Вспышка
    if (this.flashEnergy > 0) {
      this.muzzleFlash.intensity = this.flashEnergy * 9000;
      this.muzzleFlash.position.copy(this.lastMuzzlePos);
      this.flashEnergy *= Math.pow(0.0012, realDt);
      if (this.flashEnergy < 0.012) {
        this.flashEnergy = 0;
        this.muzzleFlash.intensity = 0;
      }
    }

    // Тряска камеры
    if (this.shakeAmp > 0.0015) {
      const s = this.shakeAmp;
      this.camera.position.x += (Math.random() - 0.5) * s;
      this.camera.position.y += (Math.random() - 0.5) * s;
      this.shakeAmp *= Math.pow(0.012, realDt);
    }

    this.controls.update();
    this.composer.render();
  }

  setCutaway(enabled: boolean, offset: number): void {
    this.cutaway.setEnabled(enabled);
    this.cutawayOffset = offset;
  }

  /** Мировая позиция/направление дульного среза (для спавна частиц) */
  muzzleWorld(outPos: THREE.Vector3, outDir: THREE.Vector3): void {
    this.fountain.getMuzzleWorld(outPos, outDir);
    this.lastMuzzlePos.copy(outPos);
  }

  focusGun(): void {
    this.controls.target.set(0, 5, 0);
    this.camera.position.set(14, 8, 18);
  }

  focusJet(heightM: number): void {
    this.controls.target.set(0, Math.max(8, heightM * 0.45), 0);
  }

  wideShot(): void {
    this.controls.target.set(0, 10, 0);
    this.camera.position.set(60, 26, 80);
  }

  fpsMeterTarget(): HTMLElement | null {
    return null;
  }

  private onResize = (): void => {
    const el = this.container;
    const w = Math.max(1, el.clientWidth);
    const h = Math.max(1, el.clientHeight);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.composer.setSize(w, h);
    this.bloomPass.resolution.set(w, h);
    this.particles.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };

  dispose(): void {
    this.stop();
    window.removeEventListener('resize', this.onResize);
    this.renderer.dispose();
    this.particles.dispose();
    this.cutaway.dispose();
  }
}
