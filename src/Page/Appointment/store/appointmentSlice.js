import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    appointmentAlert: [],
    appointmentCategory: "General",
    appointmentType: "",
    appointmentDate: "",
    appointmentTime: "",
    appointmentProvider: "",
    providerList: {
        "Dr. Vaneet Rai": {
            firstName: "Vaneet",
            lastName: "Rai",
            advanced: ["General", "Mental"],
            booked: {
                "9/18/2023": [1, 4, 5], "9/19/2023": [1, 2, 3, 4, 6],
                "9/20/2023": [1, 5, 6], "9/21/2023": [0, 2, 3, 5, 6],
                "9/22/2023": [1, 2, 3, 6], "9/23/2023": [2, 3, 6],
                "9/24/2023": [1], "9/25/2023": [0, 2, 3],
            }
        },
        "Dr. Daniel Pannozzo": {
            firstName: "Daniel",
            lastName: "Pannozzo",
            advanced: ["Specialist/ Other", "Prescriptions"],
            booked: {
                "9/18/2023": [0, 1, 2, 4], "9/19/2023": [1, 4, 6],
                "9/20/2023": [0, 1, 2, 6], "9/21/2023": [0, 2, 3, 5],
                "9/22/2023": [1, 2, 3, 4, 6], "9/23/2023": [0, 2, 3, 6],
                "9/24/2023": [1, 2, 3], "9/25/2023": [0, 2, 3, 4],
            }
        },
        "Dr. Imran Mushtaq": {
            firstName: "Imran",
            lastName: "Mushtaq",
            advanced: ["Requisitions", "Skin"],
            booked: {
                "9/18/2023": [0, 1, 2, 6], "9/19/2023": [1, 6],
                "9/20/2023": [1, 6], "9/21/2023": [0, 1, 2, 6],
                "9/22/2023": [0, 1, 2, 4, 6], "9/23/2023": [2, 3, 6],
                "9/24/2023": [1], "9/25/2023": [0, 3],
            }
        },
        "Dr. Chelsie Velikovsky": {
            firstName: "Chelsie",
            lastName: "Velikovsky",
            advanced: ["General", "Skin"],
            booked: {
                "9/18/2023": [0, 1, 2, 4, 5, 6], "9/19/2023": [1, 4, 6],
                "9/20/2023": [0, 2, 6], "9/21/2023": [0, 5],
                "9/22/2023": [1, 6], "9/23/2023": [0, 3, 6],
                "9/24/2023": [1, 2, 3], "9/25/2023": [0, 2, 3, 4],
            }
        },
        "Dr. Michelle Gerber": {
            firstName: "Michelle",
            lastName: "Gerber",
            advanced: ["Mental", "Requisitions"],
            booked: {
                "9/18/2023": [1, 2, 3, 4, 5], "9/19/2023": [1, 2, 3, 4, 6],
                "9/20/2023": [1, 5, 6], "9/21/2023": [1, 2, 3, 4, 5],
                "9/22/2023": [1, 2, 3, 6], "9/23/2023": [1, 2, 3, 4, 5],
                "9/24/2023": [1, 2, 3, 4], "9/25/2023": [0, 2, 3],
            }
        }
    }

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

        },
        handleProviderUpdate: (state, action) => {
            state["appointmentProvider"] = action.payload
        },
        handleDateUpdate: (state, action) => {
            state["appointmentDate"] = action.payload
            state["appointmentTime"] = ""
        },
        handleTimeUpdate: (state, action) => {
            state["appointmentTime"] = action.payload
        },
        handleAlertPush: (state, action) => {
            if(!state["appointmentAlert"].includes(action.payload)){
                state["appointmentAlert"] = [...state["appointmentAlert"], action.payload]
            }
        },
        handleAlertDelete: (state, action) => {
            const deleteItem = action.payload
            const updateList = state["appointmentAlert"].filter(item => item !== deleteItem)
		    state["appointmentAlert"] = updateList 
        }
    
    },
})

export const { handleCategoryUpdate, handleTypeUpdate, handleProviderUpdate, 
                handleDateUpdate, handleTimeUpdate, handleAlertPush,
                handleAlertDelete
             } = appointmentSlice.actions

export default appointmentSlice.reducer