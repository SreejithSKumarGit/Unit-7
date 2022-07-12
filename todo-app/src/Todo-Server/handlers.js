const todos=[];

function getAllTodos(req,res)
{
    res.send(todos);
}

function createTodo(req,res)
{
    todos.push(req.body);
    res.send("Todo has been created.")
}

function deleteTodo(req,res)
{
    let id=req.params.id;
    let index=-1;

    todos.forEach
    ((todo,i)=>
    {
        if(todo.id===id)
        {
            index=i;
            
        }
    })
    if(index===-1)
    {
        return res.send("No todo found");
    }
    todos.splice(index,1);
    res.status(200).send("Todo deleted");
}
function toggleTodo(req,res)
{
    let id=req.params.id;
    let body=req.body;
    console.log(body);
    todos.forEach((todo)=>
    {
        if(todo.id===id)
        {
            todo.status=body.status;
        }
    })
    res.send("Toggled")
}

module.exports={
    getAllTodos,
    createTodo,
    deleteTodo,
    toggleTodo
}