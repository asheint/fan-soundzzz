import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Center } from '@react-three/drei';
import { useFanStore } from '../store/fanStore';
import { Group, Mesh } from 'three';

// Mock models since we can't load actual GLTF files
const TableFanModel = () => {
  const fanGroup = useRef<Group>(null);
  const blades = useRef<Mesh>(null);
  const { isPlaying, speed } = useFanStore();
  
  useFrame(() => {
    if (isPlaying && blades.current) {
      // Rotate the blades based on speed
      blades.current.rotation.z += 0.05 + speed * 0.2;
    }
  });
  
  return (
    <group ref={fanGroup}>
      {/* Base */}
      <mesh position={[0, -1.5, 0]}>
        <cylinderGeometry args={[0.8, 1, 0.5, 16]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      
      {/* Stand */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 2, 8]} />
        <meshStandardMaterial color="#555" />
      </mesh>
      
      {/* Fan head */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.3, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshStandardMaterial color="#444" />
      </mesh>
      
      {/* Fan cage */}
      <mesh position={[0, 0.5, 0.3]}>
        <torusGeometry args={[1, 0.05, 8, 24]} />
        <meshStandardMaterial color="#666" />
      </mesh>
      
      {/* Fan blades */}
      <group ref={blades} position={[0, 0.5, 0.1]}>
        {[0, 1, 2, 3].map((i) => (
          <mesh key={i} rotation={[0, 0, (Math.PI / 2) * i]}>
            <boxGeometry args={[0.1, 0.8, 0.05]} />
            <meshStandardMaterial color="#222" />
          </mesh>
        ))}
      </group>
    </group>
  );
};

const CeilingFanModel = () => {
  const fanGroup = useRef<Group>(null);
  const blades = useRef<Group>(null);
  const { isPlaying, speed } = useFanStore();
  
  useFrame(() => {
    if (isPlaying && blades.current) {
      // Rotate the blades based on speed
      blades.current.rotation.y += 0.03 + speed * 0.15;
    }
  });
  
  return (
    <group ref={fanGroup}>
      {/* Mount */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.5, 8]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      
      {/* Rod */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1, 8]} />
        <meshStandardMaterial color="#555" />
      </mesh>
      
      {/* Motor housing */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#444" />
      </mesh>
      
      {/* Fan blades */}
      <group ref={blades} position={[0, 0, 0]}>
        {[0, 1, 2, 3, 4].map((i) => (
          <mesh key={i} rotation={[0, (Math.PI * 2 / 5) * i, 0]} position={[0.6, 0, 0]}>
            <boxGeometry args={[1, 0.05, 0.2]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
        ))}
      </group>
    </group>
  );
};

const BoxFanModel = () => {
  const fanGroup = useRef<Group>(null);
  const blades = useRef<Mesh>(null);
  const { isPlaying, speed } = useFanStore();
  
  useFrame(() => {
    if (isPlaying && blades.current) {
      // Rotate the blades based on speed
      blades.current.rotation.z += 0.04 + speed * 0.18;
    }
  });
  
  return (
    <group ref={fanGroup}>
      {/* Box frame */}
      <mesh>
        <boxGeometry args={[2, 2, 0.5]} />
        <meshStandardMaterial color="#555" />
      </mesh>
      
      {/* Inner frame */}
      <mesh position={[0, 0, 0.1]}>
        <boxGeometry args={[1.8, 1.8, 0.1]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      
      {/* Fan blades */}
      <group ref={blades} position={[0, 0, 0.2]}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <mesh key={i} rotation={[0, 0, (Math.PI / 3) * i]}>
            <boxGeometry args={[0.2, 0.7, 0.05]} />
            <meshStandardMaterial color="#222" />
          </mesh>
        ))}
      </group>
    </group>
  );
};

const FanModel = () => {
  const { fanType } = useFanStore();
  
  return (
    <Center>
      {fanType === 'table' && <TableFanModel />}
      {fanType === 'ceiling' && <CeilingFanModel />}
      {fanType === 'box' && <BoxFanModel />}
    </Center>
  );
};

export default FanModel;