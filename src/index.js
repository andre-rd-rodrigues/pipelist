import React from "react";
import App from "App/App";
import { LoadingProvider } from "context/loading-context";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

ReactDOM.render(
  <LoadingProvider>
    <App />
  </LoadingProvider>,
  document.getElementById("root")
);
reportWebVitals();
