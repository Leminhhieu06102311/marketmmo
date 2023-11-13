import { createSlice } from "@reduxjs/toolkit";

interface notiState {
    isNoti: boolean
}

const initialState : notiState = {
    isNoti: false
}

const notiSlice = createSlice({
    name: 'noti',
    initialState,
    reducers: {
        showNoti: (state) => {
            state.isNoti = true
        },
        hideNoti: (state) => {
            state.isNoti = false
        }
    }
})
export const {showNoti, hideNoti} = notiSlice.actions
export default notiSlice.reducer