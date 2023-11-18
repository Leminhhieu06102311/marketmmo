import { getUser } from "@/services/user";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'
interface userState {
  name: string;
  id: string;
  access_token: string,
  isLoggedIn: boolean,
  isAddToCart: boolean
}

export const  initialState: userState = {
  name: "",
  id: "",
  access_token: '',
  isAddToCart: false,
  isLoggedIn: Boolean(Cookies.get('access_token'))
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedIn: (state, action : PayloadAction<boolean>) => {
        state.isLoggedIn = action.payload
    },
    setIsAddToCart: (state) => {
      state.isAddToCart = !state.isAddToCart
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state,action) => {
      state.id = action.payload._id
      state.name = action.payload.name
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
export const { setLoggedIn,setIsAddToCart} = userSlice.actions
export default userSlice.reducer;
