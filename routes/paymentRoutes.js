const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const { getPaymentHistory } = require("../controllers/paymentController");

router.get("/history", auth, getPaymentHistory);

module.exports = router;