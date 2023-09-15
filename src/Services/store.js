import { configureStore } from '@reduxjs/toolkit'
import patientIntakeReducer from '../Page/PatientSearch/Store/patientIntakeSlice'
import appointmentUIReducer from '../Page/PatientSearch/Store/appointmentUISlice'
import appointmentReducer  from '../Page/Appointment/store/appointmentSlice'
import patientReducer from "../Page/Patient/store/patientSlice"
import scheduleUIReducer from '../Page/Schedule/store/scheduleUISlice'
import headerUIReducer from "../Layout/Header/store/headerUISlice"
import authReducer from "../Page/Auth/store/authSlice"
import { patientApi } from './patient'
import { setupListeners } from '@reduxjs/toolkit/dist/query'


export const store = configureStore({
    reducer: {
        patientIntakeForm:  patientIntakeReducer,
        appointmentUI: appointmentUIReducer,
        appointment: appointmentReducer,
        patient: patientReducer,
        scheduleUI: scheduleUIReducer,
        headerUI: headerUIReducer,
        auth: authReducer,
        [patientApi.reducerPath]: patientApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(patientApi.middleware),
})

setupListeners(store.dispatch)