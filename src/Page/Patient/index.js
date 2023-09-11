import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PatientSel from './patientSel'
import HealthTimeline from './healthTimeline'
import EncounterDeatil from './encounterDetail'

function Patient() {
  return (
    <Container fluid className='' style={{height: "calc(100% - 57px)"}}> 
      <Row className='h-100'>
        <Col className='col-3 border'>
          <PatientSel />
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