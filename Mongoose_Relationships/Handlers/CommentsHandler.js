const Comments=require("../Database/Comments");

async function fetchAllComments(req,res,next)
{
    const data=await Comments.find();
    return res.send(data);
}
async function createComments(req,res,next)
{
    const body =req.body;

    await Comments.create(body);

    res.send("Comments has been successfully created");
}

async function updateComment(req,res,next)
{
    const {id}=req.params;
    const body=req.body;

    await Comments.findOneAndUpdate({_id:id});
    res.send("Comment has been updated successfully")
}
async function deleteComment(req,res,next)
{
    const {id}=req.params;

    await Comments.findOneAndDelete({_id:id});
    res.send("Comment has been deleted");
}

module.exports={
    fetchAllComments,
    createComments,
    updateComment,
    deleteComment
}