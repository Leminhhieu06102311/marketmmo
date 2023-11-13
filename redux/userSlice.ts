import { getUser } from "@/services/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
interface userState {
  name: string;
  id: string;
}

const initialState: userState = {
  name: "",
  id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    
    
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
