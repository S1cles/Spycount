import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: []
    },
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find(item => item.id === action.payload.id)

            if (item) {
                item.quantity += action.payload.quantity;
            }
            else {
                state.products.push(action.payload)
            }
        },
        removeFromCart: (state, action) => {
            //  state.products.find(item => item.id !== action.payload.id)
                state.products = state.products.filter(item => item.id !== action.payload)
            // if (item) {
            //     item.quantity -= action.payload.quantity;
            // }
            // else {
            //     state.push(action.payload)
            // }
        },
        resetCart: (state) => {
            state.products=[] 
        }
    }
})
export const { addToCart, removeFromCart, resetCart } = cartSlice.actions

export default cartSlice.reducer