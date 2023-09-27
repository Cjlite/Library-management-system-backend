const student = require("../Model/addStudent");

const addStudent = async (req, res) => {
  try {
    const data = new student({
      studentname: req.body.studentname,
      class: req.body.studentclass,
      stream: req.body.stream,
      rollno: req.body.rollno,
      contact: req.body.contact,
      libraryid: req.body.libraryid,
    });
    const result = await data.save();
    if (result) {
      res.send({ msg: "Student Added" });
    } else {
      res.send({ error: "Student not added" });
    }
  } catch (error) {
    res.send({ error: "Something Went Wrong" });
  }
};

const getStudent = async (req, res) => {
  try {
    const data = await student.find();
    res.send(data);
  } catch (err) {
    console.log({ error: err });
  }
};

const getPrevious = async (req, res) => {
  try {
    const data = await student.findOne({ _id: req.params.editId });
    res.send(data);
  } catch (error) {
    res.send({ error: "something Went Wrong" });
  }
};

const updateStudent = async (req, res) => {
  try {
    const data = await student.updateOne(
      { _id: req.params.editId },
      {
        $set: {
          studentname: req.body.studentname,
          class: req.body.class,
          stream: req.body.stream,
          rollno: req.body.rollno,
          contact: req.body.contact,
          libraryid: req.body.libraryid,
        },
      }
    );
    if(data){
      res.send({msg:"Student Update Successfully"})
    }
    else{
      res.send({error:"Student Doesn't Update"})
    }
  } catch (error) {
    res.send({error:"Something Went Wrong"})
  }
};

const deleteStudent=async (req,res)=>{
  try {
    const data=await student.deleteOne({_id:req.params.id})
    if(data){
      res.send({msg:"User Deleted"})
    }
    else{
      res.send({error:"User Cannot Delete"})
    }
  } catch (error) {
    res.send({error:"Something Went Wrong"})
  }
}

module.exports = { addStudent, getStudent, getPrevious,updateStudent,deleteStudent };
