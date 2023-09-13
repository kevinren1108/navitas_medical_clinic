import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    itAlert: "",
    // Form Complete date
    itDate: "",
    // Patient personal info
    itFName: "", itLName: "", itDoB: "",
    itHeight: "", itWeight: "", itGender: "",
    // Patient personal contact
    itPhone: "", itAPhone: "",
    // Patient healthcare info
    itHealthNo: "", itHealthProv: "",
    itEmergenName: "", itEmergenPhone: "",
    itInsProvder: "", itInsGroup: "", itInsCosID: "",
    // Patient Address info
    itAddress: "", itCity: "", itProv: "", itPostal: "",
    itMAddress: "", itMCity: "", itMProv: "", itMPostal: "",
    itAPsame: false, itMailEnable: true,
    // Patient immu info
    itTetanus: false, itPneumonia: false, itShingles: false,
    itCovidVac: false, itChildhood: false,
    // Patient allergies info
    itAllerg: "No", itAllergInput: "", itAllergList: [],
    // Patient Medications info
    itMed: "No", itMedInput: "", itMedList: [],
    // Patient Conditions info
    itCond: "No", itCondInput: "", itCondList: []
}

export const patientIntakeSlice = createSlice({
    name: 'patientIntake',
    initialState,
    reducers: {
        updateField: (state, action) => {
            state[action.payload.field] = action.payload.value
        },
        handleSamePhyscalAndMail: (state) => {
            state["itMAddress"] = state["itAddress"]
            state["itMCity"] = state["itCity"]
            state["itMProv"] = state["itProv"]
            state["itMPostal"] = state["itPostal"]
        },
        handleDiffPhyscalAndMail: (state) => {
            state["itMAddress"] = ''
            state["itMCity"] = ''
            state["itMProv"] = ''
            state["itMPostal"] = ''
        },
        handleListPush: (state, action) => {
            const { typeID, listID, inputID } = action.payload
            if(state[inputID] && 
                !state[listID].includes(state[inputID]) &&
                state[typeID] !== "No"
            ){
                state[listID] = [...state[listID], state[inputID] ]
            }else{
                state[inputID] = ""
            }
            
        },
        handleListDelete: (state, action) => {
            const  {listID, deleteItem} = action.payload
            const updateList = state[listID].filter(item => item !== deleteItem)
		    state[listID] = updateList 
           
        }
    },
})

// Action creators are generated for each case reducer function
export const { updateField, handleSamePhyscalAndMail, 
    handleDiffPhyscalAndMail, handleListPush, handleListDelete 
} = patientIntakeSlice.actions

export default patientIntakeSlice.reducer