import { createSlice } from "@reduxjs/toolkit";
interface userState {
  name: string;
  id: string;
  isLogin: boolean;
}
const checkLogin = () => {
  let result;
  if (typeof localStorage !== "undefined") {
    result = localStorage.getItem("access_token");
  }
  return result ? true : false;
};
const initialState: userState = {
  name: "",
  id: "",
  isLogin: checkLogin(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("access_token");
      state.isLogin = false;
    },
    loginSuccess: (state) => {
      state.isLogin = true;
    },
  },
});
export const { logout, loginSuccess } = userSlice.actions;
export default userSlice.reducer;
