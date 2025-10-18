import React, { useRef } from "react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
import { convertMaterialsToBasic } from "../../utils/convertToBasic";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/Light Room/Light_First.glb");
  const newMaterials = convertMaterialsToBasic(materials);

  const desktopScreenRef = useRef();
  const iPhoneScreenRef = useRef();

  const videoTexture = useVideoTexture("/videos/designwork.mp4", {
    crossOrigin: "anonymous",
    muted: true,
    loop: true,
    playsInline: true,
    start: true,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={iPhoneScreenRef}
        geometry={nodes.iPhone_Screen.geometry}
        position={[23.994, 0.734, -1.338]}
        rotation={[0, -1.193, Math.PI / 2]}
      >
        <meshBasicMaterial
          map={videoTexture}
          color="#f6f6f6"
          toneMapped={false}
        />
      </mesh>
      <mesh
        ref={desktopScreenRef}
        geometry={nodes.Desktop_Screen.geometry}
        position={[24.377, 0.968, -1.548]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial
          map={videoTexture}
          color="#f6f6f6"
          toneMapped={false}
        />
      </mesh>
      <mesh
        geometry={nodes.Light_First_Baked.geometry}
        material={newMaterials.REAL_first_Baked}
        position={[23.66, 1.452, -1.692]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/Light Room/Light_First.glb");
