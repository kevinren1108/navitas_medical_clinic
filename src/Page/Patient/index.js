import React from 'react'
import { Container } from 'react-bootstrap'
import PatientSel from './Component/patientSel'
import AppointmentHistory from './Component/appointmentHistory'
import HealthTimeline from './Component/healthTimeline'
import EncounterDeatil from './Component/encounterDetail'
import PatientSearch from '../PatientSearch/Component/patientSearch'
import { useSelector } from 'react-redux'
import PatientIntakeForm from '../PatientSearch/Component/patientIntakeForm'
import PatientNavbar from './Component/patientNavbar'


function Patient() {

    const uiState = useSelector((state) => state.appointmentUI)
    const patientDetailPage = useSelector((state) => state.patient)

    return (
        <Container fluid className=''>
            {uiState.uiToDisplay === "search" ? <PatientSearch /> : <></>}
            {uiState.uiToDisplay === "create" ? <PatientIntakeForm /> : <></>}


            {uiState.uiToDisplay === "selected" ? <PatientSel /> : <></>}
            {uiState.uiToDisplay === "selected" ? <PatientNavbar /> : <></>}
        

            {patientDetailPage.uiToDisplay === "timeline" && uiState.uiToDisplay === "selected" ? <HealthTimeline /> : <></>}
            {patientDetailPage.uiToDisplay === "timeline" && uiState.uiToDisplay === "selected" ? <EncounterDeatil /> : <></>}

            {patientDetailPage.uiToDisplay === "appointment" && uiState.uiToDisplay === "selected" ? <AppointmentHistory /> : <></>}

        </Container>
    )
}

export default Patient