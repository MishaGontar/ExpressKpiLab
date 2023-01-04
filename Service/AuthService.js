import jwt from "jsonwebtoken";

class AuthService {
    generateAccessToken(username) {
        return jwt.sign(username, process.env.TOKEN_SECRET, {expiresIn: '1800s'});
    }
}

export default new AuthService();