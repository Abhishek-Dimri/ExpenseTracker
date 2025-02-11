// src/api/authApi.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Base URL for auth endpoints

// Signup API call
export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData, {
      withCredentials: true, // Ensure cookies are sent with the request
    });
    return response.data; // Return the response data (e.g., success message or user data)
  } catch (error) {
    // Throw a consistent error object
    throw {
      message: error.response?.data?.message || "Signup failed",
      error: error.response?.data || error.message,
    };
  }
};

// Login API call
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData, {
      withCredentials: true, // Ensure cookies are sent with the request
    });
    return response.data;
  } catch (error) {
    // Throw a consistent error object
    throw {
      message: error.response?.data?.message || "Login failed",
      error: error.response?.data || error.message,
    };
  }
};

// Check authentication status
export const checkAuth = async () => {
  try {
    const response = await axios.get(`${API_URL}/check-auth`, {
      withCredentials: true, // Ensure cookies are sent with the request
    });
    return response.data;
  } catch (error) {
    // Throw a consistent error object
    throw {
      message: error.response?.data?.message || "Authentication check failed",
      error: error.response?.data || error.message,
    };
  }
};