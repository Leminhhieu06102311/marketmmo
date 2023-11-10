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
        show: (state) => {
            state.isNoti = true
        },
        hide: (state) => {
            state.isNoti = false
        }
    }
})
export const {show, hide} = notiSlice.actions
export default notiSlice.reducer