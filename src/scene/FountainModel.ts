/**
 * FountainModel.ts — 3D-геометрия узла ExtremeShooter и серво-модуля Oarsmen.
 *
 * Иерархия:
 *   group (баржа-игольник на рейке)
 *    └ yawGroup (серво Oarsmen — азимут, червячный редуктор)
 *        └ pitchGroup (гидроцилиндры возвышения)
 *            └ barrelAssembly (ствол, сопло, ресивер, камера, поршень, клапан)
 *
 * Все внутренние детали имеют .name для CAD-подписей; материалы участвуют в
 * глобальном clipping (renderer.localClippingEnabled + material.clippingPlanes).
 */

import * as THREE from 'three';
import { SHOOTER_GEOMETRY } from '../core/types';

const GEO = SHOOTER_GEOMETRY;

export interface GunAnimState {
  pistonTravel: number; // 0..1
  valveOpening: number; // 0..1
  jetVelocity: number; // м/с
  chargeFrac: number; // 0..1
  azimuthDeg: number;
  elevationDeg: number;
  firing: boolean;
}

interface InternalRefs {
  yawGroup: THREE.Group;
  pitchGroup: THREE.Group;
  nozzleTip: THREE.Object3D;
  pistonHead: THREE.Mesh;
  pistonSeal: THREE.Mesh;
  pistonRod: THREE.Mesh;
  valveDisc: THREE.Mesh;
  waterSlug: THREE.Mesh;
  receiverGlow: THREE.Mesh;
  pilotLamp: THREE.Mesh;
}

export class FountainModel {
  readonly group = new THREE.Group();
  private refs!: InternalRefs;

  /** Материалы, которые клиппуются CAD-разрезом */
  readonly clipMaterials: THREE.Material[] = [];

  private steelMat: THREE.MeshStandardMaterial;
  private darkSteel: THREE.MeshStandardMaterial;
  private brassMat: THREE.MeshStandardMaterial;
  private rubberMat: THREE.MeshStandardMaterial;
  private glassMat: THREE.MeshPhysicalMaterial;
  private waterMat: THREE.MeshStandardMaterial;

  constructor() {
    this.steelMat = new THREE.MeshStandardMaterial({ color: 0x8d99a6, metalness: 0.92, roughness: 0.34 });
    this.darkSteel = new THREE.MeshStandardMaterial({ color: 0x39434e, metalness: 0.85, roughness: 0.5 });
    this.brassMat = new THREE.MeshStandardMaterial({ color: 0xb08d3f, metalness: 0.95, roughness: 0.28 });
    this.rubberMat = new THREE.MeshStandardMaterial({ color: 0x14171c, metalness: 0.05, roughness: 0.9 });
    this.glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xaad4ff, metalness: 0, roughness: 0.08, transmission: 0.9, transparent: true,
      opacity: 0.32, thickness: 0.4, side: THREE.DoubleSide,
    });
    this.waterMat = new THREE.MeshStandardMaterial({
      color: 0x2f7fb8, transparent: true, opacity: 0.55, roughness: 0.15, metalness: 0.1,
      emissive: new THREE.Color('#0a2c44'), emissiveIntensity: 0.6,
    });
    this.clipMaterials.push(this.steelMat, this.darkSteel, this.brassMat, this.rubberMat, this.glassMat, this.waterMat);

    this.buildGun();
    this.buildBarge();
    this.buildServiceRig();
  }

  // ==================== ПУШКА + OARSMEN ====================
  private buildGun(): void {
    const deckY = -0.95; // палуба понтона

    const yawGroup = new THREE.Group();
    yawGroup.name = 'oarsman-yaw';
    yawGroup.position.set(0, deckY + 0.75, 0);
    this.group.add(yawGroup);

    const pitchGroup = new THREE.Group();
    pitchGroup.name = 'oarsman-pitch';
    yawGroup.add(pitchGroup);

    const assembly = new THREE.Group();
    assembly.name = 'gun-assembly';
    pitchGroup.add(assembly);

    const r = GEO.barrelDiameter / 2;
    const L = GEO.barrelLength;

    // Ствол — полупрозрачная «рентген»-обечайка
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(r, r, L, 40, 1, true), this.glassMat);
    barrel.name = 'barrel-glass';
    barrel.rotation.x = Math.PI / 2;
    barrel.position.z = L / 2;
    assembly.add(barrel);

    // Кольца усиления
    for (let i = 0; i < 6; i++) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(r + 0.03, 0.035, 8, 40), this.darkSteel);
      ring.name = `barrel-ring-${i}`;
      ring.position.z = 0.7 + i * (L / 6.4);
      assembly.add(ring);
    }

    // Конвергентное сопло (Lathe)
    const profile: THREE.Vector2[] = [];
    for (let i = 0; i <= 12; i++) {
      const t = i / 12;
      profile.push(new THREE.Vector2(THREE.MathUtils.lerp(r, r * 0.78, Math.pow(t, 1.6)), t * 0.9));
    }
    const nozzle = new THREE.Mesh(new THREE.LatheGeometry(profile, 40), this.brassMat);
    nozzle.name = 'nozzle';
    nozzle.rotation.x = -Math.PI / 2;
    nozzle.position.z = L;
    assembly.add(nozzle);

    const nozzleTip = new THREE.Object3D();
    nozzleTip.name = 'nozzle-tip';
    nozzleTip.position.set(0, 0, L + 0.95);
    assembly.add(nozzleTip);

    // Водяной slug (движимая масса воды в стволе)
    const waterSlug = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.96, r * 0.96, 1, 32), this.waterMat);
    waterSlug.name = 'water-slug';
    waterSlug.rotation.x = Math.PI / 2;
    assembly.add(waterSlug);

    // Газовый поршень: голова + манжета + шток
    const pistonHead = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.98, r * 0.98, 0.22, 32), this.steelMat);
    pistonHead.name = 'piston-head';
    pistonHead.rotation.x = Math.PI / 2;
    assembly.add(pistonHead);

    const pistonSeal = new THREE.Mesh(new THREE.TorusGeometry(r * 0.95, 0.06, 10, 32), this.rubberMat);
    pistonSeal.name = 'piston-seal';
    assembly.add(pistonSeal);

    const pistonRod = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 2.4, 12), this.steelMat);
    pistonRod.name = 'piston-rod';
    pistonRod.rotation.x = Math.PI / 2;
    assembly.add(pistonRod);

    // Рабочая камера + седло ударного клапана
    const chamber = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.25, r * 1.25, 1.1, 32, 1, true), this.steelMat);
    chamber.name = 'chamber';
    chamber.rotation.x = Math.PI / 2;
    chamber.position.z = -0.7;
    assembly.add(chamber);

    const valveSeat = new THREE.Mesh(new THREE.TorusGeometry(r * 1.26, 0.07, 10, 40), this.brassMat);
    valveSeat.name = 'valve-seat';
    valveSeat.rotation.x = Math.PI / 2;
    valveSeat.position.z = -1.25;
    assembly.add(valveSeat);

    const valveDisc = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.2, r * 1.2, 0.07, 32), this.steelMat);
    valveDisc.name = 'impact-valve';
    valveDisc.rotation.x = Math.PI / 2;
    valveDisc.position.z = -1.25;
    assembly.add(valveDisc);

    // Соленоид-пилот с ламкой готовности
    const solenoid = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.34, 0.5), this.darkSteel);
    solenoid.name = 'solenoid-pilot';
    solenoid.position.set(r + 0.35, 0, -1.25);
    assembly.add(solenoid);

    const pilotLamp = new THREE.Mesh(
      new THREE.SphereGeometry(0.06, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0xff4444 })
    );
    pilotLamp.name = 'pilot-lamp';
    pilotLamp.position.set(r + 0.35, 0.22, -1.25);
    assembly.add(pilotLamp);

    // Воздушный ресивер (PneumaticAccumulator)
    const recLen = 3.1;
    const recR = 0.95;
    const recY = -(r + recR + 0.55);
    const receiver = new THREE.Mesh(new THREE.CapsuleGeometry(recR, recLen, 8, 28), this.steelMat);
    receiver.name = 'air-receiver';
    receiver.rotation.x = Math.PI / 2;
    receiver.position.set(0, recY, -1.4);
    assembly.add(receiver);

    const receiverGlow = new THREE.Mesh(
      new THREE.CylinderGeometry(recR + 0.02, recR + 0.02, 0.16, 28),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.95 })
    );
    receiverGlow.name = 'receiver-gauge';
    receiverGlow.rotation.x = Math.PI / 2;
    receiverGlow.position.set(0, recY, -1.4 - recLen / 2);
    assembly.add(receiverGlow);

    // Питлайн ресивер → камера
    const feedPipe = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 2.0, 12), this.brassMat);
    feedPipe.name = 'feed-pipe';
    feedPipe.position.set(0, recY / 2, -1.6);
    feedPipe.rotation.x = 0.5;
    assembly.add(feedPipe);

    // Тумба серво Oarsmen
    const turntable = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.35, 0.7, 28), this.darkSteel);
    turntable.name = 'oarsman-turntable';
    turntable.position.y = -0.35;
    yawGroup.add(turntable);

    const gearRing = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.09, 8, 48), this.brassMat);
    gearRing.name = 'oarsman-gear';
    gearRing.rotation.x = Math.PI / 2;
    gearRing.position.y = -0.05;
    yawGroup.add(gearRing);

    // Гидроцилиндры возвышения
    for (const sx of [-1, 1]) {
      const cyl = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 2.6, 10), this.steelMat);
      cyl.name = `elevation-cyl-${sx}`;
      cyl.position.set(sx * 0.8, -0.4, 1.2);
      cyl.rotation.x = -0.9;
      assembly.add(cyl);
    }

    pitchGroup.rotation.x = -THREE.MathUtils.degToRad(90 - 78);

    this.refs = { yawGroup, pitchGroup, nozzleTip, pistonHead, pistonSeal, pistonRod, valveDisc, waterSlug, receiverGlow, pilotLamp };
  }

  // ==================== БАРЖА ====================
  private buildBarge(): void {
    const deckMat = new THREE.MeshStandardMaterial({ color: 0x24303c, roughness: 0.85, metalness: 0.25 });
    const hullMat = new THREE.MeshStandardMaterial({ color: 0x141c24, roughness: 0.9, metalness: 0.15 });
    this.clipMaterials.push(deckMat, hullMat);

    const deck = new THREE.Mesh(new THREE.BoxGeometry(6.5, 0.5, 12), deckMat);
    deck.name = 'barge-deck';
    deck.position.y = -1.2;
    this.group.add(deck);

    const hull = new THREE.Mesh(new THREE.BoxGeometry(5.6, 1.6, 11), hullMat);
    hull.name = 'barge-hull';
    hull.position.y = -2.1;
    this.group.add(hull);

    for (const sx of [-1, 1]) {
      const pontoon = new THREE.Mesh(new THREE.CapsuleGeometry(0.7, 9, 6, 16), hullMat);
      pontoon.name = `pontoon-${sx > 0 ? 'R' : 'L'}`;
      pontoon.rotation.x = Math.PI / 2;
      pontoon.position.set(sx * 3.1, -1.9, 0);
      this.group.add(pontoon);
    }

    const railMat = new THREE.MeshStandardMaterial({ color: 0x9fb2c2, metalness: 0.9, roughness: 0.35 });
    this.clipMaterials.push(railMat);
    for (let i = -5; i <= 5; i++) {
      for (const sx of [-1, 1]) {
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.9, 6), railMat);
        post.position.set(sx * 3.0, -0.5, i * 1.1);
        this.group.add(post);
      }
    }
    for (const sx of [-1, 1]) {
      const topRail = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 11.6, 6), railMat);
      topRail.rotation.x = Math.PI / 2;
      topRail.position.set(sx * 3.0, -0.05, 0);
      this.group.add(topRail);
    }
  }

  // ==================== КОМПРЕССОРНАЯ СТАНЦИЯ ====================
  private buildServiceRig(): void {
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.6, metalness: 0.3 });
    const motorMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.8, roughness: 0.4 });
    this.clipMaterials.push(bodyMat, motorMat);

    const comp = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.1, 2.4), bodyMat);
    comp.name = 'compressor';
    comp.position.set(-1.9, -0.4, -4.2);
    this.group.add(comp);

    const motor = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 1.2, 20), motorMat);
    motor.name = 'compressor-motor';
    motor.rotation.z = Math.PI / 2;
    motor.position.set(-1.9, 0.25, -4.2);
    this.group.add(motor);

    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.2, 0.0, -4.0),
      new THREE.Vector3(-0.5, -1.2, -3.0),
      new THREE.Vector3(0.0, -1.9, -2.0),
    ]);
    const hose = new THREE.Mesh(new THREE.TubeGeometry(curve, 24, 0.075, 8), this.rubberMat);
    hose.name = 'hp-hose';
    this.group.add(hose);
  }

  /** Анимиация внутренних органов по данным физики */
  update(s: GunAnimState): void {
    const p = this.refs;
    const L = GEO.barrelLength;

    p.yawGroup.rotation.y = THREE.MathUtils.degToRad(s.azimuthDeg);
    p.pitchGroup.rotation.x = -THREE.MathUtils.degToRad(90 - s.elevationDeg);

    // Поршень от казённика к дульному срезу
    const zPos = 0.4 + s.pistonTravel * (L - 1.2);
    p.pistonHead.position.z = zPos;
    p.pistonSeal.position.z = zPos - 0.14;
    p.pistonRod.position.z = zPos - 1.3;

    // Water slug перед поршнем; длина уменьшается по мере выстрела
    const slugLen = Math.max(0.25, L - 0.9 - zPos);
    p.waterSlug.scale.y = slugLen; // цилиндр повёрнут: локальная высота вдоль мировой Z
    p.waterSlug.position.z = zPos + 0.15 + slugLen / 2;

    // Ударный клапан
    p.valveDisc.position.z = -1.25 - s.valveOpening * 0.5;
    p.valveDisc.rotation.y = s.valveOpening * 1.25;

    // Шкала заряда ресивера
    const frac = THREE.MathUtils.clamp(s.chargeFrac, 0, 1);
    (p.receiverGlow.material as THREE.MeshBasicMaterial).color.setHSL(
      THREE.MathUtils.lerp(0.02, 0.54, frac), 0.95, 0.55
    );
    p.receiverGlow.scale.y = 0.4 + frac * 2.2;

    // Лампа пилота
    const lampMat = p.pilotLamp.material as THREE.MeshBasicMaterial;
    if (s.firing) lampMat.color.setHex(0x33ff66);
    else lampMat.color.setHex(Date.now() % 500 < 250 ? 0xff4444 : 0x451111);
  }

  /** Мировые позиция и направление дульного среза */
  getMuzzleWorld(outPos: THREE.Vector3, outDir: THREE.Vector3): void {
    const tip = this.refs.nozzleTip;
    tip.getWorldPosition(outPos);
    tip.getWorldQuaternion(new THREE.Quaternion());
    outDir.set(0, 0, 1).applyQuaternion(tip.getWorldQuaternion(new THREE.Quaternion())).normalize();
  }
}
