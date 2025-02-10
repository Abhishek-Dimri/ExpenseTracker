// src/context/ThemeProvider.jsx
import React, { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("green"); // default theme
  
  const themes = {
    green: {
      "--primary-bg": "linear-gradient(#141e30, #2a6c56)",
      "--accent-color": "#03f484",
      "--box-shadow": "0 0 5px #03f484, 0 0 25px #03f484, 0 0 50px #03f484, 0 0 100px #03f484"
    },
    blue: {
      "--primary-bg": "linear-gradient( #0f0c29,rgb(66, 208, 255))",
      "--accent-color": "#00ffff",
      "--box-shadow": "0 0 5px #00ffff, 0 0 25px #00ffff, 0 0 50px #00ffff, 0 0 100px #00ffff"
    },
    red: {
      "--primary-bg": "linear-gradient( #2a0a0a,rgb(224, 30, 30))",
      "--accent-color": "#ff4444",
      "--box-shadow": "0 0 5px #ff4444, 0 0 25px #ff4444, 0 0 50px #ff4444, 0 0 100px #ff4444"
    },
    yellow: {
      "--primary-bg": "linear-gradient( #e65c00, #f9d423)",
      "--accent-color": " #ffbb33",
      "--box-shadow": "0 0 5px #ffbb33, 0 0 25px #ffbb33  , 0 0 50px #ffbb33, 0 0 100px #ffbb33"
    },
    indian_flag: {
      "--primary-bg": "linear-gradient( #e65c00, #ffffff, #138808)",
      "--accent-color": " #fff",
      "--box-shadow": "0 0 5px #fff, 0 0 25px #fff  , 0 0 50px #fff, 0 0 100px #fff"
    }
  };

  useEffect(() => {
    // Apply theme variables to root element
    const root = document.documentElement;
    const themeVariables = themes[theme];
    
    Object.entries(themeVariables).forEach(([variable, value]) => {
      root.style.setProperty(variable, value);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);