const mongoose=require("mongoose");


const likesSchema=new mongoose.Schema({
    user_id:mongoose.Types.ObjectId,
    blog_id:mongoose.Types.ObjectId,
    emoji:"",
})

const Likes=mongoose.model("Like",likesSchema);

module.exports=Likes;