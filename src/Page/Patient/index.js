import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PatientSel from './Component/patientSel'
import HealthTimeline from './Component/healthTimeline'
import EncounterDeatil from './Component/encounterDetail'

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