import { BaseHttpResponse } from "../../../lib/BaseHttpResponse.js";

export default class DeleteAllUsers {
  constructor(repository) {
    this.repository = repository;
  }
  execute = async () => {
    try {
      const result = await this.repository.deleteAllUsers();
      return BaseHttpResponse.success(200, result);
    } catch (error) {
      return BaseHttpResponse.success(500, error);
    }
  };
}
