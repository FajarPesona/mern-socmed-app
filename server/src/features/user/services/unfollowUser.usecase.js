import { BaseHttpResponse } from "../../../lib/BaseHttpResponse.js";

export default class UnfollowUser {
  constructor(repository) {
    this.repository = repository;
  }
  execute = async (body, params) => {
    const id = params.id;
    const { currentId } = body;
    if (currentId === id) {
      return BaseHttpResponse.failed(403, "Action Forbidden");
    } else {
      try {
        const unfollowUser = await this.repository.findById(id);
        const unfollowingUser = await this.repository.findById(currentId);

        if (unfollowUser.followers.includes(currentId)) {
          await unfollowUser.updateOne({ $pull: { followers: currentId } });
          await unfollowingUser.updateOne({ $pull: { following: id } });
          return BaseHttpResponse.success(200, "Unfollowed Successfully!");
        } else {
          return BaseHttpResponse.failed(
            403,
            "You are not following this User"
          );
        }
      } catch (error) {
        return BaseHttpResponse.failed(500, error);
      }
    }
  };
}
