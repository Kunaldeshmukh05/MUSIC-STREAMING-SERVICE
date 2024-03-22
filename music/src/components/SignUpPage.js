import React, { useState } from "react";
import "./SignUpPage.css";
import { Link } from "react-router-dom";
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
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        console.error("Server responded with an error:", error.response.data);
        // Display error message to the user
        alert(error.response.data.error);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from the server:", error.request);
        // Display a generic error message to the user
        alert("Error: No response received from the server");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
        // Display a generic error message to the user
        alert("Error: " + error.message);
      }
    }
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="kuna">
          <h1>Sign up to Beats</h1>
          <br />
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
            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

/* 
if(password !== confirmPassword){
  setError('Password do not match');
  return;
} 

try{
  const auth = getAuth();

  await createUserWithEmailAndPassword
}


import{useNavigate} from 'react-router-dom';


*/
