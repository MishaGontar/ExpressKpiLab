import User from "../Schemas/UserSchema.js";

class UserService {

    async create(params) {
        return User.create(params);
    }

    async getAll() {
        return User.find({},"-password").populate({path: 'currency'});
    }

    async getUser(filter) {
        return User.findOne(filter);
    }
}

export default new UserService()