import express from 'express';
import mongoose from "mongoose";
import userRouter from "./Routers/UserRouter.js";
import categoryRouter from "./Routers/CatagoryRouter.js";

const app = express()
const PORT = 8000
const DB_URL = "mongodb+srv://admin:admin@cluster0.1peuh56.mongodb.net/?retryWrites=true&w=majority"

app.use(express.json())
app.use(userRouter)
app.use(categoryRouter)

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => console.log(`SERVER started on port ${PORT}`))
  } catch (e) {
    console.log(`Something went wrong! ${e}`)
  }
}

await startApp()