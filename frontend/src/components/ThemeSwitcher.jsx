// src/components/ThemeSwitcher.jsx
import React from "react";
import { useTheme } from "../context/ThemeProvider";
import "./ThemeSwitcher.css";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const ThemeSwitcher = () => {
  const { setTheme } = useTheme();

  return (
    <nav className="theme-switcher">
      {/* button for home page */}
      <Link to="/">
            <button id="Home">Home</button>
        </Link>
      <button onClick={() => setTheme("green")}>🌿 Green</button>
      <button onClick={() => setTheme("blue")}>🌀 Blue</button>
      <button onClick={() => setTheme("red")}>🔴 Red</button>
      <button onClick={() => setTheme("yellow")}>🌕 Yellow</button>
      <button onClick={() => setTheme("indian_flag")}>🚩 Indian Flag</button>
        <LogoutButton />
    </nav>
  );
};

export default ThemeSwitcher;