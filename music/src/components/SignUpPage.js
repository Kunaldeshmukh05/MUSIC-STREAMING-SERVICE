import React from "react";
import { useState } from "react";
import "./SignUpPage.css";
import axios from "axios";

const SignUpPage = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  });

  // Function to handle form input change
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      // Send POST request to the backend endpoint
      const response = await axios.post("/signup", formData);

      // Handle successful response
      console.log(response.data); // This will contain the response from the backend
      // You can perform further actions here based on the response

      // Example: Display a success message to the user
      alert("User signed up successfully!");
    } catch (error) {
      // Handle errors
      console.error("Error signing up user:", error);
      // Display error message to the user
      alert("Error: " + error.message);
    }
  };

  return (
    <div>
      {" "}
      <div className="container">
        <div className="kuna">
          <br />
          <h3>Sign Up Here</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="email">Enter Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="name">Enter Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="phone">Enter Mobile No</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="checkbox-field">
              <input
                type="checkbox"
                id="remember-me"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="signup">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
