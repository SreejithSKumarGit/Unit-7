const Blogs=require("../Database/Blogs");

async function fetchAllBlogs(req,res,next)
{
    const data =await Blogs.find();

    return res.send(data);
}

async function createBlogs(req,res,next)
{
    const body =req.body;

    await Blogs.create(body);
    res.send("Blog has been created successfully");
}
async function updateBlog(req,res,next)
{
    const {id}=req.params;
    const body=req.body;

    const data=await Blogs.findOneAndUpdate({_id:id},body)
    res.send("Blog has been updated successfully");
}
async function deleteBlog(req,res,next)
{
    const {id}=req.params;
    const data=await Blogs.findOneAndDelete({_id:id})
    res.send("Blog has been deleted successfully");
}

module.exports={
    fetchAllBlogs,
    createBlogs,
    updateBlog,
    deleteBlog
}