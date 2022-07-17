const {faker}=require("@faker-js/faker");
const Category=require("../Database/Category");
const connectDatabase=require("../Database/index");

async function CategoryData(count)
{
   for(var i=0;i<count;i++)
   {
    const post ={
        name:faker.music.genre()
    }
    await Category.create(post);

   }
    
}

connectDatabase()
.then(()=>
{
    CategoryData(10);
})



