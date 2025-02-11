// src/pages/Signup.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../redux/slices/authSlice"; // Import the signup action
import "./signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    dispatch(signupUser(formData))
      .unwrap()
      .then((response) => {
        alert(response.message); // Show success message
        // Optionally, redirect to login page
      })
      .catch((error) => {
        alert(error.message || "Something went wrong"); // Show error message
      });
  };

  return (
    <div className="login-box">
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label>Password</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <label>Confirm Password</label>
        </div>
        <button type="submit" className="glowing-button" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default Signup;