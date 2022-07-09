const express=require('express')

const app=express();
const books=[
    {
        "id":1,
        "title":"The It girl",
        "author":"Ruth Ware",
        "year":"2022"
    },
    {
        "id":2,
        "title":"Mind F**ked, When its 4am and you can't stop thinking",
        "author":"Anubhav Agarwal",
        "year":"2022"
    },
    {
        "id":3,
        "title":"Dear Stranger you deserve to be loved",
        "author":"Ashish Bagrecha",
        "year":"2022"
    },
    {
        "id":4,
        "title":"Suspects",
        "author":"Daneille Steel",
        "year":"2022"
    },
]
app.get("/",(req,res)=>
{
    res.send("Hello")
})
app.get("/books",(req,res)=>
{
    res.send(books)
})

app.listen(3001)