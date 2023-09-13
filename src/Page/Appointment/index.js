import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PatientSel from '../Patient/Component/patientSel'
import PatientIntakeForm from './Component/patientIntakeForm'

function Appointment() {
  return (
    <Container fluid className='' style={{ height: "calc(100% - 57px)" }}>
      <Row className='h-100'>
        <Col className='col-3 border'>
          <PatientIntakeForm />
          
        </Col>
        <Col className='border p-4'>
          <PatientSel />
        </Col>

      </Row>
    </Container>
  )
}

export default Appointment