const mongoose=require("mongoose");

//Defining Schema for Movies

const movieSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    original_language:{
        type:String,
        required:false
    },
    overview:{
        type:String,
        required:false
    },
    popularity:{
        type:Number,
        required:false
    },
    poster_path:{
        type:String,
        required:true,
    },
    release_date:{
        type:Date,
        required:true,
    },
    vote_average:Number,
    vote_count:Number
})

//Creating a Model

const Movie=mongoose.model("Movie",movieSchema);


module.exports=Movie;