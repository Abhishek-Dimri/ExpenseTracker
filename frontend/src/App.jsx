import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import ThemeSwitcher from './components/ThemeSwitcher';
function App() {

  return (
    <Router>
      <ThemeSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App;
