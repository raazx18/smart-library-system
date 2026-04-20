const mongoose = require("mongoose");

const borrowSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
  borrowDate: Date,
  dueDate: Date,
  returnDate: Date,
  totalCost: Number,
  overdueCost: Number,
  status: { type: String, default: "ACTIVE" }
});

module.exports = mongoose.model("Borrow", borrowSchema);