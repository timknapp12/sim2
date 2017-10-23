import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';

ReactDOM.render(
  <HashRouter>
      <App />
  </HashRouter>,
  document.getElementById("root")
);
registerServiceWorker();
