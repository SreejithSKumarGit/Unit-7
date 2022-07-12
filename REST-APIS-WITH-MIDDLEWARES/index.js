const express=require('express');

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
 
function allBooks(req,res,next)
{
    console.log("Fetching all books");
    next();
}
let name;
function singleBook(req,res,next)
{
    name=req.params.title;
    next();
}



app.get("/books",allBooks,(req,res)=>
{
    res.send(books)
})

app.get("/books/:title",singleBook,(req,res)=>
{
    res.send({bookName:name});
})
app.listen(3000)