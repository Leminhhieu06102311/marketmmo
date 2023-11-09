import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface productState {
    productId: string,
}

const initialState : productState = {
    productId: '654b750853e01dd4f8586b0c',
}
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        PopupDetailProduct: (state,action : PayloadAction<string>) => {
            state.productId = action.payload
        }
    }
})
export const {PopupDetailProduct} = productSlice.actions
export default productSlice.reducer