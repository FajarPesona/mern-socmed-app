import CreatePost from "./createPost.usecase.js";
import DeletePost from "./deletePost.usecase.js";
import GetAllPosts from "./getAllPosts.usecase.js";
import GetPost from "./getPost.usecase.js";
import UpdatePost from "./updatePost.usecase.js";
import DeleteAllPosts from "./deleteAllPosts.usecase.js";
import LikePost from "./likePost.usecase.js";
import GetTimelinePosts from "./getTimelinePosts.usecase.js";

const postServices = (repository) => {
  return Object.freeze({
    getAllPosts: new GetAllPosts(repository),
    getPost: new GetPost(repository),
    createPost: new CreatePost(repository),
    updatePost: new UpdatePost(repository),
    deletePost: new DeletePost(repository),
    deleteAllPosts: new DeleteAllPosts(repository),
    likePost: new LikePost(repository),
    getTimelinePosts: new GetTimelinePosts(repository),
  });
};

export default postServices;
