
import {configureStore} from "@reduxjs/toolkit"
import productSlice from "./productSlice"
import userSlice from "./userSlice"
import modalSlice from "./modalSlice"
import searchSlice from "./searchSlice"
import ratingSlice from "./ratingSlice"

export const store = configureStore({
    reducer: {
        product: productSlice,
        user: userSlice,
        modal: modalSlice,
        search: searchSlice,
        rootReducer: userSlice,
        rating: ratingSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;