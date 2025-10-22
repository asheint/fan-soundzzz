import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useStandFanStore } from '../../../stores/useStandFanStore';
import { useStandFanSound } from '../../../hooks/useStandFanSound';

export default function StandFan(props) {
  const group = useRef();
  const oscillationGroupRef = useRef();
  
  const { nodes, materials, animations } = useGLTF('/models/Dark Room/Stand_Fan.glb');
  const { actions } = useAnimations(animations, group);

  const {
    isRunning,
    isStopping,
    speed, 
    isOscillating,
    currentOscillationAngle,
    setCurrentOscillationAngle,
    completeStop
  } = useStandFanStore();

  useStandFanSound(isRunning, speed, 'stand-fan');

  const currentTimeScaleRef = useRef(0);
  const currentOscillationSpeedRef = useRef(0);
  const stopStartTimeRef = useRef(null);

  const DECELERATION_DURATION = 5000;

  const speedMultipliers = {
    1: 1,
    2: 2,
    3: 3
  };

  useEffect(() => {
    if (actions.Animation) {
      if (isRunning && !isStopping) {
        actions.Animation.reset().play();
        actions.Animation.paused = false;
        const targetSpeed = speedMultipliers[speed];
        actions.Animation.timeScale = targetSpeed;
        currentTimeScaleRef.current = targetSpeed;
        stopStartTimeRef.current = null;
      } else if (!isRunning && !isStopping) {
        actions.Animation.timeScale = 0;
        currentTimeScaleRef.current = 0;
      }
    }
  }, [isRunning, isStopping, speed, actions]);

  useFrame((state) => {
    if (!oscillationGroupRef.current) return;

    if (isStopping) {
      if (stopStartTimeRef.current === null) {
        stopStartTimeRef.current = state.clock.elapsedTime;
      }

      const elapsedStopTime = (state.clock.elapsedTime - stopStartTimeRef.current) * 1000;
      const progress = Math.min(elapsedStopTime / DECELERATION_DURATION, 1);
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      if (actions.Animation) {
        const startSpeed = speedMultipliers[speed];
        const newTimeScale = startSpeed * (1 - easeOutCubic);
        actions.Animation.timeScale = Math.max(0, newTimeScale);
        currentTimeScaleRef.current = newTimeScale;
      }

      if (isOscillating) {
        currentOscillationSpeedRef.current = 0.5 * (1 - easeOutCubic);
      }

      if (progress >= 1) {
        completeStop();
        stopStartTimeRef.current = null;
        currentOscillationSpeedRef.current = 0;
      }
    }

    if (isOscillating && (isRunning || isStopping)) {
      const oscillationSpeed = isStopping ? currentOscillationSpeedRef.current : 0.5;
      const maxAngle = Math.PI / 6;
      
      const targetOscillation = Math.sin(state.clock.elapsedTime * oscillationSpeed) * maxAngle;
      const newAngle = currentOscillationAngle + (targetOscillation - currentOscillationAngle) * 0.05;
      setCurrentOscillationAngle(newAngle);
      
      oscillationGroupRef.current.rotation.y = newAngle;
    } else if (!isRunning && !isStopping) {
      if (Math.abs(currentOscillationAngle) > 0.001) {
        const newAngle = currentOscillationAngle * 0.95;
        setCurrentOscillationAngle(newAngle);
        oscillationGroupRef.current.rotation.y = newAngle;
      }
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model001" position={[1.072, 0, 0.32]} rotation={[-Math.PI / 2, 0, -0.713]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              
              <group ref={oscillationGroupRef}>
                
                <group name="Cylinder002_18" position={[0.029, 1.145, -0.034]} rotation={[0, 0.698, 0]} scale={[0.083, 0.258, 0.083]}>
                  <group name="Cylinder003_12" position={[-0.018, 0.346, 3.486]} scale={[3.109, 1, 3.109]}>
                    <mesh name="Object_32" geometry={nodes.Object_32.geometry} material={materials.Light_Gray_Plastic} />
                  </group>
                  <group name="Cylinder004_13" position={[-0.004, 0.346, 0.687]} scale={[3.109, 1, 3.109]}>
                    <mesh name="Object_34" geometry={nodes.Object_34.geometry} material={materials.Light_Gray_Plastic} />
                  </group>
                  <group name="Cylinder005_14" position={[-0.004, 0.346, 0.687]} scale={[3.109, 1, 3.109]}>
                    <mesh name="Object_36" geometry={nodes.Object_36.geometry} material={materials.Light_Gray_Plastic} />
                  </group>
                  <group name="Cylinder006_15" position={[0.389, 0.644, -1.141]} scale={[9.462, 3.881, 9.462]}>
                    <mesh name="Object_38" geometry={nodes.Object_38.geometry} material={materials.Dark_Grey_Plastic} />
                  </group>
                  <group name="Cylinder007_16" position={[-0.007, 0.346, 1.235]} scale={[3.109, 1, 3.109]}>
                    <mesh name="Object_40" geometry={nodes.Object_40.geometry} material={materials.Metal} />
                  </group>
                  <group name="Cylinder008_17" position={[-0.007, 0.346, 1.24]} scale={[3.109, 1, 3.109]}>
                    <mesh name="Object_42" geometry={nodes.Object_42.geometry} material={materials.Dark_Grey_Plastic} />
                  </group>
                  <group name="Cylinder_11" position={[-0.004, 0.346, 0.687]} scale={[3.109, 1, 3.109]}>
                    <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials.Metal} />
                  </group>
                  <mesh name="Object_26" geometry={nodes.Object_26.geometry} material={materials.White_Plastic} />
                  <mesh name="Object_27" geometry={nodes.Object_27.geometry} material={materials.Black} />
                  <mesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials.Light_Gray_Plastic} />
                </group>
                
                <group name="Cylinder010_20" position={[0.09, 1.234, 0.039]} rotation={[0, 0.698, -Math.PI / 2]}>
                  <group name="Cylinder011_19">
                    <mesh name="Object_47" geometry={nodes.Object_47.geometry} material={materials.Light_Gray_Plastic} />
                  </group>
                  <mesh name="Object_44" geometry={nodes.Object_44.geometry} material={materials['Glass_2.0']} />
                  <mesh name="Object_45" geometry={nodes.Object_45.geometry} material={materials.Metal} />
                </group>
                
              </group>
              
              <group name="Cube_8" position={[0, 0.003, 0]}>
                <group name="Cube001_0">
                  <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.White_Plastic} />
                  <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.Light_Gray_Plastic} />
                  <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.Metal} />
                </group>
                <group name="Cube002_1" position={[0.027, 0.489, 0.047]}>
                  <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.Dark_Grey_Plastic} />
                </group>
                <group name="Cube003_2" position={[0, 1.038, -0.044]} scale={0.066}>
                  <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.White_Plastic} />
                  <mesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.Black} />
                </group>
                <group name="Cube004_3" position={[0, 1.11, -0.017]} scale={0.066}>
                  <mesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.White_Plastic} />
                </group>
                <group name="Cube005_4">
                  <mesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials.Screen_Plastic} />
                </group>
                <group name="Cube006_5">
                  <mesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials.Screen_Plastic} />
                </group>
                <group name="Cylinder001_6" position={[0, 1.142, -0.05]} scale={0.016}>
                  <mesh name="Object_21" geometry={nodes.Object_21.geometry} material={materials.Metal} />
                </group>
                <group name="Cylinder009_7" position={[0, 0.591, -0.112]} scale={[0.5, 0.178, 0.5]}>
                  <mesh name="Object_23" geometry={nodes.Object_23.geometry} material={materials.Light_Gray_Plastic} />
                  <mesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials.Metal} />
                </group>
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.Light_Gray_Plastic} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/Dark Room/Stand_Fan.glb');
