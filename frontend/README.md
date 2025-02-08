frontend/
│── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── ExpenseForm.js
│   │   ├── ExpenseList.js
│   │   ├── IncomeForm.js
│   │   ├── IncomeList.js
│   │   ├── DashboardCharts.js
│   ├── pages/             # Main pages/views
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   ├── Dashboard.js
│   │   ├── AddExpense.js
│   │   ├── EditExpense.js
│   │   ├── Reports.js
│   ├── redux/             # Redux state management
│   │   ├── store.js
│   │   ├── slices/
│   │   │   ├── authSlice.js
│   │   │   ├── expenseSlice.js
│   │   │   ├── incomeSlice.js
│   ├── api/               # API service calls
│   │   ├── authApi.js
│   │   ├── expenseApi.js
│   │   ├── incomeApi.js
│   ├── utils/             # Utility functions
│   │   ├── formatDate.js
│   │   ├── calculateTotals.js
│   ├── App.js             # Main app component
│   ├── index.js           # React entry point
│   ├── router.jsx         # Routing setup
│── public/                # Static files (e.g., icons, images)
│── .env                   # Environment variables (API URLs, etc.)
│── package.json           # Frontend dependencies
