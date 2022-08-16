import { BaseHttpResponse } from "../../../lib/BaseHttpResponse.js";

export default class GetAllUsers {
  constructor(repository) {
    this.repository = repository;
  }

  execute = async () => {
    try {
      let users = await this.repository.find();
      users = users.map((user) => {
        const { password, ...otherDetails } = user._doc;
        return otherDetails;
      });
      return BaseHttpResponse.success(200, users);
      // return BaseHttpResponse.success(200, "otherDetails");
    } catch (error) {
      return BaseHttpResponse.failed(500, error);
    }
  };
}
