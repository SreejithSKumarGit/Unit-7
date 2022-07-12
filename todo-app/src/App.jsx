
import './App.css';
import React from 'react';
import {v4 as uuid} from "uuid"

function App() {
const[input,setInput]=React.useState("");
const [todo,setTodo]=React.useState([])
const handleAdd=()=>
{
  let data={
    "id":uuid(),
    "title":input,
    "status":false,
  }
  fetch(`http://localhost:3001/todos`,{
    method:"POST",
    body:JSON.stringify(data),
    headers:{"Content-Type":"Application/json"}
  })
  setInput("")
}
const handleDelete=(id)=>
{
  fetch(`http://localhost:3001/todos/${id}`,{
    method:"DELETE",
    headers:{"Content-Type":"Application/json"}
  })
}
const handleToggle=(item)=>
{


  fetch(`http://localhost/todos/${item.id}`,{
    method:"PATCH",
    body:JSON.stringify({"status":!item.status}),
    headers:{"Content-Type":"Application/json"}
  })
}

React.useEffect(()=>
{
  fetch(`http://localhost:3001/todos`)
  .then((res)=>res.json())
  .then((res)=>
  {
    setTodo(res);
  })
},[todo])
;
  return (
    <div className="App">
      <h1>Create TODO</h1>
      <input 
        type="text"
        value={input}
        placeholder="Enter you TODOs"
        onChange={(e)=>setInput(e.target.value)}
         />
      <button onClick={handleAdd}>ADD</button>
      {
        todo.map((item)=>
        (
          <div key={item.id} style={{display:"flex", justifyContent:"space-between",gap:"10px",width:"40%",margin:"auto"}}>
            <h1>{item.title}</h1>
            <div style={{display:"flex",gap:"20px",alignItems:"center"}}>
            <button onClick={()=>{handleToggle(item.id)}} >{item.status?"Done":"Not Complete"}</button>
            <button onClick={()=>{handleDelete(item)}} >Delete</button>
            </div>
          </div>
          
        ))
      }
      
    </div>
  );
}

export default App;
