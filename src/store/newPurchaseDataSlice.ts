import { createSlice } from "@reduxjs/toolkit";

// 

const initialState = {
    newPurchaseData: []
}

const newPurchaseDataSlice = createSlice({
    name: 'newPurchaseData',
    initialState,
    reducers: {
        setNewPurchaseData(state, action){
            state.newPurchaseData = action.payload
        }
    }
})

export const newPurchaseDataActions = newPurchaseDataSlice.actions

export default newPurchaseDataSlice
