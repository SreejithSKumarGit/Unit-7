const mongoose=require("mongoose");

async function connectDatabase()
{
    const dbURI='mongodb://127.0.0.1:27017/Movies';
    try {
        
        const res=await mongoose.connect(dbURI);
        console.log("Database connection successfull");
    } catch (error) {
        console.log("Error connecting to Datbase",error);
    }
}

module.exports=connectDatabase;