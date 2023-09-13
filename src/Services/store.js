import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Page/Appointment/Store/patientIntakeSlice'

export const store = configureStore({
    reducer: {
        patientIntake:  counterReducer,

    },
})