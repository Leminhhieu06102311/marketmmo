import {configureStore} from "@reduxjs/toolkit"
import productSlice from "./productSlice"
import userSlice from "./userSlice"
import modalSlice from "./modalSlice"

export const store = configureStore({
    reducer: {
        product: productSlice,
        user: userSlice,
        modal: modalSlice,
    }
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch 