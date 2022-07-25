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
            avatar:faker.image.avatar(),
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

        }
        await Users.create(user);
    }
}

async function deleteUserData()
{
    await Users.deleteMany();
}


connectDatabase()
.then(()=>
{
    UsersData(25);
    //deleteUserData();
})