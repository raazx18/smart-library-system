const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Atlas Connected");
  console.log("Database:", mongoose.connection.db.databaseName);
})
.catch(err => console.log(err));

// ✅ Routes
app.use("/auth", require("./routes/authRoutes"));
app.use("/books", require("./routes/bookRoutes"));
app.use("/borrow", require("./routes/borrowRoutes"));
app.use("/dashboard", require("./routes/dashboardRoutes"));

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// ✅ Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});