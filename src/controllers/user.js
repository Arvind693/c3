let express= require("express")
let mongoose = require("mongoose")
let User = require("../model/userModel")
let { body, validationResult } = require("express-validator");
let router = express.Router()

router.get("",async(req,res)=>{
    try {
        let user = await User.find().lean().exec()
        return res.status(201).send({user:user})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})


router.post("",body("firstName").not().isEmpty().withMessage("First name can not be empty").custom((value)=>{
    if(value.length >=3 ||value.length <30){
        return true

    }
    throw new Error("First name should be greater than 3 or less than 30")
}),
body("lastname").not().isEmpty().withMessage("Last name can not be empty").custom((value)=>{
if(value.length >=3 ||value.length <30){
    return true

}
throw new Error("last name should be greater than 3 or less than 30")
}),

body("age").not().isEmpty().withMessage("age can not be empty").
custom((value)=>{
    if(value < 1 || value > 150){ 
        throw new Error("Age must be a number between 1 and 150"); 
      } 
      return true
    }),

async(req,res)=>{
    try {
        let user = await User.create()
        return res.status(201).send({user:user})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})

module.exports = router