const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentname: String,
  class: String,
  stream: String,
  rollno: Number,
  contact: Number,
  libraryid: String,
});

const student = mongoose.model("students", studentSchema);

module.exports = student;
