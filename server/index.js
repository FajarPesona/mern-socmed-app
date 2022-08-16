import ExpressApp from "./src/application/ExpressApp.js";
import AuthRouter from "./src/application/routers/auth.router.js";
import UserRouter from "./src/application/routers/user.router.js";
import MongooseDBContext from "./src/dbContext/mongoose/MongooseDbContext.js";

const dependencies = Object.freeze({
  dbContext: new MongooseDBContext(),
  routers: [AuthRouter, UserRouter],
});

new ExpressApp(dependencies);

// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import mongoose from "mongoose";

// // routes
// import AuthRoute from "./src/routes/auth.route.js";
// // import UserRoute from "./routes/UserRoute.js";
// // import PostRoute from "./routes/PostRoute.js";
// // import UploadRoute from "./routes/UploadRoute.js";
// // import ChatRoute from "./routes/ChatRoute.js";
// // import MessageRoute from "./routes/MessageRoute.js";

// console.log("Hello world");
// const app = express();

// // // middleware
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());
// // // to serve images inside public folder
// app.use(express.static("public"));
// app.use("/images", express.static("images"));

// dotenv.config();
// const PORT = process.env.PORT;

// const CONNECTION = process.env.MONGODB_CONNECTION || 8000;
// mongoose
//   .connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log(`Listening at Port ${PORT}`)))
//   .catch((error) => console.log(`${error} did not connect`));

// app.use("/api/auth", AuthRoute);
// // app.use("/user", UserRoute);
// // app.use("/posts", PostRoute);
// // app.use("/upload", UploadRoute);
// // app.use("/chat", ChatRoute);
// // app.use("/message", MessageRoute);

// // import express from "express";
// // import bodyParser from "body-parser";
// // import mongoose from "mongoose";
// // import cors from "cors";
// // import postRoutes from "./routes/posts.routes.js";

// // const app = express();

// // app.use("/posts", postRoutes);
// // app.use(bodyParser.json({ limit: "30mb", extended: true }));
// // app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// // app.use(cors());

// // const CONNECTION_URL =
// //   "mongodb+srv://AdenW:Almira123@cluster0.cftl30w.mongodb.net/?retryWrites=true&w=majority";

// // const PORT = process.env.PORT || 5000;

// // mongoose
// //   .connect(CONNECTION_URL, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   })
// //   .then(() =>
// //     app.listen(PORT, () => console.log(`server running on port ${PORT}`))
// //   )
// //   .catch((err) => console.log(err.message));

// // // mongoose.set("useFindAndModify", false);
