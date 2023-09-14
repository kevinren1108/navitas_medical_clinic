import { configureStore } from '@reduxjs/toolkit'
import patientIntakeReducer from '../Page/PatientSearch/Store/patientIntakeSlice'
import appointmentUIReducer from '../Page/PatientSearch/Store/appointmentUISlice'
import appointmentReducer  from '../Page/Appointment/store/appointmentSlice'
import { patientApi } from './patient'
import { setupListeners } from '@reduxjs/toolkit/dist/query'


export const store = configureStore({
    reducer: {
        patientIntakeForm:  patientIntakeReducer,
        appointmentUI: appointmentUIReducer,
        appointment: appointmentReducer,
        [patientApi.reducerPath]: patientApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(patientApi.middleware),
})

setupListeners(store.dispatch)