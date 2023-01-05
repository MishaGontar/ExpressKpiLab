import mongoose, {Schema} from "mongoose";

const User = new mongoose.Schema({
    username: {type: String, required: true, minLength: 3, unique: true},
    password: {type: String, required: true, minLength: 3, select: false},
    currency: {
        type: Schema.Types.ObjectId, ref: "Currency", required: false,
        default: "63b5e5787bc1b324426948ac" //US
    }
})
export default mongoose.model("User", User)
