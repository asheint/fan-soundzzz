import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Loader from "../components/Loader";
import Room from "../models/room";
import Sky from "../models/sky";
import TableFan from "../models/tableFan";

function Home() {
  const [isRotating, setIsRotating] = useState(false);

  const adjustRoomForScreenSize = () => {
    let screenScale = null;
    const screenPosition = [0, 0, 0];
    const roomRotation = [0.1, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return { screenScale, screenPosition, roomRotation };
  };

  const adjustTableFan = () => {
    let tableFanScale = [1, 1, 1];
    const tableFanPosition = [0, 0, 0];

    if (window.innerWidth < 768) {
      tableFanScale = [0.9, 0.9, 0.9];
    } else {
      tableFanScale = [3, 3, 3];
    }

    return { tableFanScale, tableFanPosition };
  };

  const { screenScale, screenPosition, roomRotation } =
    adjustRoomForScreenSize();

  const { tableFanScale, tableFanPosition } = adjustTableFan();

  return (
    <section className="w-full h-screen relative">
      {/* <div className="absolute top-28 left-0 right-0 z-10flex items-center justify-center">
        POPUP
      </div> */}

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={0} />
          <ambientLight intensity={2} />

          <Sky />
          <Room
            scale={screenScale}
            position={screenPosition}
            rotation={roomRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
          <TableFan
            isRotating={isRotating}
            scale={tableFanScale}
            position={tableFanPosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}
export default Home;
