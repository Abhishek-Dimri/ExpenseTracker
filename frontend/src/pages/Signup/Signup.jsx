// src/pages/Signup/Signup.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../redux/thunks/authThunks";
import GlowingButton from "../../components/common/GlowingButton";
import styles from "./Signup.module.css";

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
        alert(response.message);
      })
      .catch((error) => {
        alert(error.message || "Something went wrong");
      });
  };

  return (
    <div className={styles.loginBox}>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.userBox}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Username</label>
        </div>
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
        <div className={styles.userBox}>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <label>Confirm Password</label>
        </div>
        <GlowingButton type="submit" disabled={loading} ariaLabel="Signup">
          {loading ? "Loading..." : "Signup"}
        </GlowingButton>
        {/* {error && <p className={styles.errorMessage}>{error==="No token provided"?"":error}</p>} */}
      </form>
    </div>
  );
};

export default Signup;