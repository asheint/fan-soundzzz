import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float } from '@react-three/drei';
import FanModel from './FanModel';
import { useFanStore } from '../store/fanStore';

const FanScene = () => {
  const { isPlaying, speed } = useFanStore();
  
  return (
    <div className="w-full h-[400px] md:h-[500px] relative">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Suspense fallback={null}>
          <Float
            speed={1.5} 
            rotationIntensity={0.2} 
            floatIntensity={0.5}
            enabled={!isPlaying}
          >
            <FanModel />
          </Float>
          <Environment preset="city" />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate={!isPlaying}
          autoRotateSpeed={1}
        />
      </Canvas>
      
      {/* Particle effect for airflow */}
      {isPlaying && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: `${Math.random() * 5 + 2}px`,
                height: `${Math.random() * 5 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5,
                animation: `float ${Math.random() * 3 + 2}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `translateX(${(speed * 100) + 50}px)`,
                transition: 'transform 1s ease-out'
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FanScene;