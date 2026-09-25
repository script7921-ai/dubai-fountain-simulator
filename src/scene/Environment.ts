/**
 * Environment.ts — озеро, небо, дно и силуэт Burj Khalifa.
 *
 * Вода озера — кастомный GLSL-шейдер: Френель + фоллинг-волны (gerstner-lite),
 * «рассеивание» вспышки выстрела радиальной волной от точки входа струи.
 */

import * as THREE from 'three';

export class Environment {
  readonly group = new THREE.Group();
  readonly lakeMaterial: THREE.ShaderMaterial;
  private uTime = { value: 0 };
  private uRipple = { value: new THREE.Vector4(0, 0, 0, 0) }; // x,z, birth, strength

  constructor() {
    this.buildSkyDome();
    this.buildLakeBed();
    this.buildWater();
    this.buildBurjKhalifa();
    this.buildPromenade();
  }

  // ---------------- Небо ----------------
  private buildSkyDome(): void {
    const geo = new THREE.SphereGeometry(900, 32, 16);
    const mat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: { uTop: { value: new THREE.Color('#050b18') }, uBot: { value: new THREE.Color('#123a5c') } },
      vertexShader: /* glsl */ `
        varying vec3 vPos;
        void main(){ vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uTop; uniform vec3 uBot;
        varying vec3 vPos;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
        void main(){
          float h = clamp(vPos.y / 900.0, 0.0, 1.0);
          vec3 col = mix(uBot, uTop, pow(h, 0.7));
          // лёгкое городское свечение у горизонта
          col += vec3(0.25,0.16,0.06) * pow(1.0 - abs(vPos.y)/900.0, 8.0);
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
    const dome = new THREE.Mesh(geo, mat);
    dome.name = 'skydome';
    this.group.add(dome);

    // Звёзды
    const starGeo = new THREE.BufferGeometry();
    const N = 1200;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(Math.random() * 0.85 + 0.15);
      const r = 880;
      pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
      pos[i * 3 + 1] = r * Math.cos(ph);
      pos[i * 3 + 2] = r * Math.sin(ph) * Math.sin(th);
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({
      color: 0xcfe8ff, size: 1.4, sizeAttenuation: false, transparent: true, opacity: 0.8,
    }));
    this.group.add(stars);
  }

  // ---------------- Дно озера ----------------
  private buildLakeBed(): void {
    const geo = new THREE.PlaneGeometry(600, 600, 64, 64);
    // Рельеф дна: мелководье к центру
    const p = geo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i);
      const d = Math.sqrt(x * x + y * y);
      const z = -6.2 - 0.9 * Math.sin(d * 0.05) - 0.35 * Math.sin(x * 0.13 + y * 0.11);
      p.setZ(i, z);
    }
    geo.computeVertexNormals();
    const mat = new THREE.MeshStandardMaterial({
      color: 0x1b2a38, roughness: 0.95, metalness: 0.02,
    });
    const bed = new THREE.Mesh(geo, mat);
    bed.rotation.x = -Math.PI / 2;
    bed.position.y = -6.5;
    bed.receiveShadow = true;
    bed.name = 'lakebed';
    this.group.add(bed);
  }

  // ---------------- Вода с шейдером рассеивания ----------------
  private buildWater(): void {
    const geo = new THREE.PlaneGeometry(600, 600, 180, 180);
    this.lakeMaterial = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uTime: this.uTime,
        uRipple: this.uRipple,
        uDeep: { value: new THREE.Color('#03121f') },
        uShallow: { value: new THREE.Color('#0b3d5e') },
        uSky: { value: new THREE.Color('#1d4e73') },
        uLightDir: { value: new THREE.Vector3(0.4, 0.8, 0.3).normalize() },
        uMoonColor: { value: new THREE.Color('#cfe3ff') },
      },
      vertexShader: /* glsl */ `
        uniform float uTime;
        uniform vec4 uRipple; // xz центр, z birth, w strength
        varying vec3 vWorld;
        varying vec3 vNormalW;
        varying float vRippleH;

        // Gerstner-lite сумма волн
        float wave(vec2 p, vec2 dir, float freq, float speed, float t){
          return sin(dot(p, dir) * freq + t * speed);
        }

        void main(){
          vec3 pos = position;
          vec2 p = pos.xy; // плоскость до поворота: xy → world xz
          float t = uTime;

          float h =
              0.055 * wave(p, vec2(1.0, 0.35), 0.55, 1.1, t)
            + 0.040 * wave(p, vec2(-0.4, 1.0), 0.9, 1.7, t)
            + 0.022 * wave(p, vec2(0.7, -0.7), 2.1, 2.6, t)
            + 0.012 * wave(p, vec2(-1.0, 0.2), 3.7, 3.4, t);

          // Радиальная волна рассеивания после падения струи
          float age = t - uRipple.z;
          float rr = length(p - uRipple.xy);
          float ring = 0.0;
          if (age > 0.0 && age < 6.0) {
            float front = age * 14.0;             // скорость расхождения ~14 м/с
            float w = exp(-pow(rr - front, 2.0) / (6.0 + age * 10.0));
            ring = w * uRipple.w * exp(-age * 0.7) * sin(rr * 1.6 - age * 20.0) * 0.5;
            ring += exp(-rr * 0.06) * uRipple.w * 0.18 * sin(rr * 3.0 - age * 9.0) * exp(-age * 1.2);
          }
          h += ring;
          vRippleH = abs(ring);

          pos.z += h; // локальный z → мировой Y после rotation.x=-PI/2

          // Нормаль через конечные разности (аппроксимация)
          float e = 0.75;
          float hx =
              0.055 * wave(p + vec2(e,0), vec2(1.0,0.35), 0.55, 1.1, t)
            + 0.040 * wave(p + vec2(e,0), vec2(-0.4,1.0), 0.9, 1.7, t)
            + 0.022 * wave(p + vec2(e,0), vec2(0.7,-0.7), 2.1, 2.6, t);
          float hy =
              0.055 * wave(p + vec2(0,e), vec2(1.0,0.35), 0.55, 1.1, t)
            + 0.040 * wave(p + vec2(0,e), vec2(-0.4,1.0), 0.9, 1.7, t)
            + 0.022 * wave(p + vec2(0,e), vec2(0.7,-0.7), 2.1, 2.6, t);
          vec3 n = normalize(vec3((h - hx) / e, 1.0, (h - hy) / e));
          vNormalW = n;

          vec4 world = modelMatrix * vec4(pos, 1.0);
          vWorld = world.xyz;
          gl_Position = projectionMatrix * viewMatrix * world;
        }
      `,
      fragmentShader: /* glsl */ `
        precision highp float;
        uniform vec3 uDeep; uniform vec3 uShallow; uniform vec3 uSky;
        uniform vec3 uLightDir; uniform vec3 uMoonColor;
        uniform float uTime;
        varying vec3 vWorld;
        varying vec3 vNormalW;
        varying float vRippleH;

        void main(){
          vec3 V = normalize(cameraPosition - vWorld);
          vec3 N = normalize(vNormalW);

          // Френель (Schlick F0=0.02 для воды)
          float F = 0.02 + 0.98 * pow(1.0 - max(dot(N, V), 0.0), 5.0);

          // Глубина по расстоянию от центра озера — имитация бирюсы Дубая
          float d = length(vWorld.xz);
          vec3 base = mix(uShallow, uDeep, smoothstep(30.0, 260.0, d));

          // Отражение «неба» + блик луны
          vec3 R = reflect(-V, N);
          vec3 sky = mix(uSky * 0.6, uSky, clamp(R.y, 0.0, 1.0));
          float moonSpec = pow(max(dot(R, normalize(uLightDir)), 0.0), 220.0) * 2.4;

          // Подповерхностное светорассеяние в зоне удара струи
          vec3 sss = vec3(0.15, 0.55, 0.75) * vRippleH * 3.0;

          vec3 col = mix(base, sky, F) + uMoonColor * moonSpec + sss;

          // Тени понтонов — мягкий градиент яркости не нужен: добавим лёгкий fog
          float fog = 1.0 - exp(-d * 0.0035);
          col = mix(col, uSky * 0.5, fog * 0.6);

          gl_FragColor = vec4(col, 0.94);
        }
      `,
    });

    const water = new THREE.Mesh(geo, this.lakeMaterial);
    water.rotation.x = -Math.PI / 2;
    water.position.y = 0;
    water.name = 'lake-water';
    this.group.add(water);
  }

  /** Запустить волну рассеивания в точке (x,z) с энергией 0..1 */
  spawnRipple(x: number, z: number, strength: number): void {
    this.uRipple.value.set(x, z, this.uTime.value, strength);
  }

  // ---------------- Силуэт Burj Khalifa ----------------
  private buildBurjKhalifa(): void {
    const grp = new THREE.Group();
    grp.name = 'burj-khalifa';
    const dark = new THREE.MeshStandardMaterial({
      color: 0x0a1420, roughness: 0.6, metalness: 0.4,
      emissive: new THREE.Color('#0a2038'), emissiveIntensity: 0.35,
    });

    // Ступенчатый профиль (Y-образный план башни упрощён конусными сегментами)
    const tiers = [
      { r: 14, h: 60 }, { r: 11.5, h: 55 }, { r: 9.2, h: 48 }, { r: 7.2, h: 42 },
      { r: 5.4, h: 36 }, { r: 3.9, h: 30 }, { r: 2.7, h: 26 }, { r: 1.8, h: 22 },
    ];
    let y = 0;
    for (const t of tiers) {
      const g = new THREE.CylinderGeometry(t.r * 0.82, t.r, t.h, 6);
      const m = new THREE.Mesh(g, dark);
      m.position.y = y + t.h / 2;
      grp.add(m);
      y += t.h;
    }
    // Шпиль
    const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.9, 60, 6), dark);
    spire.position.y = y + 30;
    grp.add(spire);

    // Окна-эмиссия (инстансы светящихся полос)
    const winGeo = new THREE.BoxGeometry(0.35, 1.6, 0.06);
    const winMat = new THREE.MeshBasicMaterial({ color: 0xffd88a });
    const count = 700;
    const inst = new THREE.InstancedMesh(winGeo, winMat, count);
    const dummy = new THREE.Object3D();
    let yy = 4;
    for (let i = 0; i < count; i++) {
      const tierIdx = Math.min(tiers.length - 1, Math.floor((yy / y) * tiers.length));
      const rBase = tiers[tierIdx].r * (1 - 0.18 * (yy / y));
      const ang = Math.random() * Math.PI * 2;
      const rr = rBase + 0.05;
      dummy.position.set(Math.cos(ang) * rr, yy, Math.sin(ang) * rr);
      dummy.lookAt(0, yy, 0);
      dummy.rotateY(Math.PI);
      dummy.updateMatrix();
      inst.setMatrixAt(i, dummy.matrix);
      yy += 1.9 + Math.random() * 1.4;
      if (yy > y - 6) yy = 4 + Math.random() * 10;
    }
    grp.add(inst);

    // Красный маяк на шпиле
    const beacon = new THREE.Mesh(
      new THREE.SphereGeometry(0.6, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0xff3b3b })
    );
    beacon.position.y = y + 60;
    beacon.name = 'beacon';
    grp.add(beacon);

    grp.position.set(-190, -6.5, -320);
    grp.scale.setScalar(1.35);
    this.group.add(grp);
  }

  // ---------------- Понтонная дорожка фонтана (аркада) ----------------
  private buildPromenade(): void {
    const mat = new THREE.MeshStandardMaterial({ color: 0x2b3946, roughness: 0.8, metalness: 0.2 });
    const arc = new THREE.TorusGeometry(92, 1.6, 8, 96, Math.PI * 0.9);
    const walk = new THREE.Mesh(arc, mat);
    walk.rotation.x = -Math.PI / 2;
    walk.rotation.z = Math.PI * 0.05;
    walk.position.y = 0.9;
    this.group.add(walk);

    // Стойки прожекторов вдоль арки
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x11181f, roughness: 0.5, metalness: 0.7 });
    const glowMat = new THREE.MeshBasicMaterial({ color: 0x66ccff });
    for (let i = 0; i < 28; i++) {
      const a = Math.PI * 0.05 + (i / 27) * Math.PI * 0.9;
      const x = Math.cos(a) * 92;
      const z = -Math.sin(a) * 92;
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 1.4, 6), poleMat);
      pole.position.set(x, 1.6, z);
      this.group.add(pole);
      const lens = new THREE.Mesh(new THREE.SphereGeometry(0.16, 6, 6), glowMat);
      lens.position.set(x, 2.35, z);
      this.group.add(lens);
    }
  }

  update(t: number): void {
    this.uTime.value = t;
  }
}
