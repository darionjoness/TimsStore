import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
    cartItems: any[]
}

const initialState: InitialStateProps = {
    cartItems: []
}

const addToCartSlice = createSlice({
    name: 'addToCart',
    initialState,
    reducers: {
        addItem(state, action){
            state.cartItems = [...state.cartItems, action.payload]
        },
        removeItem(state, action){
            state.cartItems = state.cartItems.filter((item) => item.removeId != action.payload)
        }
    }
})

export const addToCartActions = addToCartSlice.actions

export default addToCartSlice
