import { Suspense, useRef, useEffect } from "react";
import * as THREE from "three";

import DarkRoomFirst from "./models/dark/Dark_First";
import DarkRoomSecond from "./models/dark/Dark_Second";
import DarkRoomThird from "./models/dark/Dark_Third";
import DarkRoomFourth from "./models/dark/Dark_Fourth";
import LightRoomFirst from "./models/light/Light_First";
import LightRoomSecond from "./models/light/Light_Second";
import LightRoomThird from "./models/light/Light_Third";
import LightRoomFourth from "./models/light/Light_Fourth";
import DarkTargets from "./models/dark/Dark_Targets";
import LightTargets from "./models/light/Light_Targets";
import GridPlanes from "./components/GridPlanes";
import StandFan from "./models/dark/Stand_Fan";
import { useToggleRoomStore } from "../stores/toggleRoomStore";

import gsap from "gsap";

import { useFrame } from "@react-three/fiber";

const Scene = ({ pointerRef }) => {
  const darkGroupRef = useRef();
  const lightGroupRef = useRef();
  const gridPlanesRef = useRef();
  const darkRoomGroupPosition = new THREE.Vector3(0, 0, 0);
  const lightRoomGroupPosition = new THREE.Vector3(24.79, 0, 0.173);
  const groupRotationRef = useRef(0);
  const { isDarkRoom } = useToggleRoomStore();

  useEffect(() => {
    if (!gridPlanesRef.current) return;

    const targetPosition = isDarkRoom
      ? darkRoomGroupPosition
      : lightRoomGroupPosition;

    gsap.to(gridPlanesRef.current.position, {
      x: targetPosition.x,
      y: targetPosition.y,
      z: targetPosition.z,
      delay: 1,
    });
  }, [isDarkRoom]);

  useFrame(() => {
    if (
      !darkGroupRef.current ||
      !lightGroupRef.current ||
      !gridPlanesRef.current
    )
      return;

    const targetRotation = pointerRef.current.x * Math.PI * 0.032;

    groupRotationRef.current = THREE.MathUtils.lerp(
      groupRotationRef.current,
      targetRotation,
      0.1
    );

    darkGroupRef.current.rotation.y = groupRotationRef.current;
    lightGroupRef.current.rotation.y = groupRotationRef.current;
    gridPlanesRef.current.rotation.y = groupRotationRef.current;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense>
        <group ref={darkGroupRef}>
          <DarkRoomFirst />
          <DarkRoomSecond />
          <DarkRoomThird />
          <DarkRoomFourth />
          <DarkTargets />
          <StandFan />
        </group>

        <group ref={lightGroupRef} position={lightRoomGroupPosition}>
          <LightRoomFirst
            position={[
              -lightRoomGroupPosition.x,
              -lightRoomGroupPosition.y,
              -lightRoomGroupPosition.z,
            ]}
          />
          <LightRoomSecond
            position={[
              -lightRoomGroupPosition.x,
              -lightRoomGroupPosition.y,
              -lightRoomGroupPosition.z,
            ]}
          />
          <LightRoomThird
            position={[
              -lightRoomGroupPosition.x,
              -lightRoomGroupPosition.y,
              -lightRoomGroupPosition.z,
            ]}
          />
          <LightRoomFourth
            position={[
              -lightRoomGroupPosition.x,
              -lightRoomGroupPosition.y,
              -lightRoomGroupPosition.z,
            ]}
          />
          <LightTargets
            position={[
              -lightRoomGroupPosition.x,
              -lightRoomGroupPosition.y,
              -lightRoomGroupPosition.z,
            ]}
          />
        </group>
        <GridPlanes
          position={
            isDarkRoom
              ? [
                  darkRoomGroupPosition.x,
                  darkRoomGroupPosition.y,
                  darkRoomGroupPosition.z,
                ]
              : [
                  lightRoomGroupPosition.x,
                  lightRoomGroupPosition.y,
                  lightRoomGroupPosition.z,
                ]
          }
          ref={gridPlanesRef}
          rows={10}
          columns={10}
          planeWidth={3}
          planeDepth={3}
          spacing={0}
        />
      </Suspense>
    </>
  );
};

export default Scene;
