import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface InitialStateTypes {
    category: string
}

const initialState: InitialStateTypes = {
    category: 'all'
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        getNewCategory(state, action: PayloadAction<string>){
            state.category = action.payload
        }
    }
})

export const categoryActions = categorySlice.actions

export default categorySlice


