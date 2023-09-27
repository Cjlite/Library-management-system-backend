const mongoose = require("mongoose");

const db = () => {
  mongoose
    .connect("mongodb://0.0.0.0:27017/jayhind", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = db;
