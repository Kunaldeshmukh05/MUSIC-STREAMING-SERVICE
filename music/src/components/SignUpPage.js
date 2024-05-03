import React from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import "./SignUpPage.css"; // Import CSS file
import app from "./firebase";
import { useState } from "react";
const auth = getAuth(app);

function SignupUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkbox, setCheckbox] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(
      auth,
      email,
      username,
      password,
      confirmPassword,
      checkbox
    ).then((value) => alert("SignUp Successful"));
  };

  return (
    <>
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
            type="confirmPassword"
            value={confirmPassword}
            className="signup-input"
            placeholder="Confirm Password"
            required
          />
          <input
            onChange={(e) => setCheckbox(e.target.value)}
            type="checkbox"
            value={checkbox}
            name="rememberMe"
            className="signup-checkbox"
          />
          <label htmlFor="rememberMe" className="signup-label">
            <div>Remember me</div>
          </label>
          <div>
            <button
              onClick={createUser}
              className="signup-button"
              type="submit"
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupUpPage;

/* 
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send signup data to backend
      await axios.post("http://localhost:3000/signup", formData);
      alert("Signup successful!");
    } catch (error) {
      alert("Signup failed. Please try again.");
    }
  };*/
