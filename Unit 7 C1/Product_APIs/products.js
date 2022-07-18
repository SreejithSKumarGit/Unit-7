const express=require("express");
const fs=require("fs");
const products=require("./products.json");

const app=express();
app.use(express.json());

//Get all products
app.get("/products",(req,res,next)=>
{
    let rawdata = fs.readFileSync("./products.json");
    let student = JSON.parse(rawdata);
    res.send(student);
    
})

//Create a product
app.post("/products/create",(req,res,next)=>
{
    const body=req.body;
    let response = fs.readFileSync("./products.json");
    let productArr = JSON.parse(response);
    let count=productArr.products.length;
    const data={
        "id":count+1,
        "title":body.title,
        "price":body.price
    }
    productArr.products.push(data);
    let new_data=JSON.stringify(productArr);

    fs.writeFileSync("./products.json",new_data);
    res.send(new_data);
})

//Updating product data

app.put("/products/:productId",(req,res,next)=>
{
    const productId=req.params.productId;
    
    const body=req.body;
    let response = fs.readFileSync("./products.json");
    let productArr = JSON.parse(response);
    productArr.products.forEach(element => {
        if(element.id==productId)
        {
            element.id=productId;
           
            element.title=body.title;
            
            element.price=body.price
            
        }
    });
    let new_data=JSON.stringify(productArr);
    fs.writeFileSync("./products.json",new_data);
    res.send(new_data);
})

//Delete a product

app.delete("/products/:productId",(req,res,next)=>
{
    const {productId}=req.params;
    let response = fs.readFileSync("./products.json");
    let productArr = JSON.parse(response);
    let index=-1;
    productArr.products.forEach((element,i) => {
        if(element.id==productId)
        {
            index=i;  
        }
    });
    productArr.products.splice(index,1);
    let new_data=JSON.stringify(productArr);
    fs.writeFileSync("./products.json",new_data);
    res.send(new_data);
})


app.listen(3001);