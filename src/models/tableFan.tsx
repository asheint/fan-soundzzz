import tableFan from "../assets/3d/old_table_fan.glb";
import { useGLTF } from "@react-three/drei";

const TableFan = ({ isRotating, ...props }) => {
  const { scene, animations } = useGLTF(tableFan);
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};
export default TableFan;
