// src/pages/Login/Login.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import GlowingButton from "../../components/common/GlowingButton";
import styles from "./Login.module.css";

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
        navigate("/dashboard");
      })
      .catch((error) => {
        alert(error.message || "Something went wrong");
      });
  };

  return (
    <div className={styles.loginBox}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.userBox}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Email</label>
        </div>
        <div className={styles.userBox}>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label>Password</label>
        </div>
        <GlowingButton type="submit" disabled={loading} ariaLabel="Login">
          {loading ? "Loading..." : "Login"}
        </GlowingButton>
        {error && <p className={styles.errorMessage}>{error==="No token provided"?"":error}</p>}
      </form>
    </div>
  );
};

export default Login;