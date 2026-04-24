const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// 1. CREATE - Add new student
router.post("/", async (req, res) => {
  try {
    const data = await Student.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 2. READ ALL - Fetch all records
router.get("/", async (req, res) => {
  try {
    const data = await Student.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 3. READ SINGLE - Fetch record by ID
router.get("/:id", async (req, res) => {
  try {
    const data = await Student.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Student not found" });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 4. UPDATE - Modify record by ID
router.put("/:id", async (req, res) => {
  try {
    const data = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 5. DELETE - Remove record by ID
router.delete("/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Record Deleted Successfully by Admin" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;