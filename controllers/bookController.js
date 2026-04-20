const Book = require("../models/Book");

// Get all available books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find({ isAvailable: true });
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};