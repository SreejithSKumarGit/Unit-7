import {Route,Routes} from "react-router-dom"
import './App.css';
import { NavBar } from "./Components/NavBar/NavBar";
import Post from "./Components/Pages/Post";
import Posts from "./Components/Pages/Posts";

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Posts/>}/>
      <Route path="/:postId" element={<Post/>}/>
    </Routes>
    </>
  
  );
}

export default App;
