import mongoose, {Schema} from "mongoose";

const Note = new mongoose.Schema({
  id_user: {type: Schema.Types.ObjectId, ref: "User", required: true},
  id_category: {type: Schema.Types.ObjectId, ref: "Category", required: true},
  date: Date,
  costs: {type: Number, required: true}
})

export default mongoose.model('Note',Note)