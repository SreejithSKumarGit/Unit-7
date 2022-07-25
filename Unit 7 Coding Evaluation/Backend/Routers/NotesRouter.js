const express=require("express");
const {Router}=require("express");
const { createNotes, fetchallNotesofuser, updateNotes, deleteNotes } = require("../Handlers/NotesHandler");

const NotesRouter=express.Router();

NotesRouter.post("/notes",createNotes);
NotesRouter.post("/notes/user",fetchallNotesofuser);
NotesRouter.get("/notes/update/:id",updateNotes);
NotesRouter.get("/notes/delete/:id",deleteNotes);

module.exports=NotesRouter;