const { Router } = require("express");
const express=require("express");
const{fetchAllMovies, createMovieData, filterByTitle, filterByRating, searchMovie, sortMovie, updateMovieData, deleteMovieData}=require("../Handlers/movieHandler");
const movieRouter=express.Router();


movieRouter.get("/movies",fetchAllMovies);
movieRouter.post("/movies",createMovieData);
movieRouter.get(`/movie/title=:title`,filterByTitle);
movieRouter.get(`/movie/rating:rating`,filterByRating);
movieRouter.get('/movie/search=:search',searchMovie);
movieRouter.get("/movie/sortBy=:sortfield",sortMovie);
movieRouter.post("/movie/updateByID=:id",updateMovieData);
movieRouter.delete("/movie/deleteByID=:id",deleteMovieData);

module.exports=movieRouter;