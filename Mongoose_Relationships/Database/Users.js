const mongoose=require("mongoose");


const usersSchema= new mongoose.Schema({
    name:String,
    email:String,
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
    blog_id:[
        {id:mongoose.Types.ObjectId}   
    ]

});

const Users=mongoose.model("User",usersSchema);

module.exports=Users;