import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    displayDateDetail: false,
    selectedDate: ""
}

export const scheduleUISlice = createSlice({
    name: 'scheduleUI',
    initialState,
    reducers: {
        handleDisplayChange: (state, action) => {
            state["displayDateDetail"] = action.payload 
        },
        handleDateChange: (state, action) => {
            state["selectedDate"] = action.payload
        }
    }
})

export const {handleDateChange, handleDisplayChange} = scheduleUISlice.actions

export default scheduleUISlice.reducer