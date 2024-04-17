import React, { useState } from "react";
import axios from "axios";
import "./SignUpPage.css"; // Import CSS file

function SignupUpPage() {
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
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <h3 className="signup-title">Signup Here</h3>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="signup-input"
            placeholder="Username"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="signup-input"
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="signup-input"
            placeholder="Password"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            value={formData.password}
            onChange={handleChange}
            className="signup-input"
            placeholder="Confirm Password"
            required
          />
          <input
            type="checkbox"
            name="rememberMe"
            className="signup-checkbox"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <label htmlFor="rememberMe" className="signup-label">
            <div>Remember me</div>
          </label>
          <div>
            <button className="signup-button" type="submit">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupUpPage;
