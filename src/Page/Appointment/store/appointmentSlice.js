import { createSlice } from '@reduxjs/toolkit'

function generateUniqueRandomArray(start, end, count) {
    const array = [];
    while (array.length < count) {
      const randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
      if (!array.includes(randomNumber)) {
        array.push(randomNumber);
      }
    }
    return array;
}

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
                "8/27/2023": generateUniqueRandomArray(0,6,4) , "8/28/2023": generateUniqueRandomArray(0,6,3),   
                "8/29/2023": generateUniqueRandomArray(0,6,4) , "8/30/2023": generateUniqueRandomArray(0,6,2), 
                "8/31/2023": generateUniqueRandomArray(0,6,3) , "9/01/2023": generateUniqueRandomArray(0,6,1), 
                "9/02/2023": generateUniqueRandomArray(0,6,1) , "9/03/2023": generateUniqueRandomArray(0,6,3), 
                "9/04/2023": generateUniqueRandomArray(0,6,2) , "9/05/2023": generateUniqueRandomArray(0,6,5),
                "9/06/2023": generateUniqueRandomArray(0,6,5) , "9/07/2023": generateUniqueRandomArray(0,6,4), 
                "9/08/2023": generateUniqueRandomArray(0,6,3) , "9/09/2023": generateUniqueRandomArray(0,6,6), 
                "9/10/2023": generateUniqueRandomArray(0,6,4) , "9/11/2023": generateUniqueRandomArray(0,6,4),
                "9/12/2023": generateUniqueRandomArray(0,6,1) , "9/13/2023": generateUniqueRandomArray(0,6,4), 
                "9/14/2023": generateUniqueRandomArray(0,6,4) , "9/15/2023": generateUniqueRandomArray(0,6,4), 
                "9/16/2023": generateUniqueRandomArray(0,6,4) , "9/17/2023": generateUniqueRandomArray(0,6,3),
                "9/18/2023": generateUniqueRandomArray(0,6,2) , "9/19/2023": generateUniqueRandomArray(0,6,4), 
                "9/20/2023": generateUniqueRandomArray(0,6,3) , "9/21/2023": generateUniqueRandomArray(0,6,1), 
                "9/22/2023": generateUniqueRandomArray(0,6,4) , "9/23/2023": generateUniqueRandomArray(0,6,4),
                "9/24/2023": generateUniqueRandomArray(0,6,5) , "9/25/2023": generateUniqueRandomArray(0,6,2),
            }
        },
        "Dr. Daniel Pannozzo": {
            firstName: "Daniel",
            lastName: "Pannozzo",
            advanced: ["Specialist/ Other", "Prescriptions"],
            booked: {
                "8/27/2023": generateUniqueRandomArray(0,6,4) , "8/28/2023": generateUniqueRandomArray(0,6,3),   
                "8/29/2023": generateUniqueRandomArray(0,6,4) , "8/30/2023": generateUniqueRandomArray(0,6,2), 
                "8/31/2023": generateUniqueRandomArray(0,6,3) , "9/01/2023": generateUniqueRandomArray(0,6,1), 
                "9/02/2023": generateUniqueRandomArray(0,6,1) , "9/03/2023": generateUniqueRandomArray(0,6,3), 
                "9/04/2023": generateUniqueRandomArray(0,6,2) , "9/05/2023": generateUniqueRandomArray(0,6,5),
                "9/06/2023": generateUniqueRandomArray(0,6,5) , "9/07/2023": generateUniqueRandomArray(0,6,4), 
                "9/08/2023": generateUniqueRandomArray(0,6,3) , "9/09/2023": generateUniqueRandomArray(0,6,6), 
                "9/10/2023": generateUniqueRandomArray(0,6,4) , "9/11/2023": generateUniqueRandomArray(0,6,4),
                "9/12/2023": generateUniqueRandomArray(0,6,1) , "9/13/2023": generateUniqueRandomArray(0,6,4), 
                "9/14/2023": generateUniqueRandomArray(0,6,4) , "9/15/2023": generateUniqueRandomArray(0,6,4), 
                "9/16/2023": generateUniqueRandomArray(0,6,4) , "9/17/2023": generateUniqueRandomArray(0,6,3),
                "9/18/2023": generateUniqueRandomArray(0,6,2) , "9/19/2023": generateUniqueRandomArray(0,6,4), 
                "9/20/2023": generateUniqueRandomArray(0,6,3) , "9/21/2023": generateUniqueRandomArray(0,6,1), 
                "9/22/2023": generateUniqueRandomArray(0,6,4) , "9/23/2023": generateUniqueRandomArray(0,6,4),
                "9/24/2023": generateUniqueRandomArray(0,6,5) , "9/25/2023": generateUniqueRandomArray(0,6,2),
            }
        },
        "Dr. Imran Mushtaq": {
            firstName: "Imran",
            lastName: "Mushtaq",
            advanced: ["Requisitions", "Skin"],
            booked: {
                "8/27/2023": generateUniqueRandomArray(0,6,4) , "8/28/2023": generateUniqueRandomArray(0,6,3),   
                "8/29/2023": generateUniqueRandomArray(0,6,4) , "8/30/2023": generateUniqueRandomArray(0,6,2), 
                "8/31/2023": generateUniqueRandomArray(0,6,3) , "9/01/2023": generateUniqueRandomArray(0,6,1), 
                "9/02/2023": generateUniqueRandomArray(0,6,1) , "9/03/2023": generateUniqueRandomArray(0,6,3), 
                "9/04/2023": generateUniqueRandomArray(0,6,2) , "9/05/2023": generateUniqueRandomArray(0,6,5),
                "9/06/2023": generateUniqueRandomArray(0,6,5) , "9/07/2023": generateUniqueRandomArray(0,6,4), 
                "9/08/2023": generateUniqueRandomArray(0,6,3) , "9/09/2023": generateUniqueRandomArray(0,6,6), 
                "9/10/2023": generateUniqueRandomArray(0,6,4) , "9/11/2023": generateUniqueRandomArray(0,6,4),
                "9/12/2023": generateUniqueRandomArray(0,6,1) , "9/13/2023": generateUniqueRandomArray(0,6,4), 
                "9/14/2023": generateUniqueRandomArray(0,6,4) , "9/15/2023": generateUniqueRandomArray(0,6,4), 
                "9/16/2023": generateUniqueRandomArray(0,6,4) , "9/17/2023": generateUniqueRandomArray(0,6,3),
                "9/18/2023": generateUniqueRandomArray(0,6,2) , "9/19/2023": generateUniqueRandomArray(0,6,4), 
                "9/20/2023": generateUniqueRandomArray(0,6,3) , "9/21/2023": generateUniqueRandomArray(0,6,1), 
                "9/22/2023": generateUniqueRandomArray(0,6,4) , "9/23/2023": generateUniqueRandomArray(0,6,4),
                "9/24/2023": generateUniqueRandomArray(0,6,5) , "9/25/2023": generateUniqueRandomArray(0,6,2),
            }
        },
        "Dr. Chelsie Velikovsky": {
            firstName: "Chelsie",
            lastName: "Velikovsky",
            advanced: ["General", "Skin"],
            booked: {
                "8/27/2023": generateUniqueRandomArray(0,6,4) , "8/28/2023": generateUniqueRandomArray(0,6,3),   
                "8/29/2023": generateUniqueRandomArray(0,6,4) , "8/30/2023": generateUniqueRandomArray(0,6,2), 
                "8/31/2023": generateUniqueRandomArray(0,6,3) , "9/01/2023": generateUniqueRandomArray(0,6,1), 
                "9/02/2023": generateUniqueRandomArray(0,6,1) , "9/03/2023": generateUniqueRandomArray(0,6,3), 
                "9/04/2023": generateUniqueRandomArray(0,6,2) , "9/05/2023": generateUniqueRandomArray(0,6,5),
                "9/06/2023": generateUniqueRandomArray(0,6,5) , "9/07/2023": generateUniqueRandomArray(0,6,4), 
                "9/08/2023": generateUniqueRandomArray(0,6,3) , "9/09/2023": generateUniqueRandomArray(0,6,6), 
                "9/10/2023": generateUniqueRandomArray(0,6,4) , "9/11/2023": generateUniqueRandomArray(0,6,4),
                "9/12/2023": generateUniqueRandomArray(0,6,1) , "9/13/2023": generateUniqueRandomArray(0,6,4), 
                "9/14/2023": generateUniqueRandomArray(0,6,4) , "9/15/2023": generateUniqueRandomArray(0,6,4), 
                "9/16/2023": generateUniqueRandomArray(0,6,4) , "9/17/2023": generateUniqueRandomArray(0,6,3),
                "9/18/2023": generateUniqueRandomArray(0,6,2) , "9/19/2023": generateUniqueRandomArray(0,6,4), 
                "9/20/2023": generateUniqueRandomArray(0,6,3) , "9/21/2023": generateUniqueRandomArray(0,6,1), 
                "9/22/2023": generateUniqueRandomArray(0,6,4) , "9/23/2023": generateUniqueRandomArray(0,6,4),
                "9/24/2023": generateUniqueRandomArray(0,6,5) , "9/25/2023": generateUniqueRandomArray(0,6,2),
            }
        },
        "Dr. Michelle Gerber": {
            firstName: "Michelle",
            lastName: "Gerber",
            advanced: ["Mental", "Requisitions"],
            booked: {
                "8/27/2023": generateUniqueRandomArray(0,6,4) , "8/28/2023": generateUniqueRandomArray(0,6,3),   
                "8/29/2023": generateUniqueRandomArray(0,6,4) , "8/30/2023": generateUniqueRandomArray(0,6,2), 
                "8/31/2023": generateUniqueRandomArray(0,6,3) , "9/01/2023": generateUniqueRandomArray(0,6,1), 
                "9/02/2023": generateUniqueRandomArray(0,6,1) , "9/03/2023": generateUniqueRandomArray(0,6,3), 
                "9/04/2023": generateUniqueRandomArray(0,6,2) , "9/05/2023": generateUniqueRandomArray(0,6,5),
                "9/06/2023": generateUniqueRandomArray(0,6,5) , "9/07/2023": generateUniqueRandomArray(0,6,4), 
                "9/08/2023": generateUniqueRandomArray(0,6,3) , "9/09/2023": generateUniqueRandomArray(0,6,6), 
                "9/10/2023": generateUniqueRandomArray(0,6,4) , "9/11/2023": generateUniqueRandomArray(0,6,4),
                "9/12/2023": generateUniqueRandomArray(0,6,1) , "9/13/2023": generateUniqueRandomArray(0,6,4), 
                "9/14/2023": generateUniqueRandomArray(0,6,4) , "9/15/2023": generateUniqueRandomArray(0,6,4), 
                "9/16/2023": generateUniqueRandomArray(0,6,4) , "9/17/2023": generateUniqueRandomArray(0,6,3),
                "9/18/2023": generateUniqueRandomArray(0,6,2) , "9/19/2023": generateUniqueRandomArray(0,6,4), 
                "9/20/2023": generateUniqueRandomArray(0,6,3) , "9/21/2023": generateUniqueRandomArray(0,6,1), 
                "9/22/2023": generateUniqueRandomArray(0,6,4) , "9/23/2023": generateUniqueRandomArray(0,6,4),
                "9/24/2023": generateUniqueRandomArray(0,6,5) , "9/25/2023": generateUniqueRandomArray(0,6,2),
            }
        },
        "Dr. James Fahmed": {
            firstName: "James",
            lastName: "Fahmed",
            advanced: ["Mental", "Requisitions"],
            booked: {
                "8/27/2023": generateUniqueRandomArray(0,6,4) , "8/28/2023": generateUniqueRandomArray(0,6,3),   
                "8/29/2023": generateUniqueRandomArray(0,6,4) , "8/30/2023": generateUniqueRandomArray(0,6,2), 
                "8/31/2023": generateUniqueRandomArray(0,6,3) , "9/01/2023": generateUniqueRandomArray(0,6,1), 
                "9/02/2023": generateUniqueRandomArray(0,6,1) , "9/03/2023": generateUniqueRandomArray(0,6,3), 
                "9/04/2023": generateUniqueRandomArray(0,6,2) , "9/05/2023": generateUniqueRandomArray(0,6,5),
                "9/06/2023": generateUniqueRandomArray(0,6,5) , "9/07/2023": generateUniqueRandomArray(0,6,4), 
                "9/08/2023": generateUniqueRandomArray(0,6,3) , "9/09/2023": generateUniqueRandomArray(0,6,6), 
                "9/10/2023": generateUniqueRandomArray(0,6,4) , "9/11/2023": generateUniqueRandomArray(0,6,4),
                "9/12/2023": generateUniqueRandomArray(0,6,1) , "9/13/2023": generateUniqueRandomArray(0,6,4), 
                "9/14/2023": generateUniqueRandomArray(0,6,4) , "9/15/2023": generateUniqueRandomArray(0,6,4), 
                "9/16/2023": generateUniqueRandomArray(0,6,4) , "9/17/2023": generateUniqueRandomArray(0,6,3),
                "9/18/2023": generateUniqueRandomArray(0,6,2) , "9/19/2023": generateUniqueRandomArray(0,6,4), 
                "9/20/2023": generateUniqueRandomArray(0,6,3) , "9/21/2023": generateUniqueRandomArray(0,6,1), 
                "9/22/2023": generateUniqueRandomArray(0,6,4) , "9/23/2023": generateUniqueRandomArray(0,6,4),
                "9/24/2023": generateUniqueRandomArray(0,6,5) , "9/25/2023": generateUniqueRandomArray(0,6,2),
            }
        },
        "Dr. Jacky Fahmed": {
            firstName: "Jacky",
            lastName: "Todi",
            advanced: ["Mental", "Requisitions"],
            booked: {
                "8/27/2023": generateUniqueRandomArray(0,6,4) , "8/28/2023": generateUniqueRandomArray(0,6,3),   
                "8/29/2023": generateUniqueRandomArray(0,6,4) , "8/30/2023": generateUniqueRandomArray(0,6,2), 
                "8/31/2023": generateUniqueRandomArray(0,6,3) , "9/01/2023": generateUniqueRandomArray(0,6,1), 
                "9/02/2023": generateUniqueRandomArray(0,6,1) , "9/03/2023": generateUniqueRandomArray(0,6,3), 
                "9/04/2023": generateUniqueRandomArray(0,6,2) , "9/05/2023": generateUniqueRandomArray(0,6,5),
                "9/06/2023": generateUniqueRandomArray(0,6,5) , "9/07/2023": generateUniqueRandomArray(0,6,4), 
                "9/08/2023": generateUniqueRandomArray(0,6,3) , "9/09/2023": generateUniqueRandomArray(0,6,6), 
                "9/10/2023": generateUniqueRandomArray(0,6,4) , "9/11/2023": generateUniqueRandomArray(0,6,4),
                "9/12/2023": generateUniqueRandomArray(0,6,1) , "9/13/2023": generateUniqueRandomArray(0,6,4), 
                "9/14/2023": generateUniqueRandomArray(0,6,4) , "9/15/2023": generateUniqueRandomArray(0,6,4), 
                "9/16/2023": generateUniqueRandomArray(0,6,4) , "9/17/2023": generateUniqueRandomArray(0,6,3),
                "9/18/2023": generateUniqueRandomArray(0,6,2) , "9/19/2023": generateUniqueRandomArray(0,6,4), 
                "9/20/2023": generateUniqueRandomArray(0,6,3) , "9/21/2023": generateUniqueRandomArray(0,6,1), 
                "9/22/2023": generateUniqueRandomArray(0,6,4) , "9/23/2023": generateUniqueRandomArray(0,6,4),
                "9/24/2023": generateUniqueRandomArray(0,6,5) , "9/25/2023": generateUniqueRandomArray(0,6,2),
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