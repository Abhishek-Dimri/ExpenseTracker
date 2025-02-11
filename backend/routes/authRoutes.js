const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Signup route
router.post('/signup', authController.signUpUser);

// Login route
router.post('/login', authController.loginUser);

// Logout route
router.post('/logout', authController.logoutUser);

router.get('/check-auth', authController.checkAuth);

// Protected route (example)
router.get('/dashboard', authMiddleware, (req, res) => {
  res.json({ message: 'Welcome to the dashboard', user: req.user });
});

module.exports = router;