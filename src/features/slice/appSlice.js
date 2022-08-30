import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
export const fetchAllCategories = createAsyncThunk("AllCategories/fetchAllCategories", async () => {
        const res = await fetch("https://fakestoreapi.com/products/categories")
                    .then(res => res.json())
                    .then(data => data);
                    return res;
});

export const fetchSelectedCategory = createAsyncThunk("AllCategories/fetchSelectedCategory", async (cat) => {
    const res = await fetch(`https://fakestoreapi.com/products/category/${cat}`)
                .then(res => res.json())
                .then(data => data);
                return res;
});

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        allCategories: [],
        selectedCategory: [],
        isFulfilled: '',
        cat: '',
        selectedProduct: false,
    },
    reducers: {
        getSelectedCategory: (state, action) => {
            state.cat = action.payload;
            console.log("cattttttttttt", state.cat)
        },
        getProductDetails : (state, action) => {
            state.selectedProduct = action.payload;
            console.log("selected product", state.selectedProduct);
        }
    },
    extraReducers: {
        [fetchAllCategories.pending] : () => {
            console.log("pending");
        },
        [fetchAllCategories.fulfilled]: (state, action) => {
            state.allCategories = action.payload;
            console.log(state.allCategories);
        },
        [fetchAllCategories.rejected]: () => {
            console.log("rejected");
        },

        [fetchSelectedCategory.pending] : (state) => {
            console.log("pending");
            console.log(state.isFulfilled);
            state.isFulfilled = false
        },
        [fetchSelectedCategory.fulfilled]: (state, action) => {
            state.selectedCategory = action.payload;
            state.isFulfilled = true;
            console.log(state.selectedCategory);
        },
        [fetchSelectedCategory.rejected]: () => {
            console.log("rejected");
        }
    }
});

export const {getProductDetails, getSelectedCategory} = appSlice.actions;
export default appSlice.reducer;