import mongoose, {Schema} from "mongoose";
import moment from "moment";

const Note = new mongoose.Schema({
  user: {type: Schema.Types.ObjectId, ref: "User", required: true},
  category: {type: Schema.Types.ObjectId, ref: "Category", required: true},
  createdDate: {type: String, default: moment().format('llll')},
  costs: {type: Number, required: true}
})

export default mongoose.model('Note', Note)