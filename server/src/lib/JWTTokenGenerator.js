import jwt from "jsonwebtoken";

export default class JWTTokenGenerator {
  createToken(data, secreteKey, exp) {
    return jwt.sign(data, secreteKey, { expiresIn: exp });
  }
}
