import {configureStore} from "@reduxjs/toolkit"
import productSlice from "./productSlice"
import userSlice from "./userSlice"
import notiSlice from "./notiSlice"

export const store = configureStore({
    reducer: {
        product: productSlice,
        user: userSlice,
        noti: notiSlice
    }
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch 