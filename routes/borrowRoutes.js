const express = require("express");
const router = express.Router();

const {
  borrowBook,
  returnBook,
  getMyBorrow,
  getHistory,
  getBorrowSummary,
  validateBorrow,
  calculateCost,
  getActiveBorrow
} = require("../controllers/borrowController");

const auth = require("../middleware/auth");

// Borrow
router.post("/", auth, borrowBook);

// Return
router.post("/return", auth, returnBook);

// Active Borrow
router.get("/active", auth, getActiveBorrow);

// Summary
router.get("/:borrowId/summary", auth, getBorrowSummary);

// My Borrow
router.get("/me", auth, getMyBorrow);

// History
router.get("/history", auth, getHistory);

// Validate
router.post("/validate", auth, validateBorrow);

// Calculate
router.post("/calculate", auth, calculateCost);

module.exports = router;