import ReactDOM from "react-dom";
import React from "react";
import firebase from "./components/Firebase-config.js";
import App from "./App.js"; // Import your App component
import "./index.css";
import firebaseApp from "./components/Firebase-config.js"; // Import the initialized Firebase app
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";
import { BrowserRouter } from "react-router-dom";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAuth } from "firebase/auth"; // Import Authentication

// Initialize Firestore and Authentication
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
