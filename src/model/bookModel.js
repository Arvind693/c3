let user=require("./userModel");

let mongoose=require("mongoose");

let bookSchema=new mongoose.Schema(
    {
        likes:{type:Number,default:0},
        authorId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true
        },
        coverImage:{type:String,required:true},
        content:{type:String,required:true}
    }
)

module.exports = mongoose.model("book",bookSchema)
