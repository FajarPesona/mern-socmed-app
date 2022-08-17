import PostModel from "../../dbContext/mongoose/post.model.js";

export default class PostController {
  constructor(service) {
    this.service = service;
  }

  getAllPosts = async (req, res) => {
    // const Post = PostModel;
    // const x = await Post.find();
    // console.log(Post);
    const response = await this.service.getAllPosts.execute();
    res.status(response.statusCode).json(response);
    // res.send("getAllPosts");
  };

  getPost = async (req, res) => {
    const response = await this.service.getPost.execute(req.params);
    res.status(response.statusCode).json(response);
    // res.send("getPost");
  };

  createPost = async (req, res) => {
    const response = await this.service.createPost.execute(req.body);
    res.status(response.statusCode).json(response);
    // res.send("createPost");
  };

  updatePost = async (req, res) => {
    const response = await this.service.updatePost.execute(
      req.body,
      req.params
    );
    res.status(response.statusCode).json(response);
    // res.send("updatePost");
  };

  deletePost = async (req, res) => {
    const response = await this.service.deletePost.execute(
      req.body,
      req.params
    );
    res.status(response.statusCode).json(response);
    // res.send("deletePost");
  };

  deleteAllPosts = async (req, res) => {
    const response = await this.service.deleteAllPosts.execute(req);
    res.status(response.statusCode).json(response);
    // res.send("deleteAllPosts");
  };

  likePost = async (req, res) => {
    const response = await this.service.likePost.execute(req.body, req.params);
    res.status(response.statusCode).json(response);
    // res.send("likePost");
  };

  getTimelinePosts = async (req, res) => {
    const response = await this.service.getTimelinePosts.execute(req.params);
    res.status(response.statusCode).json(response);
    // res.send("getTimelinePosts");
  };
}
