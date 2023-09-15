import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    addressCity: "",addressPostal: "",addressState: "",addressStreet: "",
    allergies: "",avatar: "",birthDate: "",createdAt: "",
    emergencyContactPerson: "",emergencyContactPhone: "",firstName: "",
    gender: "",healthCardIssuer: "",healthCardNumber: "",
    healthCondition: "",id: "",insuranceCustomerID: "",insuranceGroupID: "",
    insuranceProvider: "",language: "",lastEncounter: "",lastName: "",
    medications: "",phone: ""
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
        }
        
    }
})

export const { handlePatientChange } = patientSlice.actions

export default patientSlice.reducer