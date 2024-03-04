import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
const LoginPage = () => {
  return (
    <div className="container">
      <div className="kuna">
        <h1>Login</h1>
        <div className="input-field">
          <label htmlFor="email">Enter Email or Phone No</label>
          <input type="text" id="email" name="email" />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="checkbox-field">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="signup-btn">
          Login
        </button>
        <br></br>
        <p className="new-user">
          New User? <Link to="/SignUp">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
