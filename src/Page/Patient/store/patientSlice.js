import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    //patient info
    addressCity: "",addressPostal: "",addressState: "",addressStreet: "",
    allergies: "",avatar: "",birthDate: "",createdAt: "",
    emergencyContactPerson: "",emergencyContactPhone: "",firstName: "",
    gender: "",healthCardIssuer: "",healthCardNumber: "",
    healthCondition: "",id: "",insuranceCustomerID: "",insuranceGroupID: "",
    insuranceProvider: "",language: "",lastEncounter: "",lastName: "",
    medications: "",phone: "",
    //UI control
    uiToDisplay:"timeline"
}

export const patientSlice = createSlice({
    name: 'patient',
    initialState,
    reducers: { 
        handlePatientChange: (state, action) => {
            if(action && action.payload){
                const patient = action.payload
                // state["appointmentProvider"] = action.payload
                const patientKey = Object.keys(patient)
                patientKey.forEach(element => {
                    state[element] = patient[element]
                });
            }
        },

        handlePatientUIChange: (state, action) => {
            state["uiToDisplay"] = action.payload
        }
        
    }
})

export const { handlePatientChange, handlePatientUIChange } = patientSlice.actions

export default patientSlice.reducer