import express from "express";
import UserController from "../Controller/UserController.js";

const userRouter = new express

userRouter.post('/user', UserController.create)
userRouter.get('/users', UserController.getAll)

export default userRouter