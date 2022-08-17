import ExpressApp from "./src/application/ExpressApp.js";
import AuthRouter from "./src/application/routers/auth.router.js";
import PostRouter from "./src/application/routers/post.router.js";
import UserRouter from "./src/application/routers/user.router.js";
import MongooseDBContext from "./src/dbContext/mongoose/MongooseDbContext.js";

const dependencies = Object.freeze({
  dbContext: new MongooseDBContext(),
  routers: [AuthRouter, UserRouter, PostRouter],
});

new ExpressApp(dependencies);
