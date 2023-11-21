import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface productState {
    productId: string,
    // activeTab detail and comment in product detail
    activeTab: string
}

const initialState : productState = {
    productId: '',
    activeTab: 'detail'
}
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        PopupDetailProduct: (state,action : PayloadAction<string>) => {
            state.productId = action.payload
        },
        setActiveTab: (state, action : PayloadAction<string>) => {
            state.activeTab = action.payload
        }
    }
})
export const {PopupDetailProduct, setActiveTab} = productSlice.actions
export default productSlice.reducer