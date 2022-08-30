import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
export const fetchAllProducts = createAsyncThunk("AllProducts/fetchAllProducts", async () => {
        const res = await fetch('https://fakestoreapi.com/products')
                    .then(res => res.json())
                    .then(data => data);
                    return res;
});



export const productSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [],
        ready: false
    },
    reducers: {
        
    },
    extraReducers: {
        [fetchAllProducts.pending] : (state) => {
            console.log("pending");
            console.log(state.ready);
            state.ready = false
        },
        [fetchAllProducts.fulfilled]: (state, action) => {
            state.allProducts = action.payload;
            state.ready = true;
            console.log(state.allProducts);
        },
        [fetchAllProducts.rejected]: () => {
            console.log("rejected");
        }
    }
});

export default productSlice.reducer;