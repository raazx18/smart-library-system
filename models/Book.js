const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  category: String,
  pricePerDay: Number,
  duePerDay: Number,
  rating: Number,
  image: String,
  isAvailable: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);