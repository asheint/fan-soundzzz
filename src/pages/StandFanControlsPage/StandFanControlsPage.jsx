import { Helmet } from "react-helmet-async";
import Page from "../Page";
import FanController from "../../components/FanController/FanController";
import { useStandFanStore } from "../../stores/useStandFanStore";

const StandFanControlsPage = () => {
  const { isRunning, speed, isOscillating, startFan, stopFan, setSpeed, toggleOscillation } = useStandFanStore();

  return (
    <>
      <Helmet>
        <title>Stand Fan Controls | Online Fan Sound Machine | Fan SoundZzz</title>
        <meta name="description" content="Control your virtual stand fan online. Adjust speed and oscillation for the perfect white noise. Free fan sounds for sleep on Fan SoundZzz." />
        <link rel="canonical" href="https://fansoundzzz.com/stand-fan-controls" />
        <meta property="og:url" content="https://fansoundzzz.com/stand-fan-controls" />
        <meta property="og:title" content="Stand Fan Controls | Online Fan Sound Machine | Fan SoundZzz" />
        <meta property="og:description" content="Control your virtual stand fan online. Adjust speed and oscillation for the perfect white noise. Free fan sounds for sleep on Fan SoundZzz." />
      </Helmet>
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
    </>
  );
};

export default StandFanControlsPage;
