import mongoose from "mongoose";

const Currency = new mongoose.Schema({
    name: {type: String, required: true}
})
export default mongoose.model("Currency", Currency)

