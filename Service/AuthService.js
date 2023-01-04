import jwt from "jsonwebtoken";

class AuthService {
    generateAccessToken(username) {
        return jwt.sign(username, process.env.TOKEN_SECRET, {expiresIn: '7d'});
    }
}

export default new AuthService();