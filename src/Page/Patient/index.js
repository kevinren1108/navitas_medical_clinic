import React from 'react'
import { Container } from 'react-bootstrap'
import PatientSel from './Component/patientSel'
import HealthTimeline from './Component/healthTimeline'
import EncounterDeatil from './Component/encounterDetail'
import PatientSearch from '../PatientSearch/Component/patientSearch'
import { useSelector } from 'react-redux'
import PatientIntakeForm from '../PatientSearch/Component/patientIntakeForm'

function Patient() {

    const uiState = useSelector((state) => state.appointmentUI)

    return (
        <Container fluid className=''>
            {uiState.uiToDisplay === "selected" ? <PatientSel /> : <></>}
            {uiState.uiToDisplay === "search" ? <PatientSearch /> : <></>}
            {uiState.uiToDisplay === "create" ? <PatientIntakeForm /> : <></>}
            {uiState.uiToDisplay === "selected" ? <HealthTimeline /> : <></>}
            {uiState.uiToDisplay === "selected" ? <EncounterDeatil /> : <></>}
        </Container>
    )
}

export default Patient