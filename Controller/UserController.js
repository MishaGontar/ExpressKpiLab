import UserService from "../Service/UserService.js";

class UserController {

  async create(req, res) {
    try {
      const user = await UserService.create(req.body)
      res.status(200).json(user)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }
}

export default new UserController()