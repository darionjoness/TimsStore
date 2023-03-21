import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
    cartCount: number
}

const initialState = {
    cartCount: 0
}

const incrementCartSlice = createSlice({
    name: 'incrementCart',
    initialState,
    reducers: {
        incrementCartCount(state){
            state.cartCount = state.cartCount + 1
        },
        decrementCartCount(state){
            state.cartCount = state.cartCount - 1
        }
    }
})

export const incrementCartActions = incrementCartSlice.actions

export default incrementCartSlice
