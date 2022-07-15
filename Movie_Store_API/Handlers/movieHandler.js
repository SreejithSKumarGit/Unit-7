const Movie=require("../Database/Moviesdb");

async function fetchAllMovies(req,res,next)
{
    const movies=await Movie.find();

    return res.send({
        data:movies
    })
}
module.exports={
    fetchAllMovies,
}