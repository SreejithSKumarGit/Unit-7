const express=require("express");
const cors=require("cors");
const {getAllTodos,
       createTodo,
       deleteTodo,
       toggleTodo}=require("./handlers")

const app=express();
app.use(cors());
app.use(express.json());

app.get("/todos",getAllTodos);
app.post("/todos",createTodo);
app.delete("/todos/:id",deleteTodo);
app.patch("todos/:id",toggleTodo);

app.listen(3001);
