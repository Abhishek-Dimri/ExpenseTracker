import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/slices/authSlice';
import { logout } from '../../api/authApi'; // Import the centralized logout API
import styles from './LogoutButton.module.css';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await logout(); // Use the centralized logout API
      dispatch(logoutUser()); // Clear the user state in Redux
    } catch (error) {
      console.error('Logout failed:', error.message || error);
    }
  };

  return (
    <button onClick={handleLogout} className={styles.logoutButton}>
      Logout
    </button>
  );
};

export default LogoutButton;