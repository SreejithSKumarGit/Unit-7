const {faker} =require("@faker-js/faker");
const connectDatabase = require("../Database/index");
const Blogs=require("../Database/Blogs");
const Users=require("../Database/Users");
const Comments =require("../Database/Comments");


async function CommentsData(count)
{
    const users=await Users.find();
    const blogs=await Blogs.find();

    for(var i=0;i<count;i++)
    {
        const comment={
            blog_id:blogs[Math.floor(Math.random()*50)]._id,
            user_id:users[Math.floor(Math.random()*25)]._id,
            message:faker.lorem.sentence(1),
            rating:Math.floor(Math.random()*5)
        }
        await Comments.create(comment);
    }
}
async function deleteCommentsData()
{
    await Comments.deleteMany();
}

connectDatabase()
.then(()=>
{
    
    CommentsData(80);
    //deleteCommentsData();
})