import { createSlice } from "@reduxjs/toolkit";


const initialState: any = {
    items: []
}

const fetchSlice = createSlice({
    name: 'fetch',
    initialState,
    reducers: {
        setItems(state, action){
            state.items = action.payload
        }
    }
})

export const fetchActions = fetchSlice.actions

export default fetchSlice