import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/thunks/authThunks";
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
        navigate("/add-expense");
      })
      .catch((error) => {
        alert(error.message || "Something went wrong");
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.buttonContainer}>
            <GlowingButton type="submit" disabled={loading} ariaLabel="Login">
              {/* {loading ? "Loading..." : "Login"} */}
              Login
            </GlowingButton>
          </div>
          {error && <p className={styles.errorMessage}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;