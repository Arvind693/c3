let mongoose=require("mongoose");

let userSchema=new mongoose.Schema(
    {
        firstName:{type:String,required:true},
        lastName:{type:String,required:true},
        age:{type:Number,required:true},
        email:{type:String,required:true},
        profileImages:[{type:String,required:false}]

    },
    {
        timestamps:true,
        versionKey:false
    }

)

module.exports = mongoose.model("user",userSchema)
