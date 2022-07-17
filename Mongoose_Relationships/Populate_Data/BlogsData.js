const { faker } = require('@faker-js/faker');
const connectDatabase=require("../Database/index");
const Category=require("../Database/Category")
const Blogs=require("../Database/Blogs");

async function BlogData(count)
{
    const category=await Category.find();
    
    for(var i=0;i<count;i++)
    {
        const blog={
            title:faker.random.word(),
            body:faker.lorem.paragraph(8),
            category_ids:[{
                id: category[Math.floor(Math.random()*10)]._id
             }]
        }
        await Blogs.create(blog);
    }
    
}
connectDatabase()
.then(()=>
{
    BlogData(25);
})

