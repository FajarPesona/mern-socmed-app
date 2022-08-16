import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await axios.get("http://localhost:5000/user");
  return response.data;
});

const userEntity = createEntityAdapter({
  selectId: (user) => user.id,
});

const userSlice = createSlice({
  name: "user",
  initialState: userEntity.getInitialState(),
  reducers: {
    register: (state, action) => {},
  },
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      userEntity.setAll(state, action.payload);
    },
  },
});

export const userSelectors = userEntity.getSelectors((state) => state.user);
export const { register } = userSlice.actions;
export default userSlice.reducer;

// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     firstName: "aden",
//     lastName: "wijaha",
//     username: "adenwijaha",
//     password: "123",
//   },
//   reducers: {
//     register: (state, action) => {},
//   },
// });
