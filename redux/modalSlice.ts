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
      switch (state.name) {
        case "":
          state.status = !state.status;
          state.name = action.payload;

          break;
        case action.payload:
          state.status = !state.status;
          state.name = ''
          break;
        default:
          state.name = "";
          state.status = false;
          state.name = action.payload
          state.status = true
          break;
      }
    },
  },
});
export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
