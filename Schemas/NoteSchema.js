import mongoose, {Schema} from "mongoose";
import moment from "moment";

const Note = new mongoose.Schema({
    user: {type: Schema.Types.ObjectId, ref: "User", required: true},
    category: {type: Schema.Types.ObjectId, ref: "Category", required: true},
    createdDate: {type: String, default: moment().locale('uk').format('llll')},
    costs: {type: Number, required: true},
    currency: {
        type: Schema.Types.ObjectId, ref: "Currency", required: false,
        default: "63aa0d0dc5a7a10498fb3a1b" //US
    }
})

export default mongoose.model('Note', Note)