import mongoose, {Schema} from "mongoose";

const User = new mongoose.Schema({
    username: {type: String, required: true, minLength: 3, unique: true},
    password: {type: String, required: true, minLength: 3},
    currency: {
        type: Schema.Types.ObjectId, ref: "Currency", required: false,
        default: "63aa0d0dc5a7a10498fb3a1b" //US
    }
})
export default mongoose.model("User", User)
