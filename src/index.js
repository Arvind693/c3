let express = require("express")

let app = express()
let connect = require("./configs/db")
let userController=require("./controllers/user")

let bookController=require("./controllers/book")

let commentController=require("./controllers/comment");

app.use(express.json())



app.use("/user",userController)
app.use("/book",bookController)
app.use("/comment",commentController)
 

app.listen(2000,async()=>{
    try{
      await connect()
      console.log("This is port 2000")  
    }
    catch(err){
      console.log(err)
    }
})

