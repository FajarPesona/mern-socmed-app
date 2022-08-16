import DeleteAllUsers from "./deleteAllUsers.usecase.js";
import DeleteUser from "./deleteUser.usecase.js";
import FollowUser from "./followUser.usecase.js";
import GetAllUsers from "./getAllUsers.usecase.js";
import GetUser from "./getUser.usecase.js";
import UnfollowUser from "./unfollowUser.usecase.js";
import UpdateUser from "./updateUser.usecase.js";

const userServices = (repository, encrypt, tokenGen) => {
  return Object.freeze({
    getAllUsers: new GetAllUsers(repository),
    getUser: new GetUser(repository),
    updateUser: new UpdateUser(repository, encrypt, tokenGen),
    deleteUser: new DeleteUser(repository),
    deleteAllUsers: new DeleteAllUsers(repository),
    followUser: new FollowUser(repository),
    unfollowUser: new UnfollowUser(repository),
  });
};

export default userServices;
