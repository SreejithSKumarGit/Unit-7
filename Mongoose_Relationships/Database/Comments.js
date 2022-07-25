const mongoose=require("mongoose");
const Blogs=require("../Database/Blogs");
const Users=require("../Database/Users");


const commentsSchema=new mongoose.Schema({
    blog_id:{
             type:mongoose.Types.ObjectId,
             ref:Blogs   },
    user_id:{type:mongoose.Types.ObjectId,
              ref:Users},
    message:String,
    rating:Number,
})

const Comments=mongoose.model("Comment",commentsSchema);

module.exports=Comments;