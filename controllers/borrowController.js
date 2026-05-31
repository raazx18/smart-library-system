const Borrow = require("../models/Borrow");
const Book = require("../models/Book");

// Borrow Book
exports.borrowBook = async (req, res) => {
  try {
    const { bookId, days } = req.body;

    if (!bookId || !days) {
      return res.status(400).json({ msg: "Missing fields" });
    }

    const book = await Book.findById(bookId);

    if (!book || !book.isAvailable) {
      return res.status(400).json({ msg: "Book not available" });
    }

    const active = await Borrow.findOne({
      userId: req.user.id,
      status: "ACTIVE",
    });

    if (active) {
      return res.status(400).json({
        msg: "Return previous book first",
      });
    }

    const borrowDate = new Date();

    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + Number(days));

    const totalCost = book.pricePerDay * days;

    const borrow = await Borrow.create({
      userId: req.user.id,
      bookId,
      borrowDate,
      dueDate,
      totalCost,
      status: "ACTIVE",
    });

    book.isAvailable = false;
    await book.save();

    res.json({
      msg: "Book borrowed successfully",
      borrow,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// Return Book
exports.returnBook = async (req, res) => {
  try {
    const borrow = await Borrow.findOne({
      userId: req.user.id,
      status: "ACTIVE",
    }).populate("bookId");

    if (!borrow) {
      return res.status(400).json({
        msg: "No active borrow",
      });
    }

    const returnDate = new Date();

    borrow.returnDate = returnDate;
    borrow.status = "RETURNED";

    let overdueCost = 0;

    if (returnDate > borrow.dueDate) {
      const daysLate = Math.ceil(
        (returnDate - borrow.dueDate) /
          (1000 * 60 * 60 * 24)
      );

      overdueCost =
        daysLate * borrow.bookId.duePerDay;
    }

    borrow.overdueCost = overdueCost;

    await borrow.save();

    const book = await Book.findById(
      borrow.bookId._id
    );

    book.isAvailable = true;
    await book.save();

    res.json({
      msg: "Book returned successfully",
      borrow,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// Get Active Borrow
exports.getActiveBorrow = async (req, res) => {
  try {
    console.log("User ID:", req.user.id);

    const borrow = await Borrow.findOne({
      userId: req.user.id,
      status: "ACTIVE"
    }).populate("bookId");

    console.log("Borrow:", borrow);

    res.json(borrow);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get History
exports.getHistory = async (req, res) => {
  try {
    const history = await Borrow.find({
      userId: req.user.id,
    }).populate("bookId");

    res.json(history);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};