const Likes=require("../Database/Likes");

async function fetchAllLikes(req,res,next)
{
    const data=await Likes.find();
    return res.send(data);
}
async function createLikes(req,res,next)
{
    const body=req.body;

    await Likes.create(body);

    res.send("Like has been created successfully");
}
async function updateLike(req,res,next)
{
    const {id}=req.params;
    const body =req.body;

    await Likes.findOneAndUpdate({_id:id},body);

    res.send("Like has been updated successfully");
}
async function deleteLike(req,res,next)
{
    const {id}=req.params;
    await Likes.findOneAndDelete({_id:id});
    res.send("Likes has been deleted successfully");

}

module.exports={
    fetchAllLikes,
    createLikes,
    updateLike,
    deleteLike
}