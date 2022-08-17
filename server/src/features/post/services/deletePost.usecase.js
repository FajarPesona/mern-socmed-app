import { BaseHttpResponse } from "../../../lib/BaseHttpResponse.js";

export default class DeletePost {
  constructor(repository) {
    this.repository = repository;
  }

  execute = async (body, params) => {
    const id = params.id;
    const { userId } = body;

    try {
      const post = await this.repository.findById(id);
      if (post.userId === userId) {
        await post.deleteOne();
        return BaseHttpResponse.success(200, { usecase: "Post deleted." });
      } else {
        return BaseHttpResponse.failed(403, "Action forbidden");
      }
    } catch (error) {
      return BaseHttpResponse.failed(500, error.message);
    }
  };
}
