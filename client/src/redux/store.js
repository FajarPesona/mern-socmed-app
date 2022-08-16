import userReducer from "./slices/user.slice.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// const store = 0;

export default store;
