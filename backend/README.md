backend/
│── controllers/       # Handles request logic
│   ├── authController.js
│   ├── expenseController.js
│   ├── incomeController.js
│── models/            # Mongoose models (database schema)
│   ├── User.js
│   ├── Expense.js
│   ├── Income.js
│── middleware/        # Middleware (e.g., authentication)
│   ├── authMiddleware.js
│── routes/            # API routes
│   ├── authRoutes.js
│   ├── expenseRoutes.js
│   ├── incomeRoutes.js
│── config/            # Database connection & environment setup
│   ├── db.js
│── utils/             # Utility functions (helpers)
│   ├── jwt.js
│── server.js          # Main entry point for backend
│── .env               # Environment variables (e.g., database URL, JWT secret)
│── package.json       # Backend dependencies
