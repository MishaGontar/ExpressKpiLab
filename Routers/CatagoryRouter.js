import express from "express";
import CategoryController from "../Controller/CategoryController.js";
import AuthController from "../Controller/AuthController.js";

const categoryRouter = new express

categoryRouter.post('/category', AuthController.authenticateToken, CategoryController.create)
categoryRouter.get('/category', AuthController.authenticateToken, CategoryController.getAll)

export default categoryRouter