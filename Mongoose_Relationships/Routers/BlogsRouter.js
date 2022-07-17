const express=require("express");
const {Router}=require("express");
const { fetchAllBlogs, createBlogs, updateBlog, deleteBlog } = require("../Handlers/BlogsHandler");
const BlogsRouter=express.Router();

BlogsRouter.get("/blogs",fetchAllBlogs);
BlogsRouter.post("/blogs",createBlogs);
BlogsRouter.put("/blogs/BlogId=:id",updateBlog);
BlogsRouter.delete("/blogs/BlogId=:id",deleteBlog);

module.exports=BlogsRouter;
