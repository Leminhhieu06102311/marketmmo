import { getUser } from "@/services/user";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'
interface userState {
  name: string;
  id: string;
  access_token: string,
  isLoggedIn: boolean
}

const initialState: userState = {
  name: "",
  id: "",
  access_token: '',
  isLoggedIn: Boolean(Cookies.get('access_token'))
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedIn: (state, action : PayloadAction<boolean>) => {
        state.isLoggedIn = action.payload
    }

  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state,action) => {
      console.log(action.payload)
      return action.payload
    })
  }
});
export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (access_token:string, thunkAPI) => {
    const response : any  = await getUser(access_token)
    return response
  }
)
export const { setLoggedIn} = userSlice.actions
export default userSlice.reducer;
