import express from "express";
import UserRepositoryMongoose from "../../features/user/repository/user.repository.mongoose.js";
import userServices from "../../features/user/services/user.service.js";
import UserController from "../../features/user/user.controller.js";
import { EncryptionBcrypt } from "../../lib/EncryptionBcrypt.js";
import JWTTokenGenerator from "../../lib/JWTTokenGenerator.js";

// import { AuthController } from "../../features/auth/auth.controller.js";
// import AuthRepositoryMongoose from "../../features/auth/repository/auth.repository.mongoose.js";
// import authUseCases from "../../features/auth/usecases/auth.usecases.js";
// import { EncryptionBcrypt } from "../../lib/EncryptionBcrypt.js";
// import JWTTokenGenerator from "../../lib/JWTTokenGenerator.js";

export default class UserRouter {
  static url = "/api/users";
  static create = () => {
    const encrypt = new EncryptionBcrypt();
    const tokenGen = new JWTTokenGenerator();
    const repository = new UserRepositoryMongoose();
    const service = userServices(repository, encrypt, tokenGen);
    const controller = new UserController(service);

    const router = express.Router();

    router.get("/:id", controller.getUser);
    router.get("/", controller.getAllUsers);
    router.put("/:id", controller.updateUser);
    router.delete("/", controller.deleteAllUsers);
    router.delete("/:id", controller.deleteUser);
    router.put("/:id/follow", controller.followUser);
    router.put("/:id/unfollow", controller.unfollowUser);

    // router.get("/:id", getUser);
    // router.get("/", getAllUsers);
    // router.put("/:id", authMiddleWare, updateUser);
    // router.delete("/:id", authMiddleWare, deleteUser);
    // router.put("/:id/follow", authMiddleWare, followUser);
    // router.put("/:id/unfollow", authMiddleWare, unfollowUser);

    // router.post("/register", controller.registerUser);
    // router.post("/login", controller.login);

    return router;
  };
}
