import { useGLTF } from "@react-three/drei";
import skyScene from "../assets/3d/night_sky_visible_spectrum_monochromatic.glb";

function Sky() {
  const sky = useGLTF(skyScene);

  return (
    <mesh>
      <primitive object={sky.scene} />
    </mesh>
  );
}
export default Sky;
