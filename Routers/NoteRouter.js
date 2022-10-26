import express from "express";
import NoteController from "../Controller/NoteController.js";

const noteRouter = new express

noteRouter.post("/note", NoteController.create)
noteRouter.get("/note/:user_id", NoteController.getAllNotesByIdUser)
noteRouter.get("/note/:user_id/:category_id",
    NoteController.getAllNotesByIdUserAndIdCategory)

export default noteRouter