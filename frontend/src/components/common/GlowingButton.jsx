// src/components/common/GlowingButton.jsx
import React from 'react';
import styles from './GlowingButton.module.css';

const GlowingButton = ({ children, onClick, ariaLabel }) => {
  return (
    <button className={styles.glowingButton} onClick={onClick} aria-label={ariaLabel}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </button>
  );
};

export default GlowingButton;