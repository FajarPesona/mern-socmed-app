import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

//express app template

export default class ExpressApp {
  constructor(dependencies) {
    this.dependencies = dependencies;
    console.log("Welcome to Express App");
    this.setup();
  }

  async setup() {
    const app = express();
    // // middleware
    app.use(bodyParser.json({ limit: "30mb", extended: true }));
    app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
    app.use(cors());
    // // to serve images inside public folder
    app.use(express.static("public"));
    app.use("/images", express.static("images"));

    dotenv.config();
    const PORT = process.env.PORT;
    const CONNECTION = process.env.MONGODB_CONNECTION || 8000;

    if (await this.dependencies.dbContext.connect()) {
      app.listen(PORT, () => console.log(`Listening at Port ${PORT}`));
      this.dependencies.routers.forEach((router) => {
        app.use(router.url, router.create());
      });
    }
  }
}
