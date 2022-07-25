const { faker } = require('@faker-js/faker');
const connectDatabase=require("../Database/index");
const Category=require("../Database/Category")
const Blogs=require("../Database/Blogs");
const Users =require("../Database/Users");

async function BlogData(count)
{
    const category=await Category.find();
    const users=await Users.find();
    
    for(var i=0;i<count;i++)
    {
        const blog={
            title:faker.random.words(),
            body:faker.lorem.paragraph(30),
            image_url:faker.image.abstract(),
            category_ids:category[Math.floor(Math.random()*10)]._id
             ,
            user:users[Math.floor(Math.random()*25)]._id
        
        }
        await Blogs.create(blog);
    }
    
}
async function deleteBlogsData()
{
    await Blogs.deleteMany();
}
connectDatabase()
.then(()=>
{
    BlogData(50);
   //deleteBlogsData();
   //console.log(faker.image.avatar());
})

