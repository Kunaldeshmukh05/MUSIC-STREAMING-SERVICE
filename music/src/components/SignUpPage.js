import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./SignUpPage.css";
import app from "./firebase";
import Land from './Land';

const auth = getAuth(app);

function SignupUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const createUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
        toast.success("SignUp Successful");
        setTimeout(() => {
          navigate('/home'); // Replace with your target route
        }, 2000); // Delay for the toast notification to show
      })
      .catch((error) => {
        toast.error("SignUp Failed: " + error.message);
      });
  };

  return (
    <>
      <Land />
      <div className="signup-container">
        <div className="signup-form">
          <h3 className="signup-title">Signup Here</h3>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            className="signup-input"
            required
            placeholder="Enter your Email"
          />
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            value={username}
            name="username"
            className="signup-input"
            placeholder="Username"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
            className="signup-input"
            placeholder="Password"
            required
          />
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            value={confirmPassword}
            className="signup-input"
            placeholder="Confirm Password"
            required
          />
          <div>
            <button
              onClick={createUser}
              className="signup-butto"
              type="submit"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default SignupUpPage;
