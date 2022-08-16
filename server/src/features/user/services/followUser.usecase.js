import { BaseHttpResponse } from "../../../lib/BaseHttpResponse.js";

export default class FollowUser {
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
        const followUser = await this.repository.findById(id); // yang diikuti
        const followingUser = await this.repository.findById(currentId); //yang mengikuti
        if (!followUser.followers.includes(currentId)) {
          await followUser.updateOne({ $push: { followers: currentId } });
          await followingUser.updateOne({ $push: { following: id } });
          console.log(followingUser.following);

          return BaseHttpResponse.success(200, "User followed!");
        } else {
          return BaseHttpResponse.failed(
            403,
            "you are already following this id"
          );
        }
      } catch (error) {
        return BaseHttpResponse.failed(500, error);
      }
    }
  };
}
