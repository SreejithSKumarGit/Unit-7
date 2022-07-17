const mongoose =require("mongoose");


async function connectDatabase()
{
    const dbURI="mongodb://127.0.0.1:27017/Media";
    try {
        let res=await mongoose.connect(dbURI);
        console.log("Database connection is successful");
    } catch (error) {
            console.log("Something went in connecting with the database");
            }
}
module.exports=connectDatabase;