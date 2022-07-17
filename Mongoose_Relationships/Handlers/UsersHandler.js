const Users=require("../Database/Users");


async function fetchAllUsers(req,res,next)
{
    const data=await Users.find();

    return res.send({data:data});
}
async function createUser(req,res,next)
{
    const body=req.body;

    await Users.create(body);
    res.send("User data has been successfully created ");
}
async function updateUserData(req,res,next)
{
    const {id}=req.params;
    const body=req.body;

    const data=await Users.findOneAndUpdate({_id:id},body);

    res.send("User data has been successfully updated",body);
}
async function deleteUserData(req,res,next)
{
    const {id}=req.params;

    await Users.findOneAndDelete({_id:id});

    res.send("User data has been successfully removed ");

}

module.exports={
    fetchAllUsers,
    createUser,
    updateUserData,
    deleteUserData
}