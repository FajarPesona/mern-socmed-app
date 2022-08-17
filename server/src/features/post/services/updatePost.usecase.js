import { BaseHttpResponse } from "../../../lib/BaseHttpResponse.js";

export default class UpdatePost {
  constructor(repository) {
    this.repository = repository;
  }

  execute = async (body, params) => {
    console.log(body, params);
    const postId = params.id;
    const { userId } = body;

    try {
      const post = await this.repository.findById(postId);
      if (post.userId === userId) {
        await post.updateOne({ $set: body });
        return BaseHttpResponse.success(200, "Post updated!");
      } else {
        return BaseHttpResponse.failed(500, "Authentication failed");
      }
    } catch (error) {
      return BaseHttpResponse.failed(500, error.message);
    }
  };
}
