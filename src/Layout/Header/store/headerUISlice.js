import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    show: false,
}


export const headerUISlice = createSlice({
    name: "headerUI",
    initialState,
    reducers:{
        handleShowUpdate: (state, action) => {
            console.log(action)
            state["show"] = action.payload
        }
    },
})

export const { handleShowUpdate } = headerUISlice.actions

export default headerUISlice.reducer