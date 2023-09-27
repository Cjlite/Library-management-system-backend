const mongoose = require("mongoose");


const bookScema =new mongoose.Schema({
    isbn:Number,
    author:String,
    title:String,
    price:Number
})

const book =mongoose.model("books",bookScema);

module.exports=book;