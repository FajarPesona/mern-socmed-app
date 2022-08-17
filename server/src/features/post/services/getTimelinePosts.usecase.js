import { BaseHttpResponse } from "../../../lib/BaseHttpResponse.js";

export default class GetTimelinePosts {
  constructor(repository) {
    this.repository = repository;
  }
  execute = async (params) => {
    const userId = params.id;
    try {
      const currentUserPosts = await this.repository.getTimelinePosts(userId);
      return BaseHttpResponse.success(200, currentUserPosts);
    } catch (error) {
      return BaseHttpResponse.failed(500, error.message);
    }
  };
}
