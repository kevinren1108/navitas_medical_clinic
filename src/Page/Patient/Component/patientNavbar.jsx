import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { handlePatientUIChange } from '../store/patientSlice'



function PatientNavbar() {


    const dispatch = useDispatch()


    return (
        <Container className='mb-3'>
            <Nav variant="tabs" defaultActiveKey="#timeline">
                <Nav.Item>
                    <Nav.Link name="timeline" id="timeline" href='#timeline' 
                            onClick={() => dispatch(handlePatientUIChange("timeline"))} 
                    >Timeline</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link name="appointment" id="appointment" href='#appointment' 
                            onClick={() => dispatch(handlePatientUIChange("appointment"))}
                    >Appointment</Nav.Link>
                </Nav.Item>
            </Nav>

        </Container>

    )
}

export default PatientNavbar