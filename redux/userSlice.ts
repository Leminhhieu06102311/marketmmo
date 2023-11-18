import { getUser } from "@/services/user";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'
interface userState {
  name: string;
  id: string;
  isLoggedIn: boolean;
  sortType:null | string;
}

export const  initialState: userState = {
  name: "",
  id: "",
  isLoggedIn: Boolean(Cookies.get('access_token')),
  sortType: null,
};
export const sortReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case 'SET_SORT_TYPE':
      return {
        ...state,
        sortType: action.payload,
      };
    default:
      return state;
  }
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedIn: (state, action : PayloadAction<boolean>) => {
        console.log(state.isLoggedIn)
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
export const { setLoggedIn} = userSlice.actions
export default userSlice.reducer;
