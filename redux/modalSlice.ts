import { createSlice } from "@reduxjs/toolkit";

interface modalState {
    status: boolean
}
const initialState : modalState = {
    status: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleModal: (state) => {
            state.status = !state.status
        }
    }
})
export const {toggleModal} = modalSlice.actions
export default modalSlice.reducer