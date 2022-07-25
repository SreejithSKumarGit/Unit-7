const {faker} =require("@faker-js/faker");
const connectDatabase = require("../Database/index");
const Blogs=require("../Database/Blogs");
const Users=require("../Database/Users");
const Likes=require("../Database/Likes");



async function LikesData(count)
{
    const users=await Users.find();
    const blogs=await Blogs.find();

    for(var i=0;i<count;i++)
    {
        const like={
            blog_id:blogs[Math.floor(Math.random()*50)]._id,
            user_id:users[Math.floor(Math.random()*25)]._id,
            emoji:faker.internet.emoji()
        }
        await Likes.create(like);
    }
}
async function deleteLikes()
{
    await Likes.deleteMany();
}
connectDatabase()
.then(()=>
{
   LikesData(100);
   //deleteLikes();
})