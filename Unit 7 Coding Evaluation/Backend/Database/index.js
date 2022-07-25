const mongoose=require("mongoose");


async function connectDatabase()
{

    const dbURI="mongodb://127.0.0.1:27017/Notes"
    try {
        await mongoose.connect(dbURI);
        console.log("Database has been successfully connected")
    } catch (error) {
        console.log("Something went wrong");
    }
}

module.exports=connectDatabase;