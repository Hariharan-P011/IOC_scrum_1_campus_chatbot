import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { CAMPUS_LOCATIONS, CampusLocation } from '../../data/campusLocations';

interface Campus3DViewProps {
  selectedToLocation: CampusLocation | null;
  onSelectBuilding: (loc: CampusLocation) => void;
}

export const Campus3DView: React.FC<Campus3DViewProps> = ({
  selectedToLocation,
  onSelectBuilding
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a);
    scene.fog = new THREE.FogExp2(0x0f172a, 0.0015);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 3000);
    camera.position.set(0, 450, 600);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(300, 500, 200);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const hemiLight = new THREE.HemisphereLight(0x38bdf8, 0x1e293b, 0.4);
    scene.add(hemiLight);

    // Ground Plane (Campus Grounds)
    const groundGeo = new THREE.PlaneGeometry(1200, 700);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x1e3a2b, // Lush green campus base
      roughness: 0.8
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Campus Main Roads (Trunk Roads)
    const roadMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5 });
    
    // MIT Main Road
    const mitRoadGeo = new THREE.PlaneGeometry(1100, 30);
    const mitRoad = new THREE.Mesh(mitRoadGeo, roadMat);
    mitRoad.rotation.x = -Math.PI / 2;
    mitRoad.position.set(0, 1, -50);
    scene.add(mitRoad);

    // South parallel road
    const southRoadGeo = new THREE.PlaneGeometry(900, 24);
    const southRoad = new THREE.Mesh(southRoadGeo, roadMat);
    southRoad.rotation.x = -Math.PI / 2;
    southRoad.position.set(0, 1, 70);
    scene.add(southRoad);

    // Category Color Mapping
    const getCategoryColor = (cat: string) => {
      switch (cat) {
        case 'Academic / Department': return 0x38bdf8;
        case 'Administration': return 0xf59e0b;
        case 'Hostel': return 0xec4899;
        case 'Food / Canteen': return 0xf97316;
        case 'Library': return 0xa855f7;
        case 'Research Centre': return 0x06b6d4;
        case 'Health': return 0x10b981;
        default: return 0x64748b;
      }
    };

    // Render 3D Building Blocks
    const buildingMeshes: { mesh: THREE.Mesh; loc: CampusLocation }[] = [];

    // Map 2D coordinates (0..1024, 0..512) to 3D scene (-512..512, -256..256)
    CAMPUS_LOCATIONS.forEach((bld) => {
      const posX = (bld.x + bld.width / 2) - 512;
      const posZ = (bld.y + bld.height / 2) - 256;
      const bldWidth = Math.max(20, bld.width);
      const bldDepth = Math.max(20, bld.height);
      const bldHeight = bld.category === 'Academic / Department' ? 45 : 30;

      const isDest = selectedToLocation?.id === bld.id;
      const color = isDest ? 0xef4444 : getCategoryColor(bld.category);

      const geo = new THREE.BoxGeometry(bldWidth, bldHeight, bldDepth);
      const mat = new THREE.MeshStandardMaterial({
        color,
        roughness: 0.3,
        metalness: 0.2,
        emissive: isDest ? 0xef4444 : 0x000000,
        emissiveIntensity: isDest ? 0.4 : 0.0
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(posX, bldHeight / 2, posZ);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.userData = { location: bld };

      scene.add(mesh);
      buildingMeshes.push({ mesh, loc: bld });
    });

    // Orbit Control Interaction
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let azimuthAngle = 0;
    let polarAngle = Math.PI / 4;
    const distance = 750;

    const updateCameraPosition = () => {
      camera.position.x = distance * Math.sin(polarAngle) * Math.sin(azimuthAngle);
      camera.position.y = distance * Math.cos(polarAngle);
      camera.position.z = distance * Math.sin(polarAngle) * Math.cos(azimuthAngle);
      camera.lookAt(0, 20, 0);
    };
    updateCameraPosition();

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      azimuthAngle -= deltaX * 0.006;
      polarAngle = Math.max(0.15, Math.min(Math.PI / 2.2, polarAngle - deltaY * 0.006));
      updateCameraPosition();
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let reqId: number;
    const animate = () => {
      reqId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('resize', handleResize);
      domEl.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      if (container.contains(domEl)) {
        container.removeChild(domEl);
      }
      renderer.dispose();
    };
  }, [selectedToLocation]);

  return (
    <div className="campus-3d-wrapper">
      <div className="campus-3d-hint">
        <span>🎮 3D Conceptual Campus View</span>
        <small>Click and drag to rotate the 3D campus block perspective.</small>
      </div>
      <div className="campus-3d-canvas-container" ref={mountRef} />
    </div>
  );
};

export default Campus3DView;
