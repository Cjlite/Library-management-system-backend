const book = require("../Model/addBook");

const addBook = async (req, res) => {
  try {
    const isExist=await book.findOne({isbn:req.body.isbn})
    if(isExist){
      res.send({error:"Book Is Already Added"})
    }
    else{
      const data = new book({
        isbn: req.body.isbn,
        author: req.body.author,
        title: req.body.title,
        price: req.body.price,
      });
      const result=await data.save()
      if (result) {
          res.send({ msg: "Book Added" });
        } else {
          res.send({ error: "Book not added" });
        }
    }
  } catch (error) {
    res.send({ error: "Something Went Wrong" });
  }
};

const getBook=async (req,res)=>{
  try {
    const data= await book.find();
    res.send(data)
  } catch (error) {
    res.send({error:err})
  }
}

module.exports = {addBook,getBook};
