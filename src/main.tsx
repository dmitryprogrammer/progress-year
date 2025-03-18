import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "@ant-design/v5-patch-for-react-19";
import {App} from "./components/app/app";
import "./assets/styles/index.scss";
import "./core/i18n";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
