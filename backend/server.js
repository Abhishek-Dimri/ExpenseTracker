const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const User = require('./models/User')
const bcrypt = require('bcryptjs');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Health check route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Create HTTP server and attach Express app
const server = http.createServer(app);

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post('/signUp', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  User.findOne({ email: email })
    .then((existingUser) => {
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const newUser = new User({ name, email, password });
      newUser.save()
        .then((user) => {
          res.status(201).json({ message: 'User created successfully', user });
        })
        .catch((err) => {
          res.status(500).json({ message: 'Failed to create user', error: err.message });
        });
    })
    .catch((err) => {
      res.status(500).json({ message: 'Something went wrong', error: err.message });
    });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (user) {
        // Compare the passwords
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;

          if (isMatch) {
            return res.json("Login successful");
          } else {
            return res.json("Invalid credentials");
          }
        });
      } else {
        res.json("No user found with that email");
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Something went wrong', error: err.message });
    });
});