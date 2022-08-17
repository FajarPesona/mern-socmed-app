import { BaseHttpResponse } from "../../../lib/BaseHttpResponse.js";

export default class LikePost {
  constructor(repository) {
    this.repository = repository;
  }

  execute = async (body, params) => {
    const id = params.id;
    const { userId } = body;
    try {
      const post = await this.repository.findById(id);
      if (post.likes.includes(userId)) {
        await post.updateOne({ $pull: { likes: userId } });
        return BaseHttpResponse.success(200, "Post disliked");
      } else {
        await post.updateOne({ $push: { likes: userId } });
        return BaseHttpResponse.success(200, "Post liked");
      }
    } catch (error) {
      return BaseHttpResponse.failed(500, error.message);
    }
  };
}
