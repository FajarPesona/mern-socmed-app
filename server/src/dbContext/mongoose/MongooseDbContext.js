import mongoose from "mongoose";
import UserModel from "./user.model.js";

export default class MongooseDBContext {
  async connect() {
    const CONNECTION = process.env.MONGODB_CONNECTION || 8000;
    return mongoose
      .connect(CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("db connect succcessfully");
        return true;
      })
      .catch((err) => {
        console.log("db connect failed:", err.codeName);
        return false;
      });
  }

  get User() {
    return UserModel;
  }
}
