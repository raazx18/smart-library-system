const Borrow = require("../models/Borrow");

exports.getSummary = async (req, res) => {
  try {
    const active = await Borrow.find({
      userId: req.user.id,
      status: "ACTIVE"
    });

    const history = await Borrow.find({
      userId: req.user.id,
      status: "RETURNED"
    });

    let totalDue = 0;

    active.forEach(b => {
      totalDue += b.totalCost + (b.overdueCost || 0);
    });

    res.json({
      activeCount: active.length,
      historyCount: history.length,
      totalDue
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};