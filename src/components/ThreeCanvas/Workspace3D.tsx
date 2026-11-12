import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { Box, Layers, Eye, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';

interface Workspace3DProps {
  onSelectNode?: (nodeId: string) => void;
}

// Pre-allocate module-scope math helpers for Zero-GC in render loop
const _vec3 = new THREE.Vector3();
const _targetPos = new THREE.Vector3();

export const Workspace3D: React.FC<Workspace3DProps> = ({ onSelectNode }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activePreset, setActivePreset] = useState<'all' | 'ops' | 'inbox' | 'creative'>('all');
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [hoveredNodeName, setHoveredNodeName] = useState<string | null>(null);
  const [isDockCollapsed, setIsDockCollapsed] = useState<boolean>(false);

  // References to keep mutable state out of closures
  const stateRef = useRef({
    activePreset: 'all' as 'all' | 'ops' | 'inbox' | 'creative',
    autoRotate: true,
    hoveredNode: null as THREE.Object3D | null,
    mouse: new THREE.Vector2(0, 0),
    targetCameraPos: new THREE.Vector3(0, 4.5, 9),
    targetLookAt: new THREE.Vector3(0, 0.8, 0),
    currentLookAt: new THREE.Vector3(0, 0.8, 0)
  });

  useEffect(() => {
    stateRef.current.activePreset = activePreset;
    stateRef.current.autoRotate = autoRotate;
  }, [activePreset, autoRotate]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect Software WebGL
    const isSoftwareGl = (() => {
      try {
        const testCanvas = document.createElement('canvas');
        const gl = testCanvas.getContext('webgl2') || testCanvas.getContext('webgl');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : (gl as any).RENDERER;
        const gpu = String((gl as any).getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return true;
      }
    })();

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 500;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#060a17');
    scene.fog = new THREE.FogExp2(0x060a17, 0.045);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 4.5, 9);
    camera.lookAt(0, 0.8, 0);

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // Studio Environment map via RoomEnvironment
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // 4. Studio Lighting Rig
    const ambientLight = new THREE.AmbientLight(0x0b1a30, 1.2);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0x38bdf8, 0x060a17, 1.0);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    // Key directional light with warm-cool contrast
    const keyLight = new THREE.DirectionalLight(0xe0f2fe, 2.2);
    keyLight.position.set(5, 10, 6);
    if (!isSoftwareGl) {
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.camera.near = 0.5;
      keyLight.shadow.camera.far = 25;
      const d = 5;
      keyLight.shadow.camera.left = -d;
      keyLight.shadow.camera.right = d;
      keyLight.shadow.camera.top = d;
      keyLight.shadow.camera.bottom = -d;
      keyLight.shadow.bias = -0.0005;
      keyLight.shadow.normalBias = 0.02;
    }
    scene.add(keyLight);

    // Accent rim lights (Electric Blue & Purple)
    const rimLightBlue = new THREE.PointLight(0x00f0ff, 4, 15);
    rimLightBlue.position.set(-6, 3, -2);
    scene.add(rimLightBlue);

    const rimLightPurple = new THREE.PointLight(0xa855f7, 3.5, 15);
    rimLightPurple.position.set(6, 2, -3);
    scene.add(rimLightPurple);

    // 5. Materials
    const metalDarkMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.85,
      roughness: 0.25,
    });

    const cyberCyanMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      emissive: 0x0369a1,
      emissiveIntensity: 0.5,
      metalness: 0.9,
      roughness: 0.2,
    });

    const glowNeonMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.8,
      roughness: 0.1,
    });

    const purpleGlowMat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      emissive: 0x6d28d9,
      emissiveIntensity: 0.7,
      metalness: 0.5,
      roughness: 0.2,
    });

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x1e293b,
      metalness: 0.2,
      roughness: 0.1,
      transmission: isSoftwareGl ? 0 : 0.85,
      transparent: true,
      opacity: isSoftwareGl ? 0.6 : 0.95,
      ior: 1.5,
    });

    // Root Group
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // Ground platform & Holographic Grid
    const groundGeo = new THREE.CylinderGeometry(4.8, 5.2, 0.25, 48);
    const groundMesh = new THREE.Mesh(groundGeo, metalDarkMat);
    groundMesh.position.y = -0.125;
    groundMesh.receiveShadow = !isSoftwareGl;
    worldGroup.add(groundMesh);

    // Glowing rim around platform
    const rimGeo = new THREE.TorusGeometry(5.0, 0.04, 16, 64);
    const rimMesh = new THREE.Mesh(rimGeo, glowNeonMat);
    rimMesh.rotation.x = Math.PI / 2;
    rimMesh.position.y = 0.01;
    worldGroup.add(rimMesh);

    // Outer concentric orbital ring
    const orbitRingGeo = new THREE.TorusGeometry(6.2, 0.02, 16, 64);
    const orbitRingMesh = new THREE.Mesh(orbitRingGeo, purpleGlowMat);
    orbitRingMesh.rotation.x = Math.PI / 2;
    orbitRingMesh.position.y = -0.05;
    worldGroup.add(orbitRingMesh);

    // Soft contact shadow plane
    const shadowGeo = new THREE.PlaneGeometry(12, 12);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -0.15;
    worldGroup.add(shadowMesh);

    // Central Console Desk Assembly (Multi-part THREE.Group)
    const consoleGroup = new THREE.Group();
    consoleGroup.position.set(0, 0, 0);

    // Base pedestal
    const pedestalGeo = new THREE.CylinderGeometry(1.4, 1.8, 0.8, 32);
    const pedestalMesh = new THREE.Mesh(pedestalGeo, metalDarkMat);
    pedestalMesh.position.y = 0.4;
    pedestalMesh.castShadow = !isSoftwareGl;
    pedestalMesh.receiveShadow = !isSoftwareGl;
    consoleGroup.add(pedestalMesh);

    // Glass table top
    const tableTopGeo = new THREE.CylinderGeometry(2.2, 2.2, 0.1, 32);
    const tableTopMesh = new THREE.Mesh(tableTopGeo, glassMat);
    tableTopMesh.position.y = 0.85;
    tableTopMesh.castShadow = !isSoftwareGl;
    consoleGroup.add(tableTopMesh);

    // Desk accent trim ring
    const deskTrimGeo = new THREE.TorusGeometry(2.22, 0.025, 16, 48);
    const deskTrimMesh = new THREE.Mesh(deskTrimGeo, glowNeonMat);
    deskTrimMesh.rotation.x = Math.PI / 2;
    deskTrimMesh.position.y = 0.85;
    consoleGroup.add(deskTrimMesh);

    worldGroup.add(consoleGroup);

    // Interactive Floating Productivity Nodes
    const interactiveObjects: THREE.Object3D[] = [];

    // NODE 1: Center Core — Virtual Assistant Holographic Core
    const coreGroup = new THREE.Group();
    coreGroup.name = 'Virtual Assistant Core';
    coreGroup.userData = { id: 'va-core', target: 'services', label: 'VA & Operations Hub' };
    coreGroup.position.set(0, 1.7, 0);

    const icosaGeo = new THREE.IcosahedronGeometry(0.5, 0);
    const icosaMesh = new THREE.Mesh(icosaGeo, cyberCyanMat);
    coreGroup.add(icosaMesh);

    const wireframeGeo = new THREE.IcosahedronGeometry(0.65, 1);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeo, wireframeMat);
    coreGroup.add(wireframeMesh);

    const coreRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.85, 0.02, 16, 48),
      glowNeonMat
    );
    coreRing.rotation.x = Math.PI / 4;
    coreGroup.add(coreRing);

    worldGroup.add(coreGroup);
    interactiveObjects.push(coreGroup);

    // NODE 2: Calendar & Meeting Coordination (Left Front)
    const calGroup = new THREE.Group();
    calGroup.name = 'Calendar Coordination';
    calGroup.userData = { id: 'calendar', target: 'calendar-booking', label: 'Calendar & Scheduling Node' };
    calGroup.position.set(-1.8, 1.4, 0.8);

    const calBody = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.75, 0.12), metalDarkMat);
    calGroup.add(calBody);

    const calScreen = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 0.55), glowNeonMat);
    calScreen.position.z = 0.07;
    calGroup.add(calScreen);

    // Orbital ring around calendar node
    const calRing = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.015, 16, 36), purpleGlowMat);
    calRing.rotation.y = Math.PI / 3;
    calGroup.add(calRing);

    worldGroup.add(calGroup);
    interactiveObjects.push(calGroup);

    // NODE 3: Data & Sheets Management (Right Front - 3D Bar Graph Matrix)
    const sheetsGroup = new THREE.Group();
    sheetsGroup.name = 'Data & Sheets Hub';
    sheetsGroup.userData = { id: 'sheets', target: 'portfolio', label: 'Excel & Data Intelligence' };
    sheetsGroup.position.set(1.8, 1.4, 0.8);

    const barHeights = [0.4, 0.7, 0.55, 0.9];
    barHeights.forEach((h, idx) => {
      const bar = new THREE.Mesh(
        new THREE.BoxGeometry(0.14, h, 0.14),
        idx === 3 ? glowNeonMat : cyberCyanMat
      );
      bar.position.set((idx - 1.5) * 0.2, h / 2 - 0.2, 0);
      sheetsGroup.add(bar);
    });

    const basePlate = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.05, 0.5), metalDarkMat);
    basePlate.position.y = -0.25;
    sheetsGroup.add(basePlate);

    worldGroup.add(sheetsGroup);
    interactiveObjects.push(sheetsGroup);

    // NODE 4: Email & Communication Hub (Left Rear)
    const emailGroup = new THREE.Group();
    emailGroup.name = 'Email & Communications';
    emailGroup.userData = { id: 'email', target: 'services', label: 'Email Management Hub' };
    emailGroup.position.set(-1.5, 1.8, -1.4);

    const envOuter = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.45, 0.1), glassMat);
    emailGroup.add(envOuter);

    const envFlap = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.25, 4), purpleGlowMat);
    envFlap.rotation.x = Math.PI;
    envFlap.position.y = 0.15;
    emailGroup.add(envFlap);

    worldGroup.add(emailGroup);
    interactiveObjects.push(emailGroup);

    // NODE 5: Creative Media Slate (Right Rear)
    const mediaGroup = new THREE.Group();
    mediaGroup.name = 'Creative Media Slate';
    mediaGroup.userData = { id: 'media', target: 'portfolio', label: 'Canva Design & Video Studio' };
    mediaGroup.position.set(1.5, 1.8, -1.4);

    const tabletBody = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.85, 0.08), metalDarkMat);
    mediaGroup.add(tabletBody);

    const tabletScreen = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 0.72), purpleGlowMat);
    tabletScreen.position.z = 0.05;
    mediaGroup.add(tabletScreen);

    worldGroup.add(mediaGroup);
    interactiveObjects.push(mediaGroup);

    // Ambient floating particle dust
    const particleCount = isSoftwareGl ? 30 : 90;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 10;
      particlePos[i + 1] = Math.random() * 5 + 0.2;
      particlePos[i + 2] = (Math.random() - 0.5) * 10;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
    });
    const particleField = new THREE.Points(particleGeo, particleMat);
    scene.add(particleField);

    // Raycasting & Pointer handling
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      stateRef.current.mouse.set(x, y);
      pointer.set(x, y);

      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(interactiveObjects, true);

      if (intersects.length > 0) {
        let rootObj: THREE.Object3D | null = intersects[0].object;
        while (rootObj && !rootObj.userData?.label && rootObj.parent) {
          rootObj = rootObj.parent;
        }
        if (rootObj && rootObj.userData?.label) {
          stateRef.current.hoveredNode = rootObj;
          setHoveredNodeName(rootObj.userData.label);
          container.style.cursor = 'pointer';
        }
      } else {
        stateRef.current.hoveredNode = null;
        setHoveredNodeName(null);
        container.style.cursor = 'default';
      }
    };

    const onClick = () => {
      if (stateRef.current.hoveredNode) {
        const id = stateRef.current.hoveredNode.userData?.id;
        const target = stateRef.current.hoveredNode.userData?.target;
        if (onSelectNode && id) {
          onSelectNode(id);
        }
        if (target) {
          const el = document.getElementById(target);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    container.addEventListener('mousemove', onPointerMove);
    container.addEventListener('click', onClick);

    // Animation & Render Loop
    let frameId = 0;
    let clock = new THREE.Clock();

    function afterDraw(cb: () => void) {
      const gl = renderer.getContext() as WebGL2RenderingContext;
      const sync = gl.fenceSync ? gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0) : null;
      gl.flush();
      if (!sync) {
        frameId = window.setTimeout(cb, 40);
        return;
      }
      const poll = () => {
        const state = gl.getSyncParameter(sync, gl.SYNC_STATUS);
        if (state === gl.UNSIGNALED) {
          frameId = window.setTimeout(poll, 5);
        } else {
          gl.deleteSync(sync);
          frameId = window.setTimeout(cb, 60);
        }
      };
      frameId = window.setTimeout(poll, 5);
    }

    function tick() {
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Camera preset target positions
      switch (stateRef.current.activePreset) {
        case 'ops':
          stateRef.current.targetCameraPos.set(2.8, 3.2, 5.0);
          stateRef.current.targetLookAt.set(1.2, 1.2, 0.4);
          break;
        case 'inbox':
          stateRef.current.targetCameraPos.set(-2.8, 3.2, 5.0);
          stateRef.current.targetLookAt.set(-1.2, 1.2, 0.4);
          break;
        case 'creative':
          stateRef.current.targetCameraPos.set(2.2, 3.6, -4.5);
          stateRef.current.targetLookAt.set(0.8, 1.5, -0.8);
          break;
        default:
          stateRef.current.targetCameraPos.set(0, 4.2, 8.8);
          stateRef.current.targetLookAt.set(0, 0.9, 0);
          break;
      }

      // Parallax mouse damping
      const mouseParallaxX = stateRef.current.mouse.x * 0.8;
      const mouseParallaxY = stateRef.current.mouse.y * 0.5;

      _targetPos.copy(stateRef.current.targetCameraPos);
      _targetPos.x += mouseParallaxX;
      _targetPos.y += mouseParallaxY;

      camera.position.x = THREE.MathUtils.damp(camera.position.x, _targetPos.x, 3.5, delta);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, _targetPos.y, 3.5, delta);
      camera.position.z = THREE.MathUtils.damp(camera.position.z, _targetPos.z, 3.5, delta);

      stateRef.current.currentLookAt.x = THREE.MathUtils.damp(
        stateRef.current.currentLookAt.x,
        stateRef.current.targetLookAt.x,
        4.0,
        delta
      );
      stateRef.current.currentLookAt.y = THREE.MathUtils.damp(
        stateRef.current.currentLookAt.y,
        stateRef.current.targetLookAt.y,
        4.0,
        delta
      );
      stateRef.current.currentLookAt.z = THREE.MathUtils.damp(
        stateRef.current.currentLookAt.z,
        stateRef.current.targetLookAt.z,
        4.0,
        delta
      );
      camera.lookAt(stateRef.current.currentLookAt);

      // Auto rotation of world group
      if (stateRef.current.autoRotate) {
        worldGroup.rotation.y += delta * 0.22;
      }

      // Continuous animated floating kinematics
      coreGroup.position.y = 1.7 + Math.sin(time * 1.8) * 0.08;
      coreGroup.rotation.y += delta * 0.6;
      coreRing.rotation.z += delta * 0.9;
      wireframeMesh.rotation.x -= delta * 0.4;

      calGroup.position.y = 1.4 + Math.sin(time * 1.5 + 1) * 0.06;
      calRing.rotation.y += delta * 0.8;

      sheetsGroup.position.y = 1.4 + Math.sin(time * 1.6 + 2) * 0.06;

      emailGroup.position.y = 1.8 + Math.sin(time * 1.4 + 3) * 0.06;
      emailGroup.rotation.y = Math.sin(time * 0.8) * 0.15;

      mediaGroup.position.y = 1.8 + Math.sin(time * 1.5 + 4) * 0.06;
      mediaGroup.rotation.y = -Math.sin(time * 0.8) * 0.15;

      // Pulse floating dust particles
      particleField.rotation.y += delta * 0.04;

      renderer.render(scene, camera);

      if (isSoftwareGl) {
        afterDraw(tick);
      } else {
        frameId = requestAnimationFrame(tick);
      }
    }

    tick();

    // Resize handling
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      container.removeEventListener('mousemove', onPointerMove);
      container.removeEventListener('click', onClick);
      window.removeEventListener('resize', onResize);

      // Clean disposal
      renderer.dispose();
      groundGeo.dispose();
      rimGeo.dispose();
      orbitRingGeo.dispose();
      shadowGeo.dispose();
      pedestalGeo.dispose();
      tableTopGeo.dispose();
      deskTrimGeo.dispose();
      icosaGeo.dispose();
      wireframeGeo.dispose();
      calBody.geometry.dispose();
      calScreen.geometry.dispose();
      calRing.geometry.dispose();
      basePlate.geometry.dispose();
      envOuter.geometry.dispose();
      envFlap.geometry.dispose();
      tabletBody.geometry.dispose();
      tabletScreen.geometry.dispose();
      particleGeo.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [onSelectNode]);

  return (
    <div className="relative w-full h-[460px] md:h-[560px] rounded-2xl overflow-hidden border border-cyan-500/20 bg-[#060a17]">
      {/* 3D Canvas container */}
      <div ref={mountRef} className="w-full h-full" />

      {/* Top minimal spec badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/60 text-xs text-slate-300 pointer-events-none">
        <Box className="w-3.5 h-3.5 text-cyan-400" />
        <span className="font-medium">Md. Alim Ali Interactive 3D Operational Workspace</span>
        {hoveredNodeName && (
          <span className="text-cyan-300 font-semibold ml-1">· Hovered: {hoveredNodeName}</span>
        )}
      </div>

      {/* Instruction pill */}
      <div className="absolute top-4 right-4 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 text-[11px] text-slate-400 pointer-events-none">
        <span>Click any 3D node to inspect</span>
      </div>

      {/* Unified Bottom Control Dock (Consolidated, Collapsible, Zero Viewport Occlusion) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 w-[94%] max-w-[620px] transition-transform duration-300 ease-out">
        {/* Toggle drawer button */}
        <div className="flex justify-center -mb-2 relative z-20">
          <button
            onClick={() => setIsDockCollapsed(!isDockCollapsed)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-t-lg bg-slate-900/90 border-t border-x border-cyan-500/30 text-[11px] font-medium text-slate-300 hover:text-white transition-colors"
          >
            {isDockCollapsed ? (
              <>
                <ChevronUp className="w-3.5 h-3.5 text-cyan-400" />
                <span>Show 3D Controls</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-3.5 h-3.5 text-cyan-400" />
                <span>Hide 3D Controls</span>
              </>
            )}
          </button>
        </div>

        {/* Dock panel */}
        {!isDockCollapsed && (
          <div className="p-2 sm:p-2.5 rounded-xl bg-slate-950/90 border border-cyan-500/25 shadow-xl shadow-cyan-950/30 flex flex-wrap items-center justify-between gap-2">
            {/* View presets */}
            <div className="flex items-center gap-1">
              <span className="text-[11px] text-slate-400 font-medium px-1 flex items-center gap-1">
                <Eye className="w-3 h-3 text-cyan-400" />
                Preset:
              </span>
              <button
                onClick={() => setActivePreset('all')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  activePreset === 'all'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActivePreset('ops')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  activePreset === 'ops'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Data & Ops
              </button>
              <button
                onClick={() => setActivePreset('inbox')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  activePreset === 'inbox'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Inbox
              </button>
              <button
                onClick={() => setActivePreset('creative')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  activePreset === 'creative'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Creative
              </button>
            </div>

            {/* Rotation toggle */}
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md border transition-colors ${
                autoRotate
                  ? 'border-cyan-500/30 bg-cyan-950/40 text-cyan-300'
                  : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              <RefreshCw className={`w-3 h-3 ${autoRotate ? 'text-cyan-400' : 'text-slate-500'}`} />
              <span>{autoRotate ? 'Spin: Active' : 'Spin: Paused'}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
