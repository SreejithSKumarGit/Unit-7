const express=require("express");
const {Router}=require("express");
const { register, login } = require("../Handlers/Userhandler");

const UserRouter=express.Router();

UserRouter.post("/user/register",register);
UserRouter.post("/user/login",login);

module.exports=UserRouter;