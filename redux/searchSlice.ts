import Product from "@/interfaces/product";
import { getProducts } from "@/services/product";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk(
  'search/fetchProducts', 
  async () => {
  const res = await getProducts()
  return res
})

interface searchState {
  isModalSearch: boolean,
  searchResult: Product[],
  products: Product[]
}
const initialState : searchState = {
  isModalSearch: false,
  searchResult: [],
  products: []
}
const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        filterProducts: (state,action : PayloadAction<string>) => {
          const result = state.products.filter((item) => item.name.toLowerCase().includes(action.payload.toLowerCase()))
          console.log(result)
          state.searchResult = result
        },
        showModalSearch: (state) => {
          state.isModalSearch = true
        },
        hideModalSearch: (state) => {
          state.isModalSearch = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled,(state,action) => {
          state.products = action.payload
          console.log(action.payload)
        })
        
    }
})
export const {filterProducts,showModalSearch,hideModalSearch} = searchSlice.actions
export default searchSlice.reducer