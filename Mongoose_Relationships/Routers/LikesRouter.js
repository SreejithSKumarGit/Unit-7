const express=require("express");
const {Router}=require("express");
const {fetchAllLikes, createLikes, updateLike, deleteLike}=require("../Handlers/LikesHandler");


const LikesRouter=express.Router();

LikesRouter.get("/likes",fetchAllLikes);
LikesRouter.post("/likes",createLikes);
LikesRouter.put("/likes/likeId=:id",updateLike);
LikesRouter.delete("/likes/likeId=:id",deleteLike);

module.exports=LikesRouter;
