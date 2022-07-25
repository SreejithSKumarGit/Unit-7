const {Router}=require("express");
const express=require("express");
const { fetchAllUsers, createUser, updateUserData, deleteUserData, login, getLoggedInUser } = require("../Handlers/UsersHandler");

const UsersRouter=express.Router();

UsersRouter.get("/users",fetchAllUsers);
UsersRouter.post("/users",createUser);
UsersRouter.post("/users/login",login);
UsersRouter.post("/users/getloggedinuser",getLoggedInUser);
UsersRouter.put("/users/UserId=:id",updateUserData);
UsersRouter.delete("users/UserId=:id",deleteUserData);

module.exports=UsersRouter;