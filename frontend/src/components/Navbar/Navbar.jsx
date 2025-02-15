import React from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import LogoutButton from '../LogoutButton/LogoutButton';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Link to="/">
          <button id={styles.Home}>Home</button>
        </Link>
      </div>
      <div className={styles.navbarRight}>
        <ThemeSwitcher />
        <LogoutButton />
      </div>
    </nav>
  );
}

export default Navbar;