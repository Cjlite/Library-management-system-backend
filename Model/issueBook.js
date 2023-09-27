const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
  isbn: Number,
  libraryid: String,
  issueddate: String,
  returndate: String,
});

const issue = mongoose.model("issued", issueSchema);

module.exports = issue;
