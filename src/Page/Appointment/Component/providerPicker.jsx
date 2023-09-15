import React, { useRef } from 'react'
import { Row, Col, Carousel, Card, Container } from 'react-bootstrap'
import AppointmentStats from './appointmentStats'
import { ArrowLeftCircle, ArrowRightCircle } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import doc1 from '../../../Assets/doc1.jpg'
import { handleProviderUpdate, handleAlertPush, handleAlertDelete } from '../store/appointmentSlice'


function ProviderPick(props) {
    const appointmentInfo = useSelector((state) => state.appointment)
    const dispatch = useDispatch()
    const providerNameList = Object.keys(appointmentInfo.providerList)
    const array_chunks = (array, chunk_size) => Array(Math.ceil(array.length / chunk_size)).fill().map((_, index) => index * chunk_size).map((begin) => array.slice(begin, begin + chunk_size));
    const chunks = array_chunks(providerNameList, 3);
    const ref = useRef(null)

    const onPrevClick = () => {
        ref.current.prev();
    };
    const onNextClick = () => {
        ref.current.next();
    };

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
                <Row className="mb-3">
                    <Col sm={3}>
                        <div className='mb-2'>
                            Recommend Provider:
                        </div>
                        <Card style={{ width: '18rem' }}
                            className={appointmentInfo.appointmentProvider === "Dr. Imran Mushtaq" ? "border-primary border-3" : ""}
                            onClick={() => { dispatch(handleProviderUpdate("Dr. Imran Mushtaq")) }} >
                            <Card.Img variant="top" src={doc1} />
                            <Card.Body>
                                <Card.Title>
                                    {appointmentInfo.providerList["Dr. Imran Mushtaq"].firstName + " " +
                                        appointmentInfo.providerList["Dr. Imran Mushtaq"].lastName}
                                </Card.Title>
                                <div>Speicilize In:</div>
                                {appointmentInfo.providerList["Dr. Imran Mushtaq"].advanced.map((value, key) => (
                                    <div className="fw-lighter" key={key}>{value}</div>
                                ))}

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={9}>
                        <div className='mb-2'>
                            <span className=''>Other Providers: </span>
                            <ArrowLeftCircle className='fs-3 me-1 text-primary'
                                style={{ height: "24px", width: "24px" }}
                                onClick={onPrevClick} />
                            <ArrowRightCircle className='fs-3 text-primary'
                                style={{ height: "24px", width: "24px" }}
                                onClick={onNextClick} />
                        </div>


                        <Carousel ref={ref} interval={null} controls={false}>
                            {chunks.map((chuk, key) => {
                                return (
                                    <Carousel.Item key={key} className='' >
                                        <Row>
                                            {chuk.map((value, key) => {
                                                return (
                                                    <Col md={4} className='mb-3' key={key}>
                                                        <Card style={{ width: '18rem' }}
                                                            className={appointmentInfo.appointmentProvider === value ? "border-primary border-3" : ""}
                                                            onClick={() => { dispatch(handleProviderUpdate(value)) }}
                                                        >
                                                            <Card.Img variant="top" src={doc1} />
                                                            <Card.Body>
                                                                <Card.Title>
                                                                    {appointmentInfo.providerList[value].firstName + " " +
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
                                                    </Col>

                                                );
                                            })}
                                        </Row>
                                    </Carousel.Item>
                                );
                            })}
                        </Carousel>


                    </Col>
                </Row>

                <AppointmentStats step={2} {...props} nextStep={formValidation} />
            </div>
        </Container>

    )
}

export default ProviderPick