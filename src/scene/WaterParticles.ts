/**
 * WaterParticles.ts — GPU-инстансированная система частиц выстрела (50 000+ капель).
 *
 * Архитектура: THREE.InstancedBufferGeometry + кастомный GLSL.
 * CPU не трогает позиции каждый кадр — вся баллистика (g, drag, распад фронта,
 * турбулентность) считается в вершинном шейдере от момента спавна t_spawn.
 * Эмиссия управляется uniform'ами burst'а; переиспользование буфера — кольцевой бюджет.
 */

import * as THREE from 'three';

export interface BurstParams {
  /** Скорость фронта на срезе, м/с (1 м = 1 юнит сцены) */
  velocity: number;
  /** Направление ствола (нормализовано, мировые координаты) */
  direction: THREE.Vector3;
  /** Позиция среза сопла в мировых координатах */
  origin: THREE.Vector3;
  /** Расход л/с → размер «ядра» струи и число капель */
  flowLps: number;
  /** Длительность активной эмиссии, сек */
  duration: number;
}

const MAX_PARTICLES = 60_000;

const VERT = /* glsl */ `
precision highp float;

attribute float aSpawn;   // время спавна порции (-1e3 = мёртвая)
attribute float aSeed;    // 0..1 случайное зерно
attribute vec3 aJitter;   // xy — конус разлёта, z — масштаб капли

uniform float uTime;
uniform float uGravity;
uniform float uPixelRatio;

uniform vec3 uOrigin;
uniform vec3 uDir;
uniform float uSpeed;     // м/с
uniform float uSpread;    // радиан конуса
uniform float uDuration;  // окно эмиссии внутри burst
uniform float uTurb;      // коэффициент распада струи

varying vec2 vUv;
varying float vAge;
varying float vLife;
varying float vSpeedT;
varying float vSeed;

float hash(float n) { return fract(sin(n) * 43758.5453123); }

void main() {
  vUv = uv;
  vSeed = aSeed;

  // Все случайные величины — из одного immutable-зерна aSeed (атрибут инстанса).
  // emitDelay больше не зависит от uDuration: изменение слайдера «импульс клапана»
  // в полёте burst не пережигало бы возраст капель и не вызывало визуальный скачок.
  float birthOff = hash(aSeed * 91.7 + 0.1234) * 0.9 + 0.05; // 0.05..0.95 стабильно
  float life = 2.2 + hash(aSeed * 5.3 + 0.7) * 3.4;          // жизнь капли, сек
  float birth = aSpawn + birthOff * max(uDuration, 0.001);
  float age = uTime - birth;

  vAge = age;
  vLife = life;

  if (age < 0.0 || age > life) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);              // за NDC — invisible
    return;
  }

  // Начальная скорость: ядро струи + экспоненциальный распад фронта
  float frontDecay = exp(-age * 0.55);
  float v0 = uSpeed * (0.55 + 0.45 * frontDecay) * (0.85 + 0.3 * hash(aSeed * 13.0));

  // Конус разлёта вокруг оси ствола (референтная ось без вырождения при uDir ∥ Y)
  vec2 rnd = vec2(hash(aSeed * 7.0), hash(aSeed * 17.0)) - 0.5;
  vec3 j = normalize(vec3(aJitter.xy + rnd, 1e-3));
  vec3 refAxis = abs(uDir.y) < 0.9 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
  vec3 tangent = normalize(cross(uDir, refAxis));
  vec3 bitangent = cross(uDir, tangent);
  float ang = uSpread * (0.35 + 0.65 * hash(aSeed * 31.0)) * sqrt(age * 0.8 + 0.15);
  vec3 dir = normalize(uDir + (tangent * j.x + bitangent * j.y) * ang);

  vec3 pos = uOrigin + dir * v0 * age;
  pos.y += 0.5 * uGravity * age * age;

  // Турбулентный распад на брызги
  float swirl = uTurb * age * age;
  pos += vec3(
    sin(age * 6.0 + aSeed * 40.0),
    cos(age * 5.0 + aSeed * 60.0) * 0.4,
    sin(age * 7.0 + aSeed * 80.0)
  ) * swirl * 0.35;

  // Поверхность озера y≈0 — гасим вертикальную составляющую (визуально: пена)
  float splashKill = step(pos.y, 0.02);
  pos.y = max(pos.y, 0.02);

  vSpeedT = clamp(v0 / 60.0, 0.0, 1.0);

  // Billboard в экранном пространстве: мировой размер капли проецируется
  // через view-матрицу (корректная перспектива, масштаб по devicePixelRatio)
  float sizeBase = mix(0.10, 0.34, aJitter.z);
  float grow = mix(1.0, 2.6, smoothstep(0.4, 1.0, age / life));
  float shrink = 1.0 - splashKill * 0.7;
  float size = sizeBase * grow * shrink * (1.0 + uTurb * 0.5) * uPixelRatio;

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  mv.xy += position.xy * size;
  gl_Position = projectionMatrix * mv;
}
`;

const FRAG = /* glsl */ `
precision highp float;

uniform vec3 uColorCore;
uniform vec3 uColorSpray;
uniform vec3 uColorFoam;
uniform float uFade;

varying vec2 vUv;
varying float vAge;
varying float vLife;
varying float vSpeedT;
varying float vSeed;

void main() {
  vec2 p = vUv - 0.5;
  float r = length(p) * 2.0;
  float disc = smoothstep(1.0, 0.35, r);
  if (disc <= 0.01) discard;

  float t = clamp(vAge / vLife, 0.0, 1.0);
  // Быстрая капля — белое ядро (bloom), медленная — синий спрей, в конце — пена
  vec3 col = mix(uColorCore, uColorSpray, smoothstep(0.15, 0.85, t));
  col = mix(col, uColorFoam, vSpeedT * 0.55 * (1.0 - t));

  float alpha = disc * (1.0 - t * t) * mix(0.35, 0.9, vSpeedT) * uFade;
  alpha *= 0.8 + 0.2 * sin(vSeed * 100.0 + vAge * 30.0);

  // Конвертация из линейного пространства в выходной color space и
  // тонмаппинг — иначе при renderer.outputColorSpace = SRGB / ACES цвета
  // шейдерных частиц выглядят «выжженными» и рассинхронизированы с PBR-сценой
  vec4 outColor = vec4(col * (0.7 + vSpeedT), alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  gl_FragColor = outColor;
}
`;

export class WaterParticles {
  readonly mesh: THREE.Mesh;
  private geometry: THREE.InstancedBufferGeometry;
  private material: THREE.ShaderMaterial;
  private aSpawn: THREE.InstancedBufferAttribute;
  private cursor = 0;


  constructor(private scene: THREE.Scene) {
    const base = new THREE.PlaneGeometry(1, 1);
    this.geometry = new THREE.InstancedBufferGeometry();
    this.geometry.index = base.index;
    this.geometry.attributes.position = base.attributes.position;
    this.geometry.attributes.uv = base.attributes.uv;
    this.geometry.instanceCount = MAX_PARTICLES;

    const spawn = new Float32Array(MAX_PARTICLES).fill(-1e3);
    const seed = new Float32Array(MAX_PARTICLES);
    const jitter = new Float32Array(MAX_PARTICLES * 3);
    for (let i = 0; i < MAX_PARTICLES; i++) {
      seed[i] = Math.random();
      jitter[i * 3 + 0] = (Math.random() * 2 - 1) * 0.5;
      jitter[i * 3 + 1] = (Math.random() * 2 - 1) * 0.5;
      jitter[i * 3 + 2] = Math.random();
    }
    this.aSpawn = new THREE.InstancedBufferAttribute(spawn, 1).setUsage(THREE.DynamicDrawUsage);
    this.geometry.setAttribute('aSpawn', this.aSpawn);
    this.geometry.setAttribute('aSeed', new THREE.InstancedBufferAttribute(seed, 1));
    this.geometry.setAttribute('aJitter', new THREE.InstancedBufferAttribute(jitter, 3));

    this.material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uGravity: { value: -9.81 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        uOrigin: { value: new THREE.Vector3(0, 2, 0) },
        uDir: { value: new THREE.Vector3(0, 1, 0) },
        uSpeed: { value: 0 },
        uSpread: { value: 0.08 },
        uDuration: { value: 0.3 },
        uTurb: { value: 0.05 },
        uColorCore: { value: new THREE.Color('#bfeaff') },
        uColorSpray: { value: new THREE.Color('#4aa8d8') },
        uColorFoam: { value: new THREE.Color('#ffffff') },
        uFade: { value: 1 },
      },
      vertexShader: VERT,
      fragmentShader: FRAG,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 30;
    scene.add(this.mesh);
  }

  /** Активировать burst: спавн порции инстансов + параметры баллистики */
  burst(p: BurstParams, density = 1): void {
    const count = Math.floor(clampNum(20_000 * density * (p.flowLps / 900 + 0.35), 4_000, MAX_PARTICLES));
    const arr = this.aSpawn.array as Float32Array;
    // Спавним от текущего uTime (визуальные часы), а не от simTime физики:
    // при timeScale ≠ 1 они расходятся и капли «замирают»/стартуют с отрицательным возрастом
    const now = this.material.uniforms.uTime.value as number;

    // Если предыдущий burst ещё активен — гасим его старые капли (ставим им
    // «мгновенную смерть»), иначе uniform'ы улетевших частиц переписываются
    // и оставшиеся живые капли телепортируются на новую позицию дула.
    const prevDur = this.material.uniforms.uDuration.value as number;
    const prevLifeMax = 5.6; // максимальная жизнь капли в шейдере: 2.2 + 3.4
    if ((this.material.uniforms.uSpeed.value as number) > 0) {
      for (let i = 0; i < MAX_PARTICLES; i++) {
        const sp = arr[i];
        if (sp > -1e2 && now - sp < prevDur + prevLifeMax) arr[i] = -1e3;
      }
    }

    for (let i = 0; i < count; i++) {
      arr[this.cursor] = now;
      this.cursor = (this.cursor + 1) % MAX_PARTICLES;
    }
    this.aSpawn.needsUpdate = true;

    const u = this.material.uniforms;
    (u.uOrigin.value as THREE.Vector3).copy(p.origin);
    (u.uDir.value as THREE.Vector3).copy(p.direction).normalize();
    u.uSpeed.value = p.velocity;
    u.uDuration.value = Math.max(0.02, p.duration);
    u.uSpread.value = 0.055 + 0.05 / (1 + p.velocity * 0.02);
    u.uTurb.value = 0.02 + p.velocity * 0.0016;
  }

  /** Фоновая слабая эмиссия оседания (для «живости» после выстрела) */
  ambientDrip(): void {
    const arr = this.aSpawn.array as Float32Array;
    const now = this.material.uniforms.uTime.value as number;
    for (let k = 0; k < 80; k++) {
      arr[this.cursor] = now;
      this.cursor = (this.cursor + 1) % MAX_PARTICLES;
    }
    this.aSpawn.needsUpdate = true;
  }

  update(simTime: number, _dt: number): void {
    // uTime — визуальные часы сцены (realDt), синхронно со спавном в burst();
    // физический simTime здесь не используется напрямую (timeScale ≠ 1 рассинхронил бы капли)
    void simTime;
    this.material.uniforms.uTime.value += _dt;
  }

  setPixelRatio(pr: number): void {
    this.material.uniforms.uPixelRatio.value = Math.min(pr, 2);
  }

  get particleBudget(): number {
    return MAX_PARTICLES;
  }

  dispose(): void {
    this.scene.remove(this.mesh);
    this.geometry.dispose();
    this.material.dispose();
  }
}

function clampNum(v: number, lo: number, hi: number): number {
  return v < lo ? lo : v > hi ? hi : v;
}
