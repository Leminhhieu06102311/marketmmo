// import { getTransactionHistory } from "@/services/transactionHistory";
// import { getUser } from "@/services/user";

// import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import Cookies from "js-cookie";

// interface userState {
//   isLoggedIn: boolean;
//   transactionHistory: any[];
// }

// export const initialState: userState = {
//   isLoggedIn: Boolean(Cookies.get("access_token")),
//   transactionHistory: [],
// };

// export const userSlice = createSlice({
//   name: "history",
//   initialState,
//   reducers: {
//     setLoggedIn: (state, action: PayloadAction<boolean>) => {
//       console.log(state.isLoggedIn);
//       state.isLoggedIn = action.payload;
//     },
//     setTransaction: (state, action : PayloadAction<any>) => {
//       state.transactionHistory = action.payload
//   }
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchTransactionHistory.fulfilled, (state, action) => {
//       state.transactionHistory = action.payload;
//       return action.payload;
//     });
//   },
// });


// export const fetchTransactionHistory = createAsyncThunk(
//   "history/fetchTransactionHistory",
//   async (access_token: string, thunkAPI) => {
//     const response: any = await getTransactionHistory(access_token);
//     return response;
//   }
// );

// export const { setLoggedIn } = userSlice.actions;
// export const { setTransaction } = userSlice.actions;

// export default userSlice.reducer;