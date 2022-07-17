const express=require("express");
const{Router}=require("express");
const { model } = require("mongoose");
const { fetchAllComments, createComments, updateComment, deleteComment } = require("../Handlers/CommentsHandler");

const CommentsRouter=express.Router();

CommentsRouter.get("/comments",fetchAllComments);
CommentsRouter.post("/comments",createComments);
CommentsRouter.put("/comments/comId=:id",updateComment);
CommentsRouter.delete("/comments/comId",deleteComment);

module.exports=CommentsRouter;