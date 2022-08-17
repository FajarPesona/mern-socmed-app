import { BaseHttpResponse } from "../../../lib/BaseHttpResponse.js";

export default class DeleteAllPosts {
  constructor(repository) {
    this.repository = repository;
  }

  execute = async (params) => {
    return BaseHttpResponse.success(200, { usecase: "DeleteAllPosts" });
  };
}
