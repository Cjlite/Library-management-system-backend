const mongoose = require("mongoose");

const returnedSchema =new mongoose.Schema({
  isbn: Number,
  libraryid: String,
  issueddate: String,
  returndate: String,
});

const returned = mongoose.model("return", returnedSchema);

module.exports =  returned ;
