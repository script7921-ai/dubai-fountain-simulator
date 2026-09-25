/**
 * CutawayPlane.ts — CAD-разрез в реальном времени.
 *
 * Реализовано через глобальные clipping planes Three.js (renderer.clippingPlanes).
 * Дополнительно рисуется «свечение» по кромке реза: тонкая светящаяся рамка-щит,
 * совмещённая с плоскостью, и сетка сечения (имитация hatching CAD).
 */

import * as THREE from 'three';

export class CutawayPlane {
  readonly plane: THREE.Plane;
  private helper: THREE.Group;
  private glowMat: THREE.ShaderMaterial;
  private enabled = false;

  /** Нормаль реза — вдоль оси X (рассекает пушку пополам) */
  constructor() {
    this.plane = new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0);

    this.glowMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('#38bdf8') },
        uOpacity: { value: 0 },
      },
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uTime;
        uniform vec3 uColor;
        uniform float uOpacity;
        varying vec2 vUv;
        // Хатчинг CAD-сечения
        float hatch(vec2 uv, float scale) {
          vec2 g = fract(uv * scale);
          float d = abs(g.x - g.y);
          return smoothstep(0.06, 0.12, d);
        }
        void main() {
          vec2 uv = vUv;
          float border = min(min(uv.x, 1.0-uv.x), min(uv.y, 1.0-uv.y));
          float edge = 1.0 - smoothstep(0.0, 0.015, border);
          float scan = 0.5 + 0.5 * sin((uv.y + uTime * 0.15) * 140.0);
          float h = 1.0 - hatch(uv, 42.0);
          float a = uOpacity * (edge * 0.9 + h * 0.16 * scan);
          gl_FragColor = vec4(uColor, a);
        }
      `,
    });

    const quadGeo = new THREE.PlaneGeometry(11, 6.4);
    const quad = new THREE.Mesh(quadGeo, this.glowMat);
    // Плоскость реза с нормалью -X → quad смотрит вдоль X
    quad.rotation.y = Math.PI / 2;
    this.helper = new THREE.Group();
    this.helper.add(quad);
    this.helper.visible = false;
    this.helper.renderOrder = 50;
  }

  get object(): THREE.Object3D {
    return this.helper;
  }

  setEnabled(on: boolean): void {
    this.enabled = on;
    this.helper.visible = on;
    this.glowMat.uniforms.uOpacity.value = on ? 1 : 0;
  }

  /** @param offset нормализованный -1..1 смещение плоскости по X относительно центра узла */
  update(time: number, offsetNorm: number, center: THREE.Vector3): void {
    this.glowMat.uniforms.uTime.value = time;
    if (!this.enabled) return;
    const halfSpan = 5.5;
    const x = center.x + offsetNorm * halfSpan;
    this.plane.constant = x; // plane: -x + c = 0 → keeps points with coord < x? (normal (-1,0,0): keep where dot(n,p)+c>=0 → -px + x >= 0 → px <= x)
    this.helper.position.set(x, center.y, center.z);
  }

  dispose(): void {
    this.glowMat.dispose();
  }
}
