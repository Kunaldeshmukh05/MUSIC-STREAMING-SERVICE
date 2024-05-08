import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebase";
import './LoginPage.css'

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const auth = getAuth(app);

  const signInUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Sign in success");
        // Redirect or perform other actions upon successful login
      })
      .catch((err) => {
        setError("Invalid email or password. Please try again.");
        console.error("Error signing in:", err.message);
      });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h3 className="login-title">SignIn</h3>
        <div className="login-input-field">
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-input-field">
          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-button" type="submit" onClick={signInUser}>
          Login
        </button>
        {error && <div className="login-error">{error}</div>}
        <br />

        <div className="login-checkbox-field">
          <input type="checkbox" id="login-remember-me" />
          <label htmlFor="login-remember-me">Remember me</label>
        </div>

        <div>
          <span className="login-new-user">New User?</span>
          <span>
            <Link to="/LoginPage/SignUpPage">SignIn</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
