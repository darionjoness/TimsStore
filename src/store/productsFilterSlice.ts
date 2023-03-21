import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: true
}

const productsFilterSlice = createSlice({
    name: 'productsFilter',
    initialState,
    reducers: {
        toggleFilter(state){
            state.filter = !state.filter
        }
    }
})

export const productsFilterActions = productsFilterSlice.actions

export default productsFilterSlice

