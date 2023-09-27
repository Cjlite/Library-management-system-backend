const user = require("../Model/loginuser");

const adduser = async (req, res) => {
  try {
    const data = new user({
      email: "chetan123@gmail.com",
      password: "chetan@123",
      userName: "chetan jadhav"
    });
    const result = await data.save()
    if (result) {
      res.send({ msg: "user added" });
    } else {
      res.send({ error: "user not added" });
    }
  } catch (error) {
    res.send({ error: "Somthing Went Wrong" });
  }
};

const addMoreuser = async (req, res) => {
  try {
    const data = new user({
      email: req.body.email,
      password: req.body.password,
      userName: req.body.userName
    });
    const result = await data.save()
    if (result) {
      res.send({ msg: "user added" });
    } else {
      res.send({ error: "user not added" });
    }
  } catch (error) {
    res.send({ error: "Somthing Went Wrong" });
  }
};

const login = async (req, res) => {
  try {
    const data = await user.findOne({ user: req.body.user });
    // console.log(data)
    // console.log(req.body)
    if (data) {
      if (data.password == req.body.password) {
        res.send({ msg: "Login Sucessful" });
      } else {
        res.send({ error: "Password Diden't match" });
      }
    } else {
      res.send({ error: "User Not Found" });
    }
  } catch (error) {
    res.send({ error: "Something Went Wrong" });
  }
};

module.exports = { login, adduser, addMoreuser };
