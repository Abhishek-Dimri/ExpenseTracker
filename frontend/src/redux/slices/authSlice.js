// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signup, login } from "../../api/authApi"; // Import both signup and login functions
import axios from "axios";

// Async thunk for signup
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await signup(userData);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async thunk for login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await login(userData);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async thunk to check authentication
export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, { rejectWithValue }) => {
    try {
      console.log("Sending checkAuth request..."); // Debugging
      const response = await axios.get("http://localhost:5000/api/auth/check-auth", {
        withCredentials: true, // Send cookies with the request
      });
      console.log("checkAuth response:", response.data); // Debugging
      return response.data.user; // Return the user data
    } catch (error) {
      console.log("checkAuth error:", error.response?.data || error.message); // Debugging
      return rejectWithValue(error.response?.data || { message: 'An error occurred' });
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: true,
    error: null,
  },
  reducers: {
    // Add a logout reducer
    logoutUser: (state) => {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Signup reducers
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      // Login reducers
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(checkAuth.pending, (state) => {
        console.log("checkAuth pending"); // Debugging
        state.loading = true;
        state.error = null;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        console.log("checkAuth fulfilled:", action.payload); // Debugging
        state.loading = false;
        state.user = action.payload; // Update the user state
      })
      .addCase(checkAuth.rejected, (state, action) => {
        console.log("checkAuth rejected:", action.payload); // Debugging
        state.loading = false;
        state.error = action.payload?.message || 'An error occurred'; // Handle undefined payload
      });
  },
});

export const { logoutUser } = authSlice.actions; // Export the logout action
export default authSlice.reducer;