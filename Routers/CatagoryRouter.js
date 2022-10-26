import express from "express";
import CategoryController from "../Controller/CategoryController.js";

const categoryRouter = new express

categoryRouter.post('/category', CategoryController.create)
categoryRouter.get('/category', CategoryController.getAll)

export default categoryRouter