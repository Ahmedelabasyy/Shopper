import {createSlice} from '@reduxjs/toolkit';




export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        totalPrice: [2,3],
    },
    reducers: {
        addToCart: (state, {payload}) => {
            state.cartItems = [payload, ...state.cartItems]
            console.log("added to cart", state.cartItems);
        },
        removeFromCart: (state, {payload}) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== payload)
        },
        countTotalPrice: (state, {payload}) => {
            console.log("payload", payload)
            state.totalPrice = [payload, ...state.totalPrice];
            console.log("totalllllllllllll", state.totalPrice)
        }
    },
    extraReducers: {
        
    }
});
export const {addToCart, countTotalPrice, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;