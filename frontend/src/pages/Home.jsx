import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <>
      {/* Login and Signup buttons with links and CSS */}
      <div className="login-box">
        <h2>Welcome to Home Page</h2>

        <Link to="/login">
          <button className="glowing-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </button>
        </Link>

        <br />
        <br />
        <br />

        <Link to="/signup">
          <button className="glowing-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Signup
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;
