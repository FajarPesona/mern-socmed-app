import express from "express";
import PostController from "../../features/post/post.controller.js";
import PostRepositoryMongoose from "../../features/post/repository/post.repository.mongoose.js";
import postServices from "../../features/post/services/post.service.js";

export default class PostRouter {
  static url = "/api/posts";
  static create = () => {
    const repository = new PostRepositoryMongoose();
    const service = postServices(repository);
    const controller = new PostController(service);

    const router = express.Router();

    router.post("/", controller.createPost);
    router.get("/", controller.getAllPosts);
    router.get("/:id", controller.getPost);
    router.put("/:id", controller.updatePost);
    router.delete("/:id", controller.deletePost);
    router.delete("/", controller.deleteAllPosts);
    router.put("/:id/like", controller.likePost);
    router.get("/:id/timeline", controller.getTimelinePosts);

    return router;
  };
}
