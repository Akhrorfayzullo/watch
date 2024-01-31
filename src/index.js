import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Stopwatch from "./watch/stopwatch";
import StopWatchch from "./watch2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Stopwatch />
    <StopWatchch />
  </React.StrictMode>
);
