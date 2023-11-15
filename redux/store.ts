import {configureStore} from "@reduxjs/toolkit"
import productSlice from "./productSlice"
import userSlice from "./userSlice"
import modalSlice from "./modalSlice"
import  fetchTransactionHistory  from "./historySlice"

export const store = configureStore({
    reducer: {
        product: productSlice,
        user: userSlice,
        modal: modalSlice,
        transaction: fetchTransactionHistory
    }
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch 