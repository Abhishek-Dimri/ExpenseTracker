const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Signup a new user
exports.signUpUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    // Generate a token
    const token = newUser.generateAuthToken();

    // Set the token in an HTTP-only cookie
    res.cookie('authToken', token, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === 'production', // Only send over HTTPS in production
      secure: false, // Only send over HTTPS in production
      sameSite: 'strict', // Prevent CSRF attacks
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create user', error: err.message });
  }
};

// Login an existing user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate a token
    const token = user.generateAuthToken();

    // Set the token in an HTTP-only cookie
    res.cookie('authToken', token, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === 'production', // Only send over HTTPS in production
      secure: false, // Only send over HTTPS in production
      sameSite: 'strict', // Prevent CSRF attacks
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong', error: err.message });
  }
};

// Logout the user
exports.logoutUser = (req, res) => {
  res.clearCookie('authToken'); // Clear the authToken cookie
  res.status(200).json({ message: 'Logout successful' });
};

exports.checkAuth = async (req, res) => {
  console.log("Checking authentication..."+req.cookies.authToken); // Debugging
  try {
    const token = req.cookies.authToken; // Get the token from the cookie
    console.log("Token found:"); // Debugging
    if (!token) {
      console.log("No token provided"); // Debugging
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
    const user = await User.findById(decoded._id).select('-password'); // Fetch user details (excluding password)

    console.log("User found:"); // Debugging

    if (!user) {
      console.log("User not found"); // Debugging
      return res.status(404).json({ message: 'User not found' });
    }

    console.log("User found:", user); // Debugging
    res.status(200).json({ user }); // Return the user data
  } catch (err) {
    console.log("Invalid token: hm", err.message); // Debugging
    res.status(401).json({ message: 'Invalid token' });
  }
};