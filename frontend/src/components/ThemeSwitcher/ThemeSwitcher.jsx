import React from 'react';
import { useTheme } from '../../context/ThemeProvider';
import styles from './ThemeSwitcher.module.css';
import { Link } from 'react-router-dom';

const ThemeSwitcher = () => {
  const { setTheme } = useTheme();

  return (
    <nav className={styles.themeSwitcher}>
      <button onClick={() => setTheme('green')} className={styles.green}>🌿 Green</button>
      <button onClick={() => setTheme('blue')} className={styles.blue}>🌀 Blue</button>
      <button onClick={() => setTheme('red')} className={styles.red}>🔴 Red</button>
      <button onClick={() => setTheme('yellow')} className={styles.yellow}>🌕 Yellow</button>
      <button onClick={() => setTheme('indian_flag')} className={styles.ind}>🚩 Indian Flag</button>
    </nav>
  );
};

export default ThemeSwitcher;