import UserService from "../Service/UserService.js";
import bcrypt from "bcrypt";
import AuthService from "../Service/AuthService.js";

class UserController {

    async create(req, res) {
        try {
            const {username, password} = req.body
            const isExist = await UserService.getUser({username});

            if (isExist) return res.status(400).json("Вже є такий користувач !")
            if (!password || !username) return res.status(400).json("Введіть будь ласка коректні дані")

            const hashPassword = bcrypt.hashSync(password, 7)
            await UserService.create({username: username, password: hashPassword})
            return res.status(200).json(AuthService.generateAccessToken({username: username}))
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