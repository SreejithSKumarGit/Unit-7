import React  from "react";
import { Avatar, Image } from 'antd';

function Posts()
{
    const [posts,setPosts]=React.useState({});


    const getAllPosts=async()=>
    {
        await fetch("http://localhost:3001/blogs")
        .then((res)=>res.json())
        .then((res)=>
        {
            setPosts(res);
            console.log(res);
        })
    }
    React.useEffect(()=>
    {
        getAllPosts();
    },[]);
    return (
        <>
            {
                posts.data?.map((post)=>
                (  <div >
                        <h2>{post.title}</h2>
                        <img style={{width:"100%"}} src={post.image_url} alt="" />
                        <div style={{display:"flex",justifyContent:"",gap:"10px",padding:"0px"}}>
                            <p>Author: {post.user.name}</p>
                            
                            <img style={{width:"30px",borderRadius:"50%"}} src={post.user.avatar} alt=""/>
                        </div>
                        <h4 style={{textAlign:"justify"}}>{post.body}</h4>
                        <hr />
                    </div>
                    
                ))
            }
        </>
        
        
    )
}

export default Posts;