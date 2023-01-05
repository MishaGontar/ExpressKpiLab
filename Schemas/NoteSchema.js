import mongoose, {Schema} from "mongoose";
import moment from "moment";

const Note = new mongoose.Schema({
    user: {type: Schema.Types.ObjectId, ref: "User", required: true},
    category: {type: Schema.Types.ObjectId, ref: "Category", required: true},
    createdDate: {type: String, default: moment().locale('uk').format('llll')},
    costs: {type: Number, required: true},
    currency: {
        type: Schema.Types.ObjectId, ref: "Currency", required: false,
        default: "63b5e5787bc1b324426948ac" //US
    }
})

export default mongoose.model('Note', Note)