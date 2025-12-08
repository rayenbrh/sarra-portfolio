import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function Stars() {
  const ref = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const positions = new Float32Array(20000 * 3); // Au lieu de 3000
    for (let i = 0; i < 3000; i++) { // Au lieu de 3000
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
        size={0.01} 
        sizeAttenuation 
        depthWrite={false} 
        blending={THREE.AdditiveBlending} 
      />
    </Points>
  );
}

// Composant exportable
export const StarfieldCanvas = () => {
  return (
    <Canvas 
      camera={{ position: [0, 0, 5], fov: 75 }} 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%',
        background: '#020617'
      }}
    >
      <Stars />
    </Canvas>
  );
};