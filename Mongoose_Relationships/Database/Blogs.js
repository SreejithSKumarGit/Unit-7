const mongoose=require("mongoose");
const Users=require("../Database/Users");
const Category=require("../Database/Category");


const blogSchema=new mongoose.Schema({
    title:String,
    body:String,
    image_url:String,
    category_ids:{
       type: mongoose.Types.ObjectId,
       ref:Category
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:Users
    }
})
const Blogs=mongoose.model("Blog",blogSchema);

module.exports=Blogs;