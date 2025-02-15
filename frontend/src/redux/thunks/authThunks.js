import { createAsyncThunk } from '@reduxjs/toolkit';
import { signup, login, checkAuth as checkAuthApi, logout } from '../../api/authApi'; // Import centralized API calls

// Async thunk for signup
export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await signup(userData); // Use centralized signup API
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async thunk for login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await login(userData); // Use centralized login API
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async thunk to check authentication
export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, { rejectWithValue }) => {
    try {
      const response = await checkAuthApi(); // Use centralized checkAuth API
      return response.user; // Return the user data
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: 'Authentication check failed' });
    }
  }
);

// Async thunk for logout
export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await logout(); // Use centralized logout API
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: 'Logout failed' });
    }
  }
);