# 📚 Smart Library Management System

A full-stack library management application built using React, Node.js, Express.js, and MongoDB Atlas.

The project allows users to browse books, borrow and return books, track active borrowings, and manage their library activities through a simple and responsive interface. It was built as a hands-on project to strengthen my understanding of full-stack development, authentication, database management, and cloud deployment.

## 🚀 Live Demo

https://smart-library-system-qdfa.vercel.app/books

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Context API

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcryptjs

### Database
- MongoDB Atlas
- Mongoose

### Deployment
- Vercel (Frontend)
- Render (Backend)

## ✨ Features

- User Authentication (JWT)
- Browse Available Books
- Search Books by Title or Author
- Filter Books by Category
- Borrow Books
- Return Books
- Active Borrow Tracking
- Borrow History
- Overdue Fine Calculation
- Responsive User Interface
- MongoDB Atlas Cloud Database

## 📚 What I Learned

Through this project, I gained practical experience in:

- Building REST APIs with Express.js
- Working with MongoDB Atlas and Mongoose
- Implementing JWT-based authentication
- Connecting React frontend with Node.js backend
- Managing application state and routing
- Deploying full-stack applications using Vercel and Render

## 📂 Project Structure

```text
smart-library/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── frontend/
├── data/
├── screenshots/
├── server.js
├── package.json
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/raazx18/smart-library-system.git
```

Move into the project directory:

```bash
cd smart-library
```

Install backend dependencies:

```bash
npm install
```

Start the backend server:

```bash
npm start
```

Start the frontend:

```bash
cd frontend
npm install
npm start
```

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

## 📸 Screenshots

- Login Page
- Books Dashboard
- Borrowed Books
- Borrow History
- Cart Page

## 🔮 Future Improvements

- Admin Dashboard
- User Registration Enhancements
- Book Reviews and Ratings
- Email Notifications
- Advanced Analytics
- Fine Payment Integration

## 👨‍💻 Author

**Raj Soni**

GitHub: https://github.com/raazx18

Repository: https://github.com/raazx18/smart-library-system

LinkedIn: https://www.linkedin.com/in/raj-soni-6b77122b3
