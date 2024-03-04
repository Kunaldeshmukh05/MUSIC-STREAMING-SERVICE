import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <HomePage></HomePage>
        <div id="page-body">
          <Routes>
            <Route path="/" exact component={LoginPage} />
            <Route path="/SignUp" component={SignUpPage} />
            <Route path="/home" component={HomePage} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
