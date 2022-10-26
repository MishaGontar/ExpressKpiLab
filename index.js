import express from 'express';
import mongoose from "mongoose";

const app = express()
const PORT = 8000
const DB_URL = "mongodb+srv://admin:admin@cluster0.1peuh56.mongodb.net/?retryWrites=true&w=majority"

app.use(express.json())

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => console.log(`SERVER started on port ${PORT}`))
  } catch (e) {
    console.log(`Something went wrong! ${e}`)
  }
}

await startApp()