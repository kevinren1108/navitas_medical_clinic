import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PatientSel from '../Patient/Component/patientSel'
import PatientIntakeForm from '../PatientSearch/Component/patientIntakeForm'
import PatientSearch from '../PatientSearch/Component/patientSearch';
import { useSelector } from 'react-redux';
import Task from './Component/task';




function Appointment() {

    const uiState = useSelector((state) => state.appointmentUI)
    
    
    return (
        <Container fluid className='' style={{ height: "calc(100% - 57px)" }}>
            <Row className='h-100'>
                <Col className='col-3 border'>
                    {uiState.uiToDisplay ==="selected" ? <PatientSel />: <></>}
                    {uiState.uiToDisplay ==="search" ? <PatientSearch /> : <></> }
                    {uiState.uiToDisplay ==="create" ? <PatientIntakeForm /> : <></> }
                </Col>
                <Col className='border p-4'>
                    <Task />
                </Col>

            </Row>
        </Container>
    )
}

export default Appointment