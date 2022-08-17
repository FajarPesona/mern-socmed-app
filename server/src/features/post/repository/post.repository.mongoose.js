import mongoose from "mongoose";
import PostModel from "../../../dbContext/mongoose/post.model.js";
import UserModel from "../../../dbContext/mongoose/user.model.js";

export default class PostRepositoryMongoose {
  constructor() {
    this.model = PostModel;
  }

  findById = async (id) => await this.model.findById(id);

  find = async () => await this.model.find();

  findExec = async (filter) => await this.model.find(filter).exec();

  save = async () => this.model.save();

  //   findOne = async (filter) => this.model.findOne(filter);

  findByIdAndDelete = async (id) => this.model.findByIdAndDelete(id);

  deleteMany = async (id) => this.model.deleteMany();

  findByIdAndUpdate = async (id, data) =>
    this.model.findByIdAndUpdate(id, data, { new: true });

  getTimelinePosts = async (userId) => {
    const currentUserPosts = await this.model.find({ userId: userId });

    const followingPosts = await UserModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts",
        },
      },
      {
        $project: {
          followingPosts: 1,
          _id: 0,
        },
      },
    ]);

    return currentUserPosts
      .concat(...followingPosts[0].followingPosts)
      .sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
  };
}
