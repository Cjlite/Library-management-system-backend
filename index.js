const express = require("express");
const cors = require("cors");
const dbconnect = require("./Connection/dbConnection");
const app = express();
const bodyParser = require("body-parser");

const user = require("./Controller/addUser");
const book =require('./Controller/addBook')
const student =require('./Controller/addStudent')
const issue=require("./Controller/issueBook")
const returned=require("./Controller/returnBook")


app.use(cors());
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
dbconnect();

app.get("/adduser", user.adduser);
app.post("/addmoreuser", user.addMoreuser);
app.post("/login", user.login);
app.post("/addbook", book.addBook);
app.post("/addstudent", student.addStudent);
app.get("/getprevios/:editId", student.getPrevious);
app.put("/updatestudent/:editId", student.updateStudent);
app.get("/deletestudent/:id", student.deleteStudent);
app.get("/getstudent", student.getStudent);
app.get("/getbook", book.getBook);
app.post("/addissue", issue.addIssue);
app.get("/getissue/:id", issue.getIssue);
app.get("/getissueall", issue.getIssueAll);
app.post("/addreturned",returned.addReturned);

app.listen(9000, () => {
  console.log("server run on port 9000");
});
