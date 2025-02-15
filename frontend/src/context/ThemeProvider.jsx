import React, { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("green"); // default theme

  const themes = {
    green: {
      "--primary-bg": "linear-gradient(#141e30, #2a6c56)",
      "--accent-color": "#03f484",
      "--box-shadow": "0 0 5px #03f484, 0 0 25px #03f484, 0 0 50px #03f484, 0 0 100px #03f484",
      "--text-color": "#ffffff",
      "--button-bg": "#03f484",
      "--button-text": "#141e30",
      "--card-bg": "rgba(3, 244, 132, 0.1)",
      "--border-color": "rgba(3, 244, 132, 0.3)",
    },
    blue: {
      "--primary-bg": "linear-gradient(#0f0c29, rgb(66, 208, 255))",
      "--accent-color": "#00ffff",
      "--box-shadow": "0 0 5px #00ffff, 0 0 25px #00ffff, 0 0 50px #00ffff, 0 0 100px #00ffff",
      "--text-color": "#ffffff",
      "--button-bg": "#00ffff",
      "--button-text": "#0f0c29",
      "--card-bg": "rgba(0, 255, 255, 0.1)",
      "--border-color": "rgba(0, 255, 255, 0.3)",
    },
    red: {
      "--primary-bg": "linear-gradient(#2a0a0a, rgb(224, 30, 30))",
      "--accent-color": "#ff4444",
      "--box-shadow": "0 0 5px #ff4444, 0 0 25px #ff4444, 0 0 50px #ff4444, 0 0 100px #ff4444",
      "--text-color": "#ffffff",
      "--button-bg": "#ff4444",
      "--button-text": "#2a0a0a",
      "--card-bg": "rgba(255, 68, 68, 0.1)",
      "--border-color": "rgba(255, 68, 68, 0.3)",
    },
    yellow: {
      "--primary-bg": "linear-gradient(#e65c00, #f9d423)",
      "--accent-color": "#ffbb33",
      "--box-shadow": "0 0 5px #ffbb33, 0 0 25px #ffbb33, 0 0 50px #ffbb33, 0 0 100px #ffbb33",
      "--text-color": "#000000",
      "--button-bg": "#ffbb33",
      "--button-text": "#000000",
      "--card-bg": "rgba(255, 187, 51, 0.1)",
      "--border-color": "rgba(255, 187, 51, 0.3)",
    },
    indian_flag: {
      "--primary-bg": "linear-gradient(#e65c00, #ffffff, #138808)",
      "--accent-color": "rgb(255, 126, 40)",
      "--box-shadow": "0 0 5px #fff, 0 0 25px #fff, 0 0 50px #fff, 0 0 100px #fff",
      "--text-color": "#000000",
      "--button-bg": "rgb(255, 126, 40)",
      "--button-text": "#000000",
      "--card-bg": "rgba(255, 126, 40, 0.1)",
      "--border-color": "rgba(255, 126, 40, 0.3)",
    },
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