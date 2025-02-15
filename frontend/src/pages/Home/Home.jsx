// src/pages/Home/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import GlowingButton from '../../components/common/GlowingButton';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
    <div className={styles.loginBox}>
      <h2>Welcome to Home Page</h2>

      <Link to="/login">
        <GlowingButton ariaLabel="Login">Login</GlowingButton>
      </Link>

      <br />
      <br />
      <br />

      <Link to="/signup">
        <GlowingButton ariaLabel="Signup">Signup</GlowingButton>
      </Link>
    </div>
    </div>
  );
}

export default Home;