import User from "../Schemas/UserSchema.js";

class UserService {

    async create(params) {
        return User.create(params);
    }

    async getAll() {
        return User.find().populate({path: 'currency'});
    }
}

export default new UserService()