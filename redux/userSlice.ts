import { getUser } from "@/services/user";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
interface userState {
  name: string;
  id: string;
  isLoggedIn: boolean
}

const initialState: userState = {
  name: "",
  id: "",
  isLoggedIn: false
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
export default userSlice.reducer;
