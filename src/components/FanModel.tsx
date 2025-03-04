import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Center, MeshWobbleMaterial } from '@react-three/drei';
import { useFanStore } from '../store/fanStore';
import { Group } from 'three';

// Enhanced Table Fan Model with more realistic components
const TableFanModel = () => {
  const fanGroup = useRef<Group>(null);
  const blades = useRef<Group>(null);
  const cage = useRef<Group>(null);
  const { isPlaying, speed } = useFanStore();

  // Add subtle oscillation to the fan head
  const oscillating = useRef(false);
  const oscillationAngle = useRef(0);
  const oscillationDirection = useRef(1);
  
  useFrame((state, delta) => {
    if (!fanGroup.current || !blades.current || !cage.current) return;
    
    // Blade rotation based on speed
    if (isPlaying) {
      blades.current.rotation.z += (0.05 + speed * 0.3) * delta * 60;
      
      // Subtle cage vibration at high speeds
      if (speed > 0.7) {
        cage.current.position.x = Math.sin(state.clock.elapsedTime * 30) * 0.001 * speed;
        cage.current.position.y = Math.cos(state.clock.elapsedTime * 30) * 0.001 * speed;
      }
      
      // Optional oscillation
      if (oscillating.current) {
        oscillationAngle.current += 0.01 * oscillationDirection.current * delta * 60;
        
        if (oscillationAngle.current > 0.4) {
          oscillationDirection.current = -1;
        } else if (oscillationAngle.current < -0.4) {
          oscillationDirection.current = 1;
        }
        
        fanGroup.current.rotation.y = oscillationAngle.current;
      }
    }
  });
  
  // Create a metallic material with slight roughness
  const metalMaterial = useMemo(() => ({
    color: "#8a8a8a",
    metalness: 0.8,
    roughness: 0.2,
    envMapIntensity: 1.0
  }), []);

  // Create a plastic material
  const plasticMaterial = useMemo(() => ({
    color: "#303030",
    metalness: 0.1,
    roughness: 0.8,
    envMapIntensity: 0.5
  }), []);
  
  return (
    <group ref={fanGroup}>
      {/* Base with textured bottom */}
      <mesh position={[0, -1.5, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[0.8, 1.2, 0.5, 32]} />
        <meshStandardMaterial {...plasticMaterial} color="#202020" />
      </mesh>
      
      {/* Control knobs */}
      {[0.3, 0, -0.3].map((x, i) => (
        <mesh key={i} position={[x, -1.35, 0.7]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.05, 16]} />
          <meshStandardMaterial color="#101010" roughness={0.6} />
        </mesh>
      ))}
      
      {/* Stand with joint */}
      <mesh position={[0, -0.6, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.15, 1.8, 16]} />
        <meshStandardMaterial {...metalMaterial} color="#707070" />
      </mesh>
      
      {/* Tilt joint */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial {...metalMaterial} />
      </mesh>
      
      {/* Motor housing */}
      <group position={[0, 0.5, 0.2]}>
        <mesh castShadow rotation={[Math.PI/2, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.4, 32, 1, false, 0, Math.PI]} />
          <meshStandardMaterial {...plasticMaterial} />
        </mesh>
        
        {/* Back cover with vents */}
        <mesh position={[0, 0, -0.2]} castShadow rotation={[Math.PI/2, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.05, 32]} />
          <meshStandardMaterial {...plasticMaterial} />
        </mesh>
      </group>
      
      {/* Fan cage - outer ring */}
      <group ref={cage} position={[0, 0.5, 0.3]}>
        <mesh castShadow rotation={[Math.PI/2, 0, 0]}>
          <torusGeometry args={[1, 0.04, 16, 64]} />
          <meshStandardMaterial {...metalMaterial} color="#606060" />
        </mesh>
        
        {/* Fan cage - inner ring */}
        <mesh castShadow>
          <torusGeometry args={[0.85, 0.03, 12, 48]} />
          <meshStandardMaterial {...metalMaterial} color="#606060" />
        </mesh>
        
        {/* Cage bars */}
        {Array.from({ length: 24 }).map((_, i) => (
          <mesh 
            key={i} 
            rotation={[0, 0, (Math.PI * 2 / 24) * i]}
            position={[0, 0, 0]}
            castShadow
          >
            <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
            <meshStandardMaterial {...metalMaterial} color="#505050" />
          </mesh>
        ))}
      </group>
      
      {/* Fan blades with aerodynamic shape */}
      <group ref={blades} position={[0, 0.5, 0.2]}>
        {[0, 1, 2, 3].map((i) => (
          <group key={i} rotation={[0, 0, (Math.PI / 2) * i]}>
            <mesh castShadow>
              <cylinderGeometry 
                args={[0.08, 0.08, 0.06, 16]} 
              />
              <meshStandardMaterial color="#202020" />
            </mesh>
            <mesh position={[0.35, 0, 0]} rotation={[0.1, 0, 0.12]} castShadow>
              <cylinderGeometry 
                args={[0.08, 0.08, 0.06, 16]} 
              />
              <MeshWobbleMaterial 
                factor={0.05} 
                speed={isPlaying ? 1 : 0} 
                color="#202020" 
                roughness={0.9} 
              />
            </mesh>
          </group>
        ))}
        
        {/* Center cap */}
        <mesh position={[0, 0, 0.04]} rotation={[Math.PI/2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.12, 0.12, 0.08, 16]} />
          <meshStandardMaterial color="#151515" metalness={0.7} roughness={0.3} />
        </mesh>
      </group>
    </group>
  );
};

// Enhanced Ceiling Fan with wooden blades and detailed fixtures
const CeilingFanModel = () => {
  const fanGroup = useRef<Group>(null);
  const blades = useRef<Group>(null);
  const { isPlaying, speed } = useFanStore();
  
  useFrame((state, delta) => {
    if (isPlaying && blades.current) {
      // Rotate the blades based on speed with smoother acceleration
      const targetSpeed = 0.03 + speed * 0.2;
      blades.current.rotation.y += targetSpeed * delta * 60;
      
      // Add subtle wobble based on rotation speed
      if (fanGroup.current && speed > 0.5) {
        fanGroup.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.002 * speed;
      }
    }
  });
  
  // Wooden texture for blades
  const woodMaterial = useMemo(() => ({
    color: "#8B4513",
    roughness: 0.65,
    metalness: 0,
    envMapIntensity: 0.8
  }), []);
  
  // Metal fixture material
  const fixtureMaterial = useMemo(() => ({
    color: "#a0a0a0",
    roughness: 0.2,
    metalness: 0.8,
    envMapIntensity: 1.2
  }), []);
  
  return (
    <group ref={fanGroup}>
      {/* Ceiling mount plate */}
      <mesh position={[0, 1.2, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.25, 0.25, 0.05, 24]} />
        <meshStandardMaterial {...fixtureMaterial} color="#909090" />
      </mesh>
      
      {/* Decorative ceiling mount */}
      <mesh position={[0, 1.1, 0]} castShadow>
        <mesh rotation={[Math.PI/2, 0, 0]}>
          <capsuleGeometry args={[0.15, 0.2, 8, 16]} />
        </mesh>
      </mesh>
      
      {/* Down rod with texture */}
      <mesh position={[0, 0.6, 0]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 1, 12]} />
        <meshStandardMaterial {...fixtureMaterial} />
      </mesh>
      
      {/* Motor housing with vents */}
      <group position={[0, 0, 0]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.25, 0.25, 0.2, 32]} />
          <meshStandardMaterial color="#505050" metalness={0.5} roughness={0.5} />
        </mesh>
        
        {/* Decorative ring */}
        <mesh position={[0, 0.12, 0]} castShadow>
          <mesh rotation={[Math.PI/2, 0, 0]}>
            <torusGeometry args={[0.27, 0.02, 12, 32]} />
          </mesh>
          <meshStandardMaterial {...fixtureMaterial} color="#a0a0a0" />
        </mesh>
        
        {/* Bottom cap with light mount */}
        <group position={[0, -0.15, 0]}>
          <mesh castShadow>
            <sphereGeometry args={[0.15, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial {...fixtureMaterial} color="#909090" />
          </mesh>
          
          {/* Light bulb socket */}
          <mesh position={[0, -0.1, 0]} castShadow>
            <cylinderGeometry args={[0.06, 0.06, 0.1, 16]} />
            <meshStandardMaterial color="#303030" roughness={0.9} />
          </mesh>
        </group>
      </group>
      
      {/* Fan blades with wood grain and mounts */}
      <group ref={blades} position={[0, 0, 0]}>
        {[0, 1, 2, 3, 4].map((i) => (
          <group key={i} rotation={[0, (Math.PI * 2 / 5) * i, 0]}>
            {/* Blade mount arm */}
            <mesh position={[0.3, 0, 0]} castShadow>
              <boxGeometry args={[0.6, 0.05, 0.08]} />
              <meshStandardMaterial {...fixtureMaterial} color="#909090" />
            </mesh>
            
            {/* Actual blade with slight angle */}
            <mesh 
              position={[0.9, -0.03, 0]} 
              rotation={[0.1, 0, 0]} 
              castShadow
            >
              <boxGeometry args={[1.2, 0.02, 0.22]} />
              <MeshWobbleMaterial 
                factor={0.03} 
                speed={isPlaying ? 0.5 : 0} 
                {...woodMaterial} 
              />
            </mesh>
          </group>
        ))}
      </group>
      
      {/* Pull chains */}
      {[0.15, -0.15].map((x, i) => (
        <group key={i} position={[x, -0.2, 0]}>
          {Array.from({ length: 8 }).map((_, j) => (
            <mesh key={j} position={[0, -0.05 * j - 0.05, 0]} castShadow>
              <sphereGeometry args={[0.02, 8, 8]} />
              <meshStandardMaterial {...fixtureMaterial} color="#b0b0b0" />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
};

// Enhanced Box Fan with grille detail and improved body
const BoxFanModel = () => {
  const fanGroup = useRef<Group>(null);
  const blades = useRef<Group>(null);
  const { isPlaying, speed } = useFanStore();
  
  useFrame((state, delta) => {
    if (isPlaying && blades.current) {
      // Rotate the blades based on speed
      blades.current.rotation.z += (0.04 + speed * 0.25) * delta * 60;
      
      // Add subtle vibration at high speeds
      if (fanGroup.current && speed > 0.7) {
        fanGroup.current.position.x = Math.sin(state.clock.elapsedTime * 40) * 0.001 * speed;
        fanGroup.current.position.y = Math.cos(state.clock.elapsedTime * 40) * 0.001 * speed;
      }
    }
  });
  
  // Create control buttons
  const buttons = useMemo(() => [
    { label: "High", position: [0.6, -0.7, 0.28], color: "#aa0000" },
    { label: "Med", position: [0.2, -0.7, 0.28], color: "#aaaa00" },
    { label: "Low", position: [-0.2, -0.7, 0.28], color: "#00aa00" },
    { label: "Off", position: [-0.6, -0.7, 0.28], color: "#999999" }
  ], []);
  
  return (
    <group ref={fanGroup}>
      {/* Main box frame with rounded corners */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.1, 2.1, 0.4]} />
        <meshStandardMaterial color="#404040" roughness={0.7} metalness={0.1} />
      </mesh>
      
      {/* Inset frame */}
      <mesh position={[0, 0, 0.05]} castShadow>
        <boxGeometry args={[2, 2, 0.2]} />
        <meshStandardMaterial color="#353535" roughness={0.8} />
      </mesh>
      
      {/* Inner frame */}
      <mesh position={[0, 0, 0.15]} castShadow>
        <boxGeometry args={[1.8, 1.8, 0.1]} />
        <meshStandardMaterial color="#303030" roughness={0.9} />
      </mesh>
      
      {/* Front grille - horizontal bars */}
      {Array.from({ length: 13 }).map((_, i) => (
        <mesh 
          key={`h-${i}`} 
          position={[0, -0.9 + i * 0.15, 0.26]} 
          castShadow
        >
          <boxGeometry args={[1.75, 0.03, 0.01]} />
          <meshStandardMaterial color="#252525" />
        </mesh>
      ))}
      
      {/* Front grille - vertical bars */}
      {Array.from({ length: 13 }).map((_, i) => (
        <mesh 
          key={`v-${i}`} 
          position={[-0.9 + i * 0.15, 0, 0.26]} 
          castShadow
        >
          <boxGeometry args={[0.03, 1.75, 0.01]} />
          <meshStandardMaterial color="#252525" />
        </mesh>
      ))}
      
      {/* Control buttons */}
      {buttons.map((button, i) => (
        <group key={i} position={[button.position[0], button.position[1], button.position[2]]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.1, 0.1, 0.05, 16]} />
            <meshStandardMaterial color={button.color} roughness={0.6} />
          </mesh>
        </group>
      ))}
      
      {/* Fan blades with improved shape */}
      <group ref={blades} position={[0, 0, 0.2]}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <group key={i} rotation={[0, 0, (Math.PI / 3) * i]}>
            <mesh castShadow rotation={[Math.PI/2, 0, 0]}>
              <cylinderGeometry args={[0.07, 0.07, 0.04, 12]} />
              <meshStandardMaterial color="#151515" />
            </mesh>
            
            {/* Blade with slight curve */}
            <mesh position={[0, -0.4, 0]} rotation={[0, 0, 0.1]} castShadow>
              <boxGeometry args={[0.26, 0.8, 0.04]} />
              <MeshWobbleMaterial 
                factor={0.04} 
                speed={isPlaying ? 1 : 0} 
                color="#252525" 
                roughness={0.7} 
              />
            </mesh>
          </group>
        ))}
        
        {/* Hub cap */}
        <mesh position={[0, 0, 0.03]} rotation={[Math.PI/2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.15, 0.15, 0.06, 24]} />
          <meshStandardMaterial color="#151515" metalness={0.2} roughness={0.8} />
        </mesh>
      </group>
      
      {/* Power cord */}
      <mesh 
        position={[0, -1, -0.1]} 
        rotation={[0, 0, Math.PI/2]}
        castShadow
      >
        <cylinderGeometry args={[0.03, 0.03, 0.4, 8]} />
        <meshStandardMaterial color="#101010" roughness={0.9} />
      </mesh>
    </group>
  );
};

// Scene lighting setup to enhance model appearance
const FanLighting = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        castShadow 
        shadow-mapSize-width={1024} 
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-5, 5, 5]} intensity={0.5} />
    </>
  );
};

// Enhanced main component with lighting
const FanModel = () => {
  const { fanType } = useFanStore();
  
  return (
    <>
      <FanLighting />
      <Center>
        {fanType === 'table' && <TableFanModel />}
        {fanType === 'ceiling' && <CeilingFanModel />}
        {fanType === 'box' && <BoxFanModel />}
      </Center>
    </>
  );
};

export default FanModel;