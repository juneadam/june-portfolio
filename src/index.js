import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MobileApp from "./MobileApp";
// import reportWebVitals from "./reportWebVitals";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub, fab } from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faEnvelope,
  faFileText,
  faRocket,
  faCircleInfo
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter } from "react-router-dom";

library.add(
  fab,
  faHouse,
  faEnvelope,
  faFileText,
  faRocket,
  faCircleInfo,
  faGithub,
  faLinkedin
);

const root = ReactDOM.createRoot(document.getElementById("root"));

window.screen.width >= 769 && !(window.screen.width > 2 * window.screen.height)
  ? root.render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    )
  : root.render(
      <React.StrictMode>
        <BrowserRouter>
          <MobileApp />
        </BrowserRouter>
      </React.StrictMode>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
