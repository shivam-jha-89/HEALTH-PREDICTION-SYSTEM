# Health Prediction System

## Project Structure

```
HEALTH-PREDICTION-SYSTEM/
├── backend/
│   ├── config/
│   │   └── db.js             # MongoDB connection configuration
│   ├── controllers/           # Controllers for handling requests
│   ├── models/                # Mongoose models
│   ├── routes/                # API routes
│   ├── middleware/            # Middleware files
│   ├── app.js                 # Main app file
│   └── package.json           # Backend dependencies
├── frontend/
│   ├── public/                # Public directory for React app
│   ├── src/                   # React application source files
│   │   ├── components/        # React components
│   │   ├── pages/             # Page components
│   │   ├── App.js             # Main App component
│   │   ├── index.js           # Entry point
│   │   └── package.json       # Frontend dependencies
├── .gitignore                  # Files to exclude from git
├── README.md                   # Project documentation
└── LICENSE                     # Project license
```

---
## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Instructions
1. Clone the repository
2. Navigate to the backend directory and run `npm install`
3. Configure the database connection in `backend/config/db.js`
4. Start the backend server with `node app.js`
5. Navigate to the frontend directory and run `npm install`
6. Start the frontend application using `npm start`
