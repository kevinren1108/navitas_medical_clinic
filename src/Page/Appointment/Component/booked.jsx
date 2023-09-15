import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Booked() {

    const appointmentInfo = useSelector((state) => state.appointment)
    const patinentInfo = useSelector((state) => state.patient)
    return (
        <div className=' border p-5 m-5'>
            <Row className='pb-3'>
                <Col className='d-flex justify-content-center'>
                    <h4 className=''>APPOINTMENT SCHEDULED</h4>
                </Col>
            </Row>

            <Row className='d-flex justify-content-center pb-3'>
                <Col sm={6}>
                    Here are the detials of patient's upcoing appointment.
                    Please notify the patient be persent at clinic
                    <span className='fw-bolder'> 15 minutes before </span>
                    the appointment.
                </Col>
            </Row>

            <Row className='d-flex justify-content-center pb-3'>
                <Col sm={6}>
                    <div className='border rounded p-3'>
                        <Row className='d-flex'>
                            <Col sm={4} className='me-auto'>
                                <div className='text-secondary fs-6 fw-light'>Category:</div>
                                <div className='text-secondary fs-6 fw-light'>Type:</div>
                                <div className='text-secondary fs-6 fw-light'>Provider:</div>
                                <div className='text-secondary fs-6 fw-light'>Date:</div >
                                <div className='text-secondary fs-6 fw-light'>Time:</div >

                            </Col>
                            <Col sm={5} className='ms-auto'>
                                <div className='text-secondary fs-6 fw-light'>{appointmentInfo.appointmentCategory}</div >
                                <div className='text-secondary fs-6 fw-light'>{appointmentInfo.appointmentType}</div >
                                <div className='text-secondary fs-6 fw-light'>{appointmentInfo.appointmentProvider}</div >
                                <div className='text-secondary fs-6 fw-light'>{appointmentInfo.appointmentDate}</div >
                                <div className='text-secondary fs-6 fw-light'>{appointmentInfo.appointmentTime}</div>
                            </Col>
                        </Row>
                        <hr />
                        <Row className='d-flex'>
                            <Col sm={4} className='me-auto'>
                                <div className='text-secondary fs-6 fw-light'>Patient:</div>
                                <div className='text-secondary fs-6 fw-light'>HCN:</div>
                                <div className='text-secondary fs-6 fw-light'>HCN Issuer:</div >


                            </Col>
                            <Col sm={5} className='ms-auto'>
                                <div className='text-secondary fs-6 fw-light'>{patinentInfo.firstName + " " + patinentInfo.lastName}</div >
                                <div className='text-secondary fs-6 fw-light'>{patinentInfo.healthCardNumber}</div >
                                <div className='text-secondary fs-6 fw-light'>{patinentInfo.healthCardIssuer}</div >

                            </Col>
                        </Row>

                    </div>
                </Col>
            </Row>
            <Row className=' d-flex justify-content-center'>
                <Col sm={6} >
                    <Button className='w-100' onClick={(e) => {e.preventDefault()} }>PRINT THIS PAGE</Button>
                </Col>

            </Row>
        </div>
    )
}

export default Booked