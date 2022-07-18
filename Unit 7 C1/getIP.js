const express=require("express");
const dns=require("dns");

const app=express();

app.use(express.json());

function getIP(req,res,next)
{
    const body=req.body;

    dns.lookup(body.website_name,(err,address)=>
    {
        return res.json({IP_address:address});
    })

}

app.post("/getmeip",getIP);


app.listen(3001,()=>
{
    console.log("Server has been connected to port 3001")
})