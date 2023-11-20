import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ModalState {
  status: boolean;
  name: string;
  rating: number; // Thêm trường rating để lưu giá trị đánh giá
}

const initialState: ModalState = {
  status: false,
  name: "",
  rating: 0,
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
          state.name = "";
          break;
        default:
          state.name = "";
          state.status = false;
          state.name = action.payload;
          state.status = true;
          break;
      }
    },
    setRating: (state, action: PayloadAction<number>) => {
      state.rating = action.payload;
    },
  },
});

export const { toggleModal, setRating } = modalSlice.actions;
export default modalSlice.reducer;