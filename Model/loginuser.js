const mongoose = require("mongoose");


const userScema =new mongoose.Schema({
    email:String,
    password:String,
    userName:String
})

const user =mongoose.model("users",userScema);

module.exports=user;