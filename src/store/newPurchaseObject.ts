import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newPurchaseObject: []
}

const newPurchaseObjectSlice = createSlice({
    name: 'newPurchaseObject',
    initialState,
    reducers: {
        setNewPurchaseObject(state, action){
            state.newPurchaseObject = action.payload
        }
    }
})

export const newPurchaseObjectActions = newPurchaseObjectSlice.actions

export default newPurchaseObjectSlice

