# 📚 Smart Library Management System

Smart Library Management System is a full-stack web application built to make library operations easier for students and library users. The application allows users to browse books, borrow and return books, track active borrowings, and manage their reading activity through a simple and responsive interface.

The project was developed as a practical full-stack learning project and helped me gain experience with authentication, database management, API development, and cloud deployment.

## Live Demo

Frontend:
https://smart-library-system-qdfa.vercel.app/books

## Tech Stack

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

## Features

- Secure user authentication using JWT
- Browse available books
- Search books by title or author
- Filter books by category
- Borrow and return books
- Track active borrowings
- View borrowing history
- Cart functionality
- Fine calculation for overdue books
- Responsive user interface
- MongoDB Atlas cloud database integration

## What I Learned

While building this project, I worked on:

- Designing REST APIs with Express.js
- Connecting applications to MongoDB Atlas
- Implementing JWT-based authentication
- Managing application state in React
- Deploying frontend and backend separately
- Integrating cloud-hosted services

## Project Structure

```text
smart-library/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── frontend/
├── data/
├── server.js
├── package.json
└── README.md
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/raazx18/smart-library-system.git
```

Move to the project folder:

```bash
cd smart-library
```

Install backend dependencies:

```bash
npm install
```

Start backend server:

```bash
npm start
```

Open another terminal and run the frontend:

```bash
cd frontend
npm install
npm start
```

## Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

## Screenshots

### Login Page
(Add Screenshot)

### Books Dashboard
(Add Screenshot)

### Borrowed Books
(Add Screenshot)

### Borrow History
(Add Screenshot)

## Future Enhancements

- Admin dashboard
- User profile management
- Book reviews and ratings
- Email notifications for due dates
- Advanced analytics and reports

## Author

**Raj Soni**

GitHub:
:contentReference[oaicite:0]{index=0}

Repository:
:contentReference[oaicite:1]{index=1}

LinkedIn:
:contentReference[oaicite:2]{index=2}
