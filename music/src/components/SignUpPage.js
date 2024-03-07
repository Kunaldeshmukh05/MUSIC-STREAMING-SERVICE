import React from "react";
import "./SignUpPage.css";
import { Link } from "react-router-dom";
const SignUpPage = () => {
  return (
    <div>
      <div class="container">
        <div class="kuna">
          <h1>Sign up to Beats</h1>
          <br />
          <form action="#">
            <div class="input-field">
              <label for="email">Enter Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div class="input-field">
              <label for="name">Enter Your Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div class="input-field">
              <label for="phone">Enter Mobile No</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div class="input-field">
              <label for="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <div class="input-field">
              <label for="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
              />
            </div>
            <div class="checkbox-field">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <button type="submit" class="signup-btn">
              <Link to="/home">Sign Up</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
