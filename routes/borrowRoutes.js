const express = require("express");
const router = express.Router();

const borrowController = require("../controllers/borrowController");
const auth = require("../middleware/auth");

router.post("/", auth, borrowController.borrowBook);

router.post("/return", auth, borrowController.returnBook);

router.get("/active", auth, borrowController.getActiveBorrow);

router.get("/history", auth, borrowController.getHistory);

module.exports = router;