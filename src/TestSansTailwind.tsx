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

function TestSansTailwind() {
  return (
    <div style={{ 
      position: 'relative', 
      width: '100vw', 
      height: '100vh', 
      background: '#020617',
      margin: 0,
      padding: 0
    }}>
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        zIndex: -10 
      }}>
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 75 }} 
          style={{ width: '100%', height: '100%', background: '#020617' }}
        >
          <AnimatedStars />
        </Canvas>
      </div>
      
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        color: 'white',
        textAlign: 'center'
      }}>
        <div>
          <h1 style={{ fontSize: '48px', marginBottom: '20px', fontWeight: 'bold' }}>
            Test Sans Tailwind
          </h1>
          <p style={{ fontSize: '24px' }}>
            CSS pur uniquement
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestSansTailwind;