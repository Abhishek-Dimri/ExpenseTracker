const express = require('express');
const { signUpUser, loginUser } = require('../controllers/authController');
const router = express.Router();

// Routes
router.post('/signUp', signUpUser);
router.post('/login', loginUser);


module.exports = router;
