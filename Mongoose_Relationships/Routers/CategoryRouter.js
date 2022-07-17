const {Router}= require("express");
const express=require("express");
const { fetchAllCategory, createCategory, updateCategory, deleteCategory } = require("../Handlers/CategoryHandler");

const CategoryRouter=express.Router();

CategoryRouter.get("/category",fetchAllCategory);
CategoryRouter.post("/category",createCategory);
CategoryRouter.put("/category/catId=:id",updateCategory);
CategoryRouter.delete("/category/catId=:id",deleteCategory);

module.exports=CategoryRouter;