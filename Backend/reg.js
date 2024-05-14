import React, { useState } from 'react';
import './RegistrationPage.css'; 
import axios from "axios";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    collegeName: '',
    education: '',
    passoutYear: '',
    dob: '',
    state: '',
    courses: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/register", formData);
      alert("Registration is successful. Stay tuned for updates.");
    } catch (error) {
      console.error("Registration failed. Please try again later.", error);
      alert("Registration failed. Please try again later.");
    }
  };

  const states = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi',
    'Lakshadweep',
    'Puducherry',
  ];

  const courses = ['Full Stack Development', 'Frontend Development', 'Basic Programming Language'];

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input type="text" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="collegeName">College Name:</label>
          <input type="text" id="collegeName" name="collegeName" value={formData.collegeName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="education">Education:</label>
          <input type="text" id="education" name="education" value={formData.education} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="passoutYear">Passout Year:</label>
          <input type="text" id="passoutYear" name="passoutYear" value={formData.passoutYear} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <select id="state" name="state" value={formData.state} onChange={handleChange}>
            <option value="">Select State</option>
            {states.map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="courses">Courses:</label>
          <select id="courses" name="courses" value={formData.courses} onChange={handleChange}>
            <option value="">Select Course</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>{course}</option>
            ))}
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
