// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"; // Import the auth slice

const store = configureStore({
  reducer: {
    auth: authReducer, // Add the auth slice to the store
  },
});

export default store;