import UserService from "../Service/UserService.js";
import bcrypt from "bcrypt";

class UserController {

    async create(req, res) {
        try {
            const {username, password} = req.body
            const isExist = await UserService.getUser({username});

            if (isExist) return res.status(400).json("Вже є такий користувач !")
            if (!password || !username) return res.status(500).json("Введіть будь ласка коректні дані")

            const hashPassword = bcrypt.hashSync(password, 7)
            const user = await UserService.create({username: username, password: hashPassword})
            res.status(200).json(user)
        } catch (e) {
            console.log(e)
            res.status(500).json("Не можемо створити користувача!")
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