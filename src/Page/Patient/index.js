import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PatientSel from './Component/patientSel'
import HealthTimeline from './Component/healthTimeline'
import EncounterDeatil from './Component/encounterDetail'
import PatientSearch from '../PatientSearch/Component/patientSearch'
import { useSelector } from 'react-redux'
import PatientIntakeForm from '../PatientSearch/Component/patientIntakeForm'

function Patient() {

    const uiState = useSelector((state) => state.appointmentUI)

    return (
        <Container fluid className='' style={{ height: "calc(100% - 57px)" }}>
            <Row className='h-100'>
                <Col className='col-3 border'>
                    {uiState.uiToDisplay === "selected" ? <PatientSel /> : <></>}
                    {uiState.uiToDisplay === "search" ? <PatientSearch /> : <></>}
                    {uiState.uiToDisplay === "create" ? <PatientIntakeForm /> : <></>}
                </Col>
                <Col className='border p-4'>
                    <HealthTimeline />
                    <EncounterDeatil />
                </Col>

            </Row>
        </Container>
    )
}

export default Patient