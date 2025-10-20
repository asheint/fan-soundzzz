import HomePage from "../pages/HomePage/HomePage";
import TransitionComponent from "../components/Transition";
import AboutPage from "../pages/AboutPage/AboutPage";
import FanModelsPage from "../pages/FanModelsPage/FanModelsPage";
import SupportUsPage from "../pages/SupportUsPage/SupportUsPage";
import FeedbackPage from "../pages/FeedbackPage/FeedbackPage";
import { Route, Routes } from "react-router";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import StandFanControlsPage from "../pages/StandFanControlsPage/StandFanControlsPage";

const Router = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <TransitionComponent>
            <HomePage />
          </TransitionComponent>
        }
      />
      <Route
        path="about"
        element={
          <TransitionComponent>
            <AboutPage />
          </TransitionComponent>
        }
      />
      <Route
        path="fan-models"
        element={
          <TransitionComponent>
            <FanModelsPage />
          </TransitionComponent>
        }
      />
      <Route
        path="stand-fan-controls"
        element={
          <TransitionComponent>
            <StandFanControlsPage />
          </TransitionComponent>
        }
      />
      <Route
        path="support-us"
        element={
          <TransitionComponent>
            <SupportUsPage />
          </TransitionComponent>
        }
      />
      <Route
        path="feedback"
        element={
          <TransitionComponent>
            <FeedbackPage />
          </TransitionComponent>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
