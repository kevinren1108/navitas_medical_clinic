import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    uiToDisplay: "search",
    selectPatientID: ""
}

export const appointmentUISlice = createSlice({
    name: 'appointmentUI',
    initialState,
    reducers: {
        handleUIChange: (state, action) => {
            state["uiToDisplay"] = action.payload
        },
        handlePatientSelection: (state, action) => {
            state["uiToDisplay"] = "selected"
            state["selectPatientID"] = action.payload
        }
    },
})

export const { handleUIChange, handlePatientSelection } = appointmentUISlice.actions

export default appointmentUISlice.reducer