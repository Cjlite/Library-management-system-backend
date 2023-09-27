const issue = require("../Model/issueBook");

const addIssue = async (req, res) => {
  try {
    console.log(req.body);
    const data = new issue({
      isbn: req.body.isbn,
      libraryid: req.body.libraryid,
      issueddate: req.body.issueddate,
      returndate: req.body.returndate,
    });
    const result = await data.save();
    if (result) {
      res.send({ msg: "Book Issued" });
    } else {
      res.send({ error: "Book not Issued" });
    }
  } catch (error) {
    res.send({ error: "Something Went Wrong" });
  }
};

const getIssue=async (req,res)=>{
    try {
        const {id}=req.params;
        const data = await issue.findOne({isbn:id});
        if(data){
          res.send(data);
        }
        else{
          console.log("Data Not Found")
        }
       
      } catch (err) {
        console.log({msg:"*******"});
      }
}

const getIssueAll=async (req,res)=>{
    try {
        const data = await issue.find();
        if(data){
          res.send(data);
        }
        else{
          console.log("Data Not Found")
        }
       
      } catch (err) {
        console.log({msg:"*******"});
      }
}

module.exports = { addIssue ,getIssue,getIssueAll};
