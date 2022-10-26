import User from "../Schemas/UserSchema.js";

class UserService {

  async create(params) {
    return User.create(params);
  }
}

export default new UserService()