import UserModel from "../../../dbContext/mongoose/user.model.js";

export default class UserRepositoryMongoose {
  constructor() {
    this.model = UserModel;
  }

  findById = async (id) => await this.model.findById(id);

  find = async () => await this.model.find();

  //   findOne = async (filter) => this.model.findOne(filter);

  findByIdAndDelete = async (id) => this.model.findByIdAndDelete(id);

  deleteAllUsers = async (id) => this.model.deleteMany();

  findByIdAndUpdate = async (id, data) =>
    this.model.findByIdAndUpdate(id, data, { new: true });
}
