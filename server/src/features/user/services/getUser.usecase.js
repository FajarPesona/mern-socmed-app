import { BaseHttpResponse } from "../../../lib/BaseHttpResponse.js";

export default class GetUser {
  constructor(repository) {
    this.repository = repository;
  }

  execute = async (params) => {
    const id = params.id;

    try {
      const user = await this.repository.findById(id);
      if (user) {
        const { password, ...otherDetails } = user._doc;
        return BaseHttpResponse.success(200, otherDetails);
      } else {
        return BaseHttpResponse.failed(404, "No such User");
      }
    } catch (error) {
      return BaseHttpResponse.failed(404, "No such User");
      // return BaseHttpResponse.failed(500, error);
    }
  };
}
