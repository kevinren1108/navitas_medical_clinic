import React from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'
import AppointmentStats from './appointmentStats'
import { useDispatch, useSelector } from 'react-redux'
// import './Asserts/doc1.webp'
// import './Asserts/doc2.webp'
// import './Asserts/doc3.webp'
// import './Asserts/doc4.webp'
// import './Asserts/doc5.webp'
// import './Asserts/doc6.webp'
// import './Asserts/doc7.webp'

import { handleProviderUpdate, handleAlertPush, handleAlertDelete } from '../store/appointmentSlice'
import "../style.css"

function ProviderPick(props) {
    const appointmentInfo = useSelector((state) => state.appointment)
    const dispatch = useDispatch()
    const providerNameList = Object.keys(appointmentInfo.providerList).filter(item => item !== "Dr. Imran Mushtaq")


    function formValidation() {
        if (appointmentInfo.appointmentProvider === "") {
            dispatch(handleAlertPush("Choose Provider"))
        } else {
            dispatch(handleAlertDelete("Choose Provider"))
        }
        if (appointmentInfo.appointmentProvider !== "") {

            props.nextStep();
        }
    };


    return (
        <Container className='pt-3 pb-5'>
            <div className='flex'>
                <Row>
                    <Col className='pb-3'>
                        <h5>Appointment Categary Selected:</h5>
                        <span className='text-primary fw-bold' >{appointmentInfo.appointmentCategory}</span>
                        <h5>Appointment type Selected:</h5>
                        <span className='text-primary fw-bold'> {appointmentInfo.appointmentType}</span>
                    </Col>
                </Row>

                <AppointmentStats step={2} {...props} nextStep={formValidation} />

                <Row className="mb-3">
                    <Col sm={12} lg={12} className='mb-3'>
                        <div className='mb-2 fw-bold'>
                            Recommend Provider:
                        </div>
                        <Card
                            className={appointmentInfo.appointmentProvider === "Dr. Imran Mushtaq" ? "docCard border-primary border-3" : "docCard"}
                            onClick={() => { dispatch(handleProviderUpdate("Dr. Imran Mushtaq")) }} >
                            <Card.Img variant="top" src={"./Asserts/doc1.webp"} />
                            <Card.Body>
                                <Card.Title>
                                    {"Dr. " + appointmentInfo.providerList["Dr. Imran Mushtaq"].firstName + " " +
                                        appointmentInfo.providerList["Dr. Imran Mushtaq"].lastName}
                                </Card.Title>
                                <div>Speicilize In:</div>
                                {appointmentInfo.providerList["Dr. Imran Mushtaq"].advanced.map((value, key) => (
                                    <div className="fw-lighter" key={key}>{value}</div>
                                ))}

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} lg={12}>
                        <div className='mb-2'>
                            <span className='fw-bold'>Other Providers: </span>
                        </div>

                        <Row>
                            <Col md={12} className='mb-3 d-flex flex-wrap' >
                                {providerNameList.map((value, key) => (
                                    <Card key={key}
                                        // style={{ width: '18rem' }}
                                        className={appointmentInfo.appointmentProvider === value ? "docCard border-primary border-3 me-3 mb-3" : "docCard me-3 mb-3"}
                                        onClick={() => { dispatch(handleProviderUpdate(value)) }}
                                    >
                                        <Card.Img variant="top" src={"./Asserts/doc" + (parseInt(key) + 2) + ".webp"} />
                                        <Card.Body>
                                            <Card.Title>
                                                {"Dr. " + appointmentInfo.providerList[value].firstName + " " +
                                                    appointmentInfo.providerList[value].lastName}
                                            </Card.Title>

                                            <div>Speicilize In: </div>
                                            {appointmentInfo.providerList[value].advanced.map((value, key) =>
                                            (<div key={key}
                                                className='fw-lighter'>
                                                {value}
                                            </div>))
                                            }
                                        </Card.Body>
                                    </Card>
                                )
                                )}
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <AppointmentStats step={2} {...props} nextStep={formValidation} />
            </div>
        </Container>

    )
}

export default ProviderPick