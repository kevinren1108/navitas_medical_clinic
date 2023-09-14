import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    appointmentCategory: "General",
    appointmentType: "Mental Health"
}

export const appointmentSlice = createSlice({
    name: 'appointment',
    initialState,
    reducers: {
        handleCategoryUpdate: (state, action) => {
            state["appointmentCategory"] = action.payload
        },
        handleTypeUpdate: (state, action) => {
            state["appointmentType"] = action.payload
            
        }
    },
})

export const { handleCategoryUpdate, handleTypeUpdate } = appointmentSlice.actions

export default appointmentSlice.reducer