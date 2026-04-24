const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  course: { type: String, required: true },
  specialization: { type: String } // Added custom field for uniqueness
}, { timestamps: true }); // timestamps se kab record bana, wo save ho jata hai

module.exports = mongoose.model("Student", studentSchema);