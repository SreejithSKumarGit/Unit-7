const {faker} =require("@faker-js/faker");
const connectDatabase=require("../Database/index");
const Blogs=require("../Database/Blogs");
const Users = require("../Database/Users");

async function UsersData(count)
{
    const blogs= await Blogs.find();

    for(var i=0;i<count;i++)
    {
        const user={
            name:faker.name.firstName()+" "+faker.name.lastName(),
            email:faker.internet.email(),
            social_profile:{
                linkedIn:faker.internet.email(),
                facebook:faker.internet.email(),
                twiter:faker.internet.email(),
                github:faker.internet.email(),
                instagram:faker.internet.email()
            },
            addresses:[
                {
                    line1:faker.address.buildingNumber(),
                    city:faker.address.cityName(),
                    State:faker.address.state(),
                    pincode:faker.random.numeric(),
                }
            ],
            blog_id:[
                {
                    id:blogs[Math.floor(Math.random()*25)]._id
                },
                {
                    id:blogs[Math.floor(Math.random()*25)]._id
                }
            ]

        }
        await Users.create(user);
    }
}


connectDatabase()
.then(()=>
{
    UsersData(50);
})