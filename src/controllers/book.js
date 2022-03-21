let mongoose=require("mongoose");

let Book=require("../model/bookModel");

let express=require("express");

let router=express.Router();

router.get("",async(req,res)=>{
    try {
        let book=await Book.find().lean().exec()
        return res.send(book)
    } catch (error) {
        return res.send(error)
    }
})
router.post("",async(req,res)=>{
    try {
        let book=await Book.create(req.body);
        return res.send(book)
    } catch (error) {
        return res.send(error)
    }
})

module.exports=router;