import UserModel from "../../../dbContext/mongoose/user.model.js";

export default class AuthRepositoryMongoose {
  constructor() {
    this.model = UserModel;
  }

  find = async () => await this.model.find();

  findOne = async (filter) => this.model.findOne(filter);

  save = async () => this.model.save();
}
