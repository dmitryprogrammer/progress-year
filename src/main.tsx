import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {App} from "./components/app/app";
import "./assets/styles/index.scss";
import "./core/i18n";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
