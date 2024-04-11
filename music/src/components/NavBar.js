import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

const NavBar = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the handleSearch function passed from parent component
    handleSearch(searchQuery);
  };

  return (
    <div className="main">
      <nav className="navbar navbar-fixed-top">
        <div className="navbar-container">
          <div className="nav-home">
            <FontAwesomeIcon icon={faHome} className="icon" />
          </div>
          <div className="Log-img"></div>
          <div className="Log-im"></div>
          <div className="nav-item search-container">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Search"
                className="search-input"
              />
              <button type="submit" className="search-btn">
                <FontAwesomeIcon icon={faSearch} className="icon" />
              </button>
            </form>
          </div>
          <div className="nav-item">
            <button className="login-btn">
              <nav className="Login">
                <Link to="/LoginPage">Login</Link>
              </nav>
            </button>
          </div>

          <div className="nav-item">
            <button className="signup-btn">
              <nav className="Sign">
                <Link to="/SignUpPage">SignUp</Link>
              </nav>
            </button>
          </div>
          <div className="nav-profile">
            <button className="profile-btn">
              <nav className="Profile">
                <Link to="/profile">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </nav>
            </button>
          </div>
        </div>
      </nav>
      <br />
      <br />
    </div>
  );
};

export default NavBar;



