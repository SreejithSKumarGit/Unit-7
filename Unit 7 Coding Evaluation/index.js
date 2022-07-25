const express=require("express");
const cors=require("cors");
const connectDatabase = require("./Backend/Database");
const UserRouter = require("./Backend/Routers/UserRouter");
const NotesRouter = require("./Backend/Routers/NotesRouter");

const app=express();
app.use(cors());
app.use(express.json());
app.use(UserRouter);
app.use(NotesRouter);



connectDatabase()
.then(()=>
{app.listen(3001,()=>
{
    console.log("Server has been connected to port 3001");
})
})