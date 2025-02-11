const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.cookies.authToken; // Get the token from the cookie

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
    req.user = decoded; // Attach the decoded payload to the request object
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

module.exports = authMiddleware;