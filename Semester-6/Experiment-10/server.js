const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection (Personalized for Virappan)
mongoose.connect("mongodb://127.0.0.1:27017/experiment10db")
  .then(() => console.log("🔥 Virappan's Database Connected Successfully!"))
  .catch(err => console.log("Database connection error: ", err));

// Routes
const studentRoutes = require("./routes/studentRoutes");
app.use("/api/students", studentRoutes);

// Server Start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 DevVault Server running on port ${PORT}`);
});