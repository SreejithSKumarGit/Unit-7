const Users=require("../Database/Users");
const { use } = require("../Routers/UsersRouter");
const jwt=require("jsonwebtoken");



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
async function login(req,res,next)
{
    const {signinName,signinPassword}=req.body;
    
    let user=await Users.findOne({email:signinName});

    if(user)
    {
        
        if(user.password===signinPassword)
        {
            
            let encrypted_token=jwt.sign({
                id:user._id,
                email:user.email,
                name:user.name
            },"SREEJITHJWTKEY");
            
            return res.json({message:"Success",
                            token:encrypted_token})
        }
        else
        {   
            return res.json({message:"Enter correct password"});
        }
    }
    else{
        return res.json({message:"User not found"});
    }
}
async function getLoggedInUser(req,res,next)
{
    const token=JSON.parse(localStorage.getItem('token'));
    res.json({token:token}
        );
   // let user=jwt.decode(token,"SREEJITHJWTKEY");
    
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
    deleteUserData,
    login,
    getLoggedInUser
}

/*{
    "message": "Success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZGQ0ZjdjMTAxMTQ4ZmM1YjA5NmJjMiIsImVtYWlsIjoic3JlZWppdGhza3VtYXI4MEBnbWFpbC5jb20iLCJuYW1lIjoiU3JlZWppdGgiLCJpYXQiOjE2NTg3MzQ3OTN9.Nh_-rPaCGKQ4YgQi-FRZOUPSXf6jC-8g3WDqVpYoS6Q"
}*/