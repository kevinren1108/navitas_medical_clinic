import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

function Step2(props) {
  return (
    <div className='step'>
          Date of this form was completed
          <Container fluid>
            <Row>
              <Col>
                <Form.Control id="itHeight" name="itHeight" type="text" value={props.inPatient.itHeight} onChange={props.handleChange} />
                <Form.Label htmlFor="itHeight">Height</Form.Label>
              </Col>
              <Col>
                <Form.Control id="itWeight" name="itWeight" type="text" value={props.inPatient.itWeight} onChange={props.handleChange} />
                <Form.Label htmlFor="itWeight">Weight</Form.Label>
              </Col>
            </Row>
            
          </Container>
        </div>
  )
}

export default Step2