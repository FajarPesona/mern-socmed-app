import express from "express";
import AuthController from "../../features/auth/auth.controller.js";
import AuthRepositoryMongoose from "../../features/auth/repository/auth.repository.mongoose.js";
import authUseCases from "../../features/auth/usecases/auth.usecases.js";
import { EncryptionBcrypt } from "../../lib/EncryptionBcrypt.js";
import JWTTokenGenerator from "../../lib/JWTTokenGenerator.js";

export default class AuthRouter {
  static url = "/api/auth";

  static create() {
    const encrypt = new EncryptionBcrypt();
    const tokenGen = new JWTTokenGenerator();
    const repository = new AuthRepositoryMongoose();
    const usecases = authUseCases(repository, encrypt, tokenGen);
    const controller = new AuthController(usecases);

    const router = express.Router();

    router.post("/register", controller.registerUser);
    router.post("/login", controller.login);

    return router;
  }
}
