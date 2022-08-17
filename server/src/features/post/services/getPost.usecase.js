import { BaseHttpResponse } from "../../../lib/BaseHttpResponse.js";

export default class GetPost {
  constructor(repository) {
    this.repository = repository;
  }

  execute = async (params) => {
    const id = params.id;

    try {
      const post = await this.repository.findById(id);
      return BaseHttpResponse.success(200, post);
    } catch (error) {
      return BaseHttpResponse.failed(500, error.message);
    }
  };
}
