import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.css";
import SwitchDemo from "./navigation";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <SwitchDemo />
  </Router>,
  rootElement
);
