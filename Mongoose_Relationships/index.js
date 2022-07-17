const express=require("express");
const cors=require("cors");
const connectDatabase =require("./Database/index")
const UsersRouter=require("./Routers/UsersRouter");
const BlogsRouter=require("./Routers/BlogsRouter");
const CategoryRouter = require("./Routers/CategoryRouter");
const CommentsRouter = require("./Routers/CommentsRouter");
const LikesRouter = require("./Routers/LikesRouter");

const app=express();
app.use(express.json());
app.use(cors());
app.use(UsersRouter);
app.use(BlogsRouter);
app.use(CategoryRouter);
app.use(CommentsRouter);
app.use(LikesRouter);

connectDatabase()
.then(()=>
{
    app.listen(3001,()=>
    {
        console.log("Server has been connected to port 3001");
    })
})
