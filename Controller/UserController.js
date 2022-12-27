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

    async getAll(req, res) {
        try {
            const users = await UserService.getAll()
            res.status(200).json(users)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new UserController()