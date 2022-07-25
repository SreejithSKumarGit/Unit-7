const mongoose=require("mongoose");
const Users =require("../Database/Users");
const Blogs=require("../Database/Blogs");


const likesSchema=new mongoose.Schema({
    user_id:{
        type:mongoose.Types.ObjectId,
        ref:Users},
    blog_id:{
        type:mongoose.Types.ObjectId,
        ref:Blogs},
    emoji:"",
})

const Likes=mongoose.model("Like",likesSchema);

module.exports=Likes;