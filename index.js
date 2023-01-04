import express from 'express';
import mongoose from "mongoose";
import userRouter from "./Routers/UserRouter.js";
import categoryRouter from "./Routers/CatagoryRouter.js";
import noteRouter from "./Routers/NoteRouter.js";
import dotenv from "dotenv";
import authRouter from "./Routers/AuthRouter.js";
import currencyRouter from "./Routers/CurrencyRouter.js";
import AuthController from "./Controller/AuthController.js";

dotenv.config();

const app = express()
const PORT = process.env.PORT || 8000
const DB_URL = "mongodb+srv://admin:admin@cluster0.gy2tj9g.mongodb.net/?retryWrites=true&w=majority"
const routersWithoutAuth = [userRouter, authRouter]
const routersNeedAuth = [categoryRouter, noteRouter, currencyRouter]
app.use(express.json())

routersWithoutAuth.forEach(router => app.use(router))
app.use(AuthController.authenticateToken)
routersNeedAuth.forEach(router => app.use(router))

const startApp = async () => {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`SERVER started on port ${PORT}`))
    } catch (e) {
        console.log(`Something went wrong! ${e}`)
    }
}

await startApp()