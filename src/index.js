import React from "react";
import ReactDOM from "react-dom";

import Counters from "./Counters";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Counters/>
  </React.StrictMode>,
  rootElement
);
