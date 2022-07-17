const mongoose=require("mongoose");


const commentsSchema=new mongoose.Schema({
    blog_id:mongoose.Types.ObjectId,
    user_id:mongoose.Types.ObjectId,
    message:String,
    rating:Number,
})

const Comments=mongoose.model("Comment",commentsSchema);

module.exports=Comments;