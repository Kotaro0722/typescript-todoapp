import React from "react";
import ReactDOM from "react-dom";
import AlertManager from "./components/Organisms/AlertManager";
import MainPage from "./components/Pages/MainPage";
import { AlertHandlerProvider } from "./contexts/alert_handler";
import "./index.css";

ReactDOM.render(
  <AlertHandlerProvider>
    <AlertManager />
    <MainPage />
  </AlertHandlerProvider>,
  document.getElementById("app")
);
