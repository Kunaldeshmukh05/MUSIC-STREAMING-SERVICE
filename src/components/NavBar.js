import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="main">
      <nav className="navbar navbar-fixed-top">
        <div className="navbar-container">
          <div className="nav-item">
            <FontAwesomeIcon icon={faHome} className="icon" />
          </div>
          <div className="nav-item search-container">
            <input type="text" placeholder="Search" className="search-input" />
            <FontAwesomeIcon icon={faSearch} className="icon" />
          </div>
          <div className="nav-item">
            <button className="login-btn">Login</button>
          </div>
          <div className="nav-item">
            <button className="signup-btn">Sign Up</button>
          </div>
        </div>
      </nav>
      <br></br>
      <br></br>
    </div>
  );
};

export default NavBar;
