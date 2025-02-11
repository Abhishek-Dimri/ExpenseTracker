const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const http = require('http');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(
  cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true, // Allow credentials (cookies)
  })
);

app.use(express.json()); // Parse JSON bodies
app.use(cookieParser()); // Parse cookies

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

// Routes
app.use('/api/auth', authRoutes);