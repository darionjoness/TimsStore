import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    total: 0
}

const totalPriceSlice = createSlice({
    name: 'totalPrice',
    initialState,
    reducers: {
        setTotal(state, action){
            state.total = action.payload
        }
    }
})

export const totalPriceActions = totalPriceSlice.actions

export default totalPriceSlice
