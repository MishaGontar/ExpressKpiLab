import express from "express";
import UserController from "../Controller/UserController.js";
import AuthController from "../Controller/AuthController.js";

const userRouter = new express

userRouter.post('/user', UserController.create)
userRouter.get('/users', AuthController.authenticateToken, UserController.getAll)

export default userRouter