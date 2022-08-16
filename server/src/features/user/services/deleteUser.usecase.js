import { BaseHttpResponse } from "../../../lib/BaseHttpResponse.js";

export default class DeleteUser {
  constructor(repository) {
    this.repository = repository;
  }
  execute = async (body, params) => {
    const id = params.id;
    const { currentUserId, currentUserAdmin } = body;

    if (currentUserId === id || currentUserAdmin) {
      try {
        if (await this.repository.findByIdAndDelete(id))
          return BaseHttpResponse.success(200, {
            msg: "User Deleted Successfully!",
          });
        else return BaseHttpResponse.failed(404, "No such user");
      } catch (error) {
        return BaseHttpResponse.failed(404, "error");
      }
    } else {
      return BaseHttpResponse.failed(403, "Access Denied!");
    }
  };
}
