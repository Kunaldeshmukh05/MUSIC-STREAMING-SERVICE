import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import app from "./firebase";
import Land from "./Land";
import './LoginPage.css'

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const auth = getAuth(app);
  const navigate = useNavigate();

  const signInUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Sign in success");
        setTimeout(() => {
          navigate('/home'); // Replace with your target route
        }, 2000); // Delay for the toast notification to show
      })
      .catch((err) => {
        setError("Invalid email or password. Please try again.");
        console.error("Error signing in:", err.message);
      });
  };

  return (
    <>
      <Land />
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
            SignIn
          </button>
          {error && <div className="login-error">{error}</div>}
          <br />
          <div>
            <span className="login-new-user">New User?</span>
            <span className="S">
              <Link to="/LoginPage/SignUpPage">SignUp</Link>
            </span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default LoginPage;
