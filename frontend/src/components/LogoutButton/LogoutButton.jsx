import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/slices/authSlice';
import axios from 'axios';
import styles from './LogoutButton.module.css';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/logout', {}, { withCredentials: true });
      dispatch(logoutUser()); // Clear the user state in Redux
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <button onClick={handleLogout} className={styles.logoutButton}>
      Logout
    </button>
  );
};

export default LogoutButton;