import React, { Component } from "react";
import ReactDOM from "react-dom";

import Container from "./components/container";

import "./styl/base.styl";

ReactDOM.render(<Container />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept("./components/container.js", () => {
    console.log("Accepting contianer js");
  });
}
