const { rawListeners } = require("../Database/Moviesdb");
const Movie=require("../Database/Moviesdb");

async function fetchAllMovies(req,res,next)
{
    const movies=await Movie.find();

    return res.send({
        data:movies
    })
}
async function createMovieData(req,res,next)
{
    const data=req.body;
    await Movie.create(data);
    res.send(data);
}
async function updateMovieData(req,res,next)
{
    const {id}=req.params;
    const body=req.body;
    let data=await Movie.findOneAndUpdate({_id:id},body);
    res.send(data);

}
async function deleteMovieData(req,res,next)
{
    const{id}=req.params;
    await Movie.findOneAndDelete({_id:id});
    res.send("Movie Data has been deleted successfully");
}
async function filterByTitle(req,res,next)
{
    const{title}=req.params;
    
    const data=await Movie.find({title:title});
    res.send(data);
}
async function filterByRating(req,res,next)
{
    const{rating}=req.params;
    
    const data =await Movie.find({vote_average:rating});
    res.send(data);

}
async function searchMovie(req,res,next)
{
    const {search}=req.params;

    const data=await Movie.find({title:{$regex:`^${search}`,$options:"$i"}});

    res.send(data);
}
async function sortMovie(req,res,next)
{
    const {sortfield}=req.params;
    let sortValue;
   if(sortfield==="vote_average")
   {
     sortValue=
    {
        vote_average:1
    }
   }
   else if(sortfield==="vote_count")
   {
    sortValue=
    {
        vote_count:1
    }
   }
   else if(sortfield==="id")
   {
    sortValue=
    {
        id:1
    }
   }
    
    
    const data=await Movie.find().sort(sortValue);
    res.send(data);
}
module.exports={
    fetchAllMovies,
    createMovieData,
    filterByTitle,
    filterByRating,
    searchMovie,
    sortMovie,
    updateMovieData,
    deleteMovieData
}