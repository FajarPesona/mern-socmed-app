import { BaseHttpResponse } from "../../../lib/BaseHttpResponse.js";

export default class CreatePost {
  constructor(repository) {
    this.repository = repository;
  }

  execute = async (body) => {
    const newPost = new this.repository.model(body);
    try {
      await newPost.save();
      return BaseHttpResponse.success(200, newPost);
    } catch (error) {
      return BaseHttpResponse.failed(500, error.message);
    }
  };
}
