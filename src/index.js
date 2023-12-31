import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faGithub,
  faYoutube,
  fab,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faEnvelope,
  faFileText,
  faRocket,
  faCircleInfo,
  faCircleRight,
  faCircleLeft,
  faPen,
  faKiwiBird,
  faCloudSunRain,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter } from "react-router-dom";

library.add(
  fab,
  faHouse,
  faEnvelope,
  faFileText,
  faRocket,
  faCircleInfo,
  faCircleRight,
  faCircleLeft,
  faPen,
  faKiwiBird,
  faCloudSunRain,
  faGithub,
  faLinkedin,
  faYoutube
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
