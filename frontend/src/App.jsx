import {React , useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ThemeSwitcher from './components/ThemeSwitcher';
import ProtectedRoute from './components/ProtectedRoute';
import { checkAuth } from './redux/slices/authSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Dispatching checkAuth..."); // Debugging
    dispatch(checkAuth()); // Check authentication on app load
  }, [dispatch]);

  return (
    <Router>
      <ThemeSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
