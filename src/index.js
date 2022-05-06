import React from "react";
import App from "App/App";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { LoadingProvider } from "context/loading-context";

ReactDOM.render(
  <LoadingProvider>
    <App />
  </LoadingProvider>,
  document.getElementById("root")
);
reportWebVitals();
