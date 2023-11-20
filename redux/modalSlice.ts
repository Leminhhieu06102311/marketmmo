import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface modalState {
  status: boolean;
  name: string;
}

const initialState: modalState = {
  status: false,
  name: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<string>) => {
      if (state.name === action.payload && state.status === true) {
        // Nếu toggle rating đã được bật và người dùng nhấp lại, tắt modal rating
        state.status = false;
        state.name = "";
      } else if (state.name === "rating" && state.status === true) {
        // Nếu toggle rating đã được bật và người dùng nhấp vào toggle khác, tắt modal rating và mở modal mới
        state.status = true;
        state.name = action.payload;
      } else {
        // Mở modal rating và đặt tên toggle là "rating"
        state.status = true;
        state.name = "rating";
      }
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;