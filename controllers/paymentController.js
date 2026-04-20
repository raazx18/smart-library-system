const Borrow = require("../models/Borrow");

exports.getPaymentHistory = async (req, res) => {
  try {
    const borrows = await Borrow.find({
      userId: req.user.id,
      status: "RETURNED"
    }).populate("bookId");

    const payments = borrows.map(b => ({
      bookTitle: b.bookId.title,
      totalAmount: b.totalCost + (b.overdueCost || 0),
      status: "PENDING"
    }));

    res.json(payments);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};