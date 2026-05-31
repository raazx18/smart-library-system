# Smart Library Management System

This is a full-stack library management system developed using React, Node.js, Express, and MongoDB.

The project allows users to browse books, borrow books, return books, and view their borrowing history. It also includes a cart feature and a responsive user interface built with Tailwind CSS.

## Features

- User login authentication
- View available books
- Search books by title or author
- Filter books by category
- Pagination
- Add books to cart
- Increase/decrease quantity in cart
- Remove books from cart
- Borrow books
- Return books
- Active borrow tracking
- Borrow history
- Overdue fine calculation
- Responsive dark theme UI

## Technologies Used

### Frontend

- React.js
- React Router DOM
- Context API
- Tailwind CSS

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication

- JWT

## Project Structure

```text
smart-library/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/raazx18/smart-library-system.git
```

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm start
```

## Environment Variables

Create a `.env` file inside the backend folder.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

## Screenshots

Add screenshots of:

- Login Page
- Books Page
- Cart Page
- Active Borrow Page
- Borrow History Page

## Future Improvements

- Admin panel
- User registration page
- Book reviews and ratings
- Email reminders for due dates
- Online payment integration

## Author

Raj Soni

GitHub: https://github.com/raazx18
