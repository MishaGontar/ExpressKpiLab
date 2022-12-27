import mongoose from "mongoose";

const Currency = new mongoose.Schema({
    shortname: {type: String, required: true, minLength: 2},
    value: {type: String, required: true},
})
export default mongoose.model("Currency", Currency)

