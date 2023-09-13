import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Page/Appointment/store/patientIntakeSlice'

export const store = configureStore({
    reducer: {
        patientIntake:  counterReducer,

    },
})