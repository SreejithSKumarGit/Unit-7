const mongoose=require("mongoose");


const blogSchema=new mongoose.Schema({
    title:String,
    body:String,
    category_ids:[{
       id: mongoose.Types.ObjectId
    }]
})
const Blogs=mongoose.model("Blog",blogSchema);

module.exports=Blogs;