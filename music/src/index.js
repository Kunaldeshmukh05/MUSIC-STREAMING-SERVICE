import ReactDOM from "react-dom";
import React from "react";

import App from "./App.js"; // Import your App component
import "./index.css"; // Import the initialized Firebase app
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
