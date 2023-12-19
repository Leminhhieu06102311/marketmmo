import { getUser } from "@/services/user";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'
interface userState {
 statusRating: boolean
}

export const  initialState: userState = {
  statusRating: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setStatusRating: (state,action : PayloadAction<boolean>) => {
      state.statusRating = action.payload

    }
  },
 
});
export const { setStatusRating} = userSlice.actions
export default userSlice.reducer;
