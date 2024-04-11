
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
    <div className="wrap">
      <div className="suc">
        <form onSubmit={handleSubmit}>
          <h3>Signup Here</h3>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            value={formData.password}
            onChange={handleChange}
            placeholder="ConfirmPassword"
            required
          />
          <input
            type="checkbox"
            placeholder="remember me"
            name="remember me "
            checked={formData.rememberMe}
            value={formData.checked}
          />
          <label htmlFor="remember-me">Remember me</label>
          <button className="special" type="submit">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupUpPage;
















