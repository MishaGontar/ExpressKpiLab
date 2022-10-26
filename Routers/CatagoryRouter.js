import express from "express";
import CategoryController from "../Controller/CategoryController.js";

const categoryRouter = new express

categoryRouter.post('/category', CategoryController.create)

export default categoryRouter