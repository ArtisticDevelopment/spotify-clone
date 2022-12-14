import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ContextLayer } from "./ContextLayer";
import reducer, { initialState } from "./reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextLayer initialState={initialState} reducer={reducer}>
      <App />
    </ContextLayer>
  </React.StrictMode>
);
