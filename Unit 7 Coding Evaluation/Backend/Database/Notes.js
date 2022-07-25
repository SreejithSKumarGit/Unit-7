const mongoose=require("mongoose");
const Users=require("./Users");

const notesSchema=new mongoose.Schema({
    title:String,
    note:String,
    lable:String,
    userId:{
        type:mongoose.Types.ObjectId,
        ref:Users
    }
})
const Notes=mongoose.model("Note",notesSchema);

module.exports=Notes;