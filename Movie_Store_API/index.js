const express=require("express");
const cors=require("cors");
const connectDatabase=require("./Database/index");
const movieRouter=require("./Router/movieRouter");



const app=express();
app.use(express.json());
app.use(cors());
app.use(movieRouter);

connectDatabase()
.then(()=>
{
    app.listen(3001,()=>
    {
        console.log("Server is running at port 3001");
    })
})
