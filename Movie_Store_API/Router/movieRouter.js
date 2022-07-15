const express=require("express");
const{fetchAllMovies}=require("../Handlers/movieHandler");
const movieRouter=express.Router();


movieRouter.get("/movies",fetchAllMovies);

module.exports=movieRouter;