import { BaseHttpResponse } from "../../../lib/BaseHttpResponse.js";

export default class GetAllPosts {
  constructor(repository) {
    this.repository = repository;
  }

  execute = async () => {
    try {
      let posts = await this.repository.find();
      return BaseHttpResponse.success(200, posts);
    } catch (error) {
      return BaseHttpResponse.failed(500, "failed get posts");
    }
  };
}
