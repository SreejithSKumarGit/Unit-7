const Notes=require("../Database/Notes");
const Users = require("../Database/Users");


async function createNotes(req,res,next)
{
    const {name,title,note,label}=req.body;
    const user=await Users.findOne({name:name});

    await Notes.create({
        title:title,
        note:note,
        lable:label,
        userId:user._id
    });
    const notes=await Notes.find();
    return res.status(200).send({data:notes});

}
async function fetchallNotesofuser(req,res,next)
{
    const {name}=req.body;
    const user=await Users.findOne({name:name});
    
    const notes=await Notes.find({userId:user._id}).populate("userId");

    return res.status(200).json({notes:notes});
}

async function updateNotes(req,res,next)
{
    const {id}=req.params;
    const body=req.body;
    const notes=await Notes.findOneAndUpdate({_id:id},body);
    res.status(200).send({data:notes});
}
async function deleteNotes(req,res,next)
{
    const {id}=req.params;

    await Notes.findOneAndDelete({_id:id});
    const notes=await Notes.find();
    res.status(200).send({data:notes});
}

module.exports={
    createNotes,
    fetchallNotesofuser,
    updateNotes,
    deleteNotes}