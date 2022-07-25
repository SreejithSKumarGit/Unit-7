const mongoose=require("mongoose");


const usersSchema= new mongoose.Schema({
    name:String,
    email:String,
    avatar:String,
    password:String,
    social_profile:{
        linkedIn:String,
        facebook:String,
        twiter:String,
        github:String,
        instagram:String
    },
    addresses:[{
        line1:String,
        city:String,
        State:String,
        pincode:Number
    }],
});

const Users=mongoose.model("User",usersSchema);

module.exports=Users;