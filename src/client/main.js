import "@babel/polyfill";
require("webpack-hot-middleware/client");
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
ReactDOM.render(<App />, document.getElementById("react-pwa"));

if (module.hot) {
  module.hot.accept();
}
