import Page from "../Page";
import FanController from "../../components/FanController/FanController";
import { useStandFanStore } from "../../stores/useStandFanStore";

const StandFanControlsPage = () => {
  const { isRunning, speed, isOscillating, startFan, stopFan, setSpeed, toggleOscillation } = useStandFanStore();

  return (
    <Page requireDarkRoom={true} customContent={true}>
      <FanController
        title="Stand Fan Controls"
        isRunning={isRunning}
        speed={speed}
        isOscillating={isOscillating}
        startFan={startFan}
        stopFan={stopFan}
        setSpeed={setSpeed}
        toggleOscillation={toggleOscillation}
        showSpeedControl={true}
        showOscillationControl={true}
      />
    </Page>
  );
};

export default StandFanControlsPage;
