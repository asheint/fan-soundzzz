import "./App.scss";
import { useEffect } from "react";
// import RoomToggleButton from "./components/Buttons/RoomToggleButton/RoomToggleButton";
import Experience from "./Experience/Experience";

import { useResponsiveStore } from "./stores/useResponsiveStore";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import Menu from "./components/Menu/Menu";
import Router from "./routes/Router";
import Overlay from "./components/Overlay/Overlay";
import Logo from "./components/Logo/Logo";
import SoundToggle from "./components/SoundToggle/SoundToggle";
import FeedbackButton from "./components/FeedbackButton/FeedbackButton";
// import CookieConsent from "./components/CookieConsent/CookieConsent";

function App() {
  const { updateDimensions } = useResponsiveStore();

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <>
      <Menu />
      <Logo />
      <LoadingPage />
      <SoundToggle />
      <FeedbackButton />
      {/* <RoomToggleButton /> */}
      <Overlay />
      <Router />
      <Experience />
      {/* <CookieConsent /> */}
    </>
  );
}

export default App;
