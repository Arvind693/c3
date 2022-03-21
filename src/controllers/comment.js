let mongoose=require("mongoose");

let Comment=require("../model/commentModel");

let express=require("express");

let router=express.Router();

router.get("",async(req,res)=>{
    try {
        let comment=await Comment.find().lean().exec()
        return res.send(comment)
    } catch (error) {
        return res.send(error)
    }
})
router.post("",async(req,res)=>{
    try {
        let comment=await Comment.create(req.body);
        return res.send(comment)
    } catch (error) {
        return res.send(error)
    }
})

module.exports=router;