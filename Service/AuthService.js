import jwt from "jsonwebtoken";

class AuthService {
    generateAccessToken(username) {
        return jwt.sign(username, process.env.TOKEN_SECRET, {expiresIn: '30d'});
    }
}

export default new AuthService();