import express from "express";
import AuthController from "../Controller/AuthController.js";

const authRouter = new express

authRouter.get('/auth/user', AuthController.signup)

export default authRouter