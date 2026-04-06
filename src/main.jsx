import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";

// Remove prerendered helmet tags before React mounts so react-helmet-async
// doesn't produce duplicate title / meta / canonical elements for JS crawlers.
document.querySelectorAll("[data-rh]").forEach((el) => el.remove());

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
