// src/pages/Login.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slices/authSlice"; // Import the login action
import { useNavigate } from "react-router-dom"; // For redirection
import "./login.css"; // Add CSS for styling

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(loginUser(formData))
      .unwrap()
      .then((response) => {
        alert(response.user.name + " logged in successfully");
        navigate("/dashboard"); // Redirect to dashboard after login
      })
      .catch((error) => {
        alert(error.message || "Something went wrong");
      });
  };

  return (
    <div className="login-box">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="glowing-button" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;