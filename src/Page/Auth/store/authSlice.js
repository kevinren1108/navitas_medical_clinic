import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    alert: []
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        handleAuthAlertPush: (state, action) => {
            if(!state["alert"].includes(action.payload)){
                state["alert"] = [...state["alert"], action.payload]
            }
        },
        handleAuthAlertDelete: (state, action) => {
            const deleteItem = action.payload
            const updateList = state["alert"].filter(item => item !== deleteItem)
		    state["alert"] = updateList 
        }
    }
})

export const { handleAuthAlertDelete, handleAuthAlertPush} = authSlice.actions

export default authSlice.reducer