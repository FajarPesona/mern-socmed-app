export default class UserController {
  constructor(service) {
    this.service = service;
  }

  getUser = async (req, res) => {
    const response = await this.service.getUser.execute(req.params);
    res.status(response.statusCode).json(response);
  };

  getAllUsers = async (req, res) => {
    const response = await this.service.getAllUsers.execute(req);
    res.status(response.statusCode).json(response);
  };

  updateUser = async (req, res) => {
    const response = await this.service.updateUser.execute(
      req.body,
      req.params
    );
    res.status(200).json(response);
  };

  deleteUser = async (req, res) => {
    const response = await this.service.deleteUser.execute(
      req.body,
      req.params
    );
    res.status(response.statusCode).json(response);
  };

  deleteAllUsers = async (req, res) => {
    const response = await this.service.deleteAllUsers.execute();
    res.status(response.statusCode).json(response);
  };

  followUser = async (req, res) => {
    const response = await this.service.followUser.execute(
      req.body,
      req.params
    );
    res.status(response.statusCode).json(response);
  };

  unfollowUser = async (req, res) => {
    const response = await this.service.unfollowUser.execute(
      req.body,
      req.params
    );
    res.status(response.statusCode).json(response);
  };
}
