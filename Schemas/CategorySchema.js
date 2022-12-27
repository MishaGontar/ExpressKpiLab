import mongoose from "mongoose";

const Category = new mongoose.Schema({
    name: {type: String, required: true, minLength: 2}
})
export default mongoose.model("Category", Category)

