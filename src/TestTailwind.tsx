import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function AnimatedStars() {
  const ref = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      const radius = 5 + Math.random() * 15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function TestTailwind() {
  return (
    <div className="relative w-screen h-screen bg-slate-950">
      {/* Canvas avec z-index inline */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -10 }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }} style={{ background: '#020617' }}>
          <AnimatedStars />
        </Canvas>
      </div>
      
      {/* Contenu */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-white text-center">
          <h1 className="text-5xl font-bold mb-4">Test Tailwind</h1>
          <p className="text-2xl">Étoiles avec Tailwind</p>
        </div>
      </div>
    </div>
  );
}

export default TestTailwind;