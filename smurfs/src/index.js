import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { SmurfProvider } from "./store/SmurfProvider";
import { SmurfContext } from "./contexts/SmurfContext";
import smurfs from "./reducers/smurfs";
import App from "./components/App";

ReactDOM.render(
  <SmurfProvider smurfReducer={smurfs} smurfContext={SmurfContext}>
    <App />
  </SmurfProvider>,
  document.getElementById("root")
);
