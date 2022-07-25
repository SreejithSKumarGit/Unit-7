const Users=require("../Database/Users");


async function register(req,res,next)
{
    const body=req.body;

     await Users.create(body);
     const users=await Users.find();
     res.send({data:users});

}

async function login(req,res,next)
{
    const body=req.body;
    
    const user=await Users.findOne({email:body.email});
    
    if(user)
    {
        if(user.password===body.password)
        {
            return res.status(200).send({messsage:"Successfully logged in",
                                        user:user.name});

        }
        else
        {
            return res.status(404).send({message:"Password incorrect"});
        }
    }
    else
    {
        return res.status(404).send({message:"User not found"});
    }
}


module.exports={
    register,
    login
}