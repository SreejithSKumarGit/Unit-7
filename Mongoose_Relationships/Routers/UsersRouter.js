const {Router}=require("express");
const express=require("express");
const { fetchAllUsers, createUser, updateUserData, deleteUserData } = require("../Handlers/UsersHandler");

const UsersRouter=express.Router();

UsersRouter.get("/users",fetchAllUsers);
UsersRouter.post("/users",createUser);
UsersRouter.put("/users/UserId=:id",updateUserData);
UsersRouter.delete("users/UserId=:id",deleteUserData);

module.exports=UsersRouter;