import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import App from "./components/App";
import "./css/app.css";

ReactDOM.render(
  <>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-9 col-lg-9">
          <App />
        </div>
      </div>
    </div>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
