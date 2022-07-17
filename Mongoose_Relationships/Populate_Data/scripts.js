const connectDatabase=require("../Database/index");
const CategoryData=require("./CategoryData");


connectDatabase()
.then(()=>
{
    CategoryData(10);
})