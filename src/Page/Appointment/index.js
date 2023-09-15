import React from 'react'
import {  Container } from 'react-bootstrap'
import PatientIntakeForm from '../PatientSearch/Component/patientIntakeForm'
import PatientSearch from '../PatientSearch/Component/patientSearch';
import { useSelector } from 'react-redux';
import AppointmentStep from './Component/appointmentStep';




function Appointment() {

    const uiState = useSelector((state) => state.appointmentUI)
    
    
    return (
        <Container fluid className='' style={{ height: "calc(100% - 57px)" }}>
            
                    {uiState.uiToDisplay ==="selected" ? <AppointmentStep />: <></>}
                    {uiState.uiToDisplay ==="search" ? <PatientSearch /> : <></> }
                    {uiState.uiToDisplay ==="create" ? <PatientIntakeForm /> : <></> }
                
                    
        </Container>
    )
}

export default Appointment