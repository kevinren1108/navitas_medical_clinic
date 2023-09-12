import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
function Step1(props) {
  return (
    <div className='step'>
          Date of this form was completed
          <Container fluid>
            <Row>
              <Col>
                <Form.Control id="itDate" name="itDate" type="date" value={props.inPatient.itDate} onChange={props.handleChange} />
                <Form.Label htmlFor="itDate">Date</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control id="itFName" name="itFName" type="text" value={props.inPatient.itFName} onChange={props.handleChange} />
                <Form.Label htmlFor="itFName">First Name</Form.Label>
              </Col>
              <Col>
                <Form.Control id="itLName" name="itLName" type="text" value={props.inPatient.itLName} onChange={props.handleChange} />
                <Form.Label htmlFor="itLName">Last Name</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control id="itDoB" name="itDoB" type="date" value={props.inPatient.itDoB} onChange={props.handleChange} />
                <Form.Label htmlFor="itDoB">Date of Birth</Form.Label>
              </Col>
              <Col>
                <Form.Control id="itHealthNo" name="itHealthNo" type="text" value={props.inPatient.itHealthNo} onChange={props.handleChange} />
                <Form.Label htmlFor="itHealthNo">BC Health Card Number</Form.Label>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Control id="itPhone" name="itPhone" type="text" value={props.inPatient.itPhone} onChange={props.handleChange} />
                <Form.Label htmlFor="itPhone">Primary Phone</Form.Label>
              </Col>
              <Col>
                <Form.Control id="itAPhone" name="itAPhone" type="text" value={props.inPatient.itAPhone} onChange={props.handleChange} />
                <Form.Label htmlFor="itAPhone">Alternate Phone</Form.Label>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Control id="itEmail" name="itEmail" type="email" value={props.inPatient.itEmail} onChange={props.handleChange} />
                <Form.Label htmlFor="itEmail">Email</Form.Label>
              </Col>
              <Col>
                <Form.Control id="itPharmacy" name="itPharmacy" type="text" value={props.inPatient.itPharmacy} onChange={props.handleChange} />
                <Form.Label htmlFor="itPharmacy">Preferred Pharmacy</Form.Label>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Control id="itEmergenName" name="itEmergenName" type="text" value={props.inPatient.itEmergenName} onChange={props.handleChange} />
                <Form.Label htmlFor="itEmergenName">Emergency Contact Name</Form.Label>
              </Col>
              <Col>
                <Form.Control id="itEmergenPhone" name="itEmergenPhone" type="text" value={props.inPatient.itEmergenPhone} onChange={props.handleChange} />
                <Form.Label htmlFor="itEmergenPhone">Emergency Contact Phone</Form.Label>
              </Col>
            </Row>
          </Container>
        </div>
  )
}

export default Step1