import HomePage from "../pages/HomePage/HomePage";
import TransitionComponent from "../components/Transition";
import AboutPage from "../pages/AboutPage/AboutPage";
import FanModelsPage from "../pages/FanModelsPage/FanModelsPage";
import SupportUsPage from "../pages/SupportUsPage/SupportUsPage";
import { Route, Routes } from "react-router";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

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
        path="support-us"
        element={
          <TransitionComponent>
            <SupportUsPage />
          </TransitionComponent>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
