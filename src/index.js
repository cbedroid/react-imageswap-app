import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import TitleBanner from "./components/titleBanner.jsx";
import ImageWidget from "./components/imageWidget.jsx";

ReactDOM.render(
  <React.StrictMode>
    <div className="counter-widget" style={{ padding: "20px 75px" }}>
      <TitleBanner />
      <ImageWidget />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
