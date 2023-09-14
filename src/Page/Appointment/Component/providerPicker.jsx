import React, { useRef } from 'react'
import { Row, Col, Carousel, Card, Button } from 'react-bootstrap'
import AppointmentStats from './appointmentStats'
import { ArrowLeftCircle, ArrowRightCircle } from 'react-bootstrap-icons'

function ProviderPick(props) {
    const providerList = {
        "Dr. Vaneet Rai": {
            firstName: "Vaneet",
            lastName: "Rai",
            advanced: ["General", "Mental"],
            booked: {
                "9/18/2023": [1, 4, 5], "9/19/2023": [1, 2, 3, 4, 6],
                "9/20/2023": [1, 5, 6], "9/21/2023": [0, 2, 3, 5, 6],
                "9/22/2023": [1, 2, 3, 6], "9/23/2023": [2, 3, 6],
                "9/24/2023": [1], "9/25/2023": [0, 2, 3],
            }
        },
        "Dr. Daniel Pannozzo": {
            firstName: "Daniel",
            lastName: "Pannozzo",
            advanced: ["Specialist/ Other", "Prescriptions"],
            booked: {
                "9/18/2023": [0, 1, 2, 4], "9/19/2023": [1, 4, 6],
                "9/20/2023": [0, 1, 2, 6], "9/21/2023": [0, 2, 3, 5],
                "9/22/2023": [1, 2, 3, 4, 6], "9/23/2023": [0, 2, 3, 6],
                "9/24/2023": [1, 2, 3], "9/25/2023": [0, 2, 3, 4],
            }
        },
        "Dr. Imran Mushtaq": {
            firstName: "Imran",
            lastName: "Mushtaq",
            advanced: ["Requisitions", "Skin"],
            booked: {
                "9/18/2023": [0, 1, 2, 6], "9/19/2023": [1, 6],
                "9/20/2023": [1, 6], "9/21/2023": [0, 1, 2, 6],
                "9/22/2023": [0, 1, 2, 4, 6], "9/23/2023": [2, 3, 6],
                "9/24/2023": [1], "9/25/2023": [0, 3],
            }
        },
        "Dr. Chelsie Velikovsky": {
            firstName: "Chelsie",
            lastName: "Velikovsky",
            advanced: ["General", "Skin"],
            booked: {
                "9/18/2023": [0, 1, 2, 4, 5, 6], "9/19/2023": [1, 4, 6],
                "9/20/2023": [0, 2, 6], "9/21/2023": [0, 5],
                "9/22/2023": [1, 6], "9/23/2023": [0, 3, 6],
                "9/24/2023": [1, 2, 3], "9/25/2023": [0, 2, 3, 4],
            }
        },
        "Dr. Michelle Gerber": {
            firstName: "Michelle",
            lastName: "Gerber",
            advanced: ["Mental", "Requisitions"],
            booked: {
                "9/18/2023": [1, 2, 3, 4, 5], "9/19/2023": [1, 2, 3, 4, 6],
                "9/20/2023": [1, 5, 6], "9/21/2023": [1, 2, 3, 4, 5],
                "9/22/2023": [1, 2, 3, 6], "9/23/2023": [1, 2, 3, 4, 5],
                "9/24/2023": [1, 2, 3, 4], "9/25/2023": [0, 2, 3],
            }
        }
    }

    const providerNameList = Object.keys(providerList)
    const array_chunks = (array, chunk_size) => Array(Math.ceil(array.length / chunk_size)).fill().map((_, index) => index * chunk_size).map((begin) => array.slice(begin, begin + chunk_size));
    const chunks = array_chunks(providerNameList, 3);
    const ref = useRef(null)

    const onPrevClick = () => {
        ref.current.prev();
    };
    const onNextClick = () => {
        ref.current.next();
    };



    return (

        <div className='flex border p-5 m-5'>
            <Row className="mb-3">
                <Col sm={3}>
                    <div className='mb-2'>
                        Recommend Provider:
                    </div>
                    <Card style={{ width: '18rem' }} >
                        <Card.Body>
                            <Card.Title>
                                {providerList["Dr. Imran Mushtaq"].firstName + " " + providerList["Dr. Imran Mushtaq"].lastName}
                            </Card.Title>
                            <Card.Text>
                                <p>Speicilize In: </p> {providerList["Dr. Imran Mushtaq"].advanced.map((value, key) => (<span className="fw-lighter" key={key}>{value + ". "}</span>))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={9}>
                    <div className='mb-2'>
                        <span className=''>Other Providers: </span>
                        <ArrowLeftCircle className='fs-3 me-1 text-primary' style={{height: "24px", width: "24px"}} onClick={onPrevClick} />
                        <ArrowRightCircle className='fs-3 text-primary' style={{height: "24px", width: "24px"}} onClick={onNextClick} />
                    </div>


                    <Carousel ref={ref} interval={null}>
                        {chunks.map((chuk, key) => {
                            return (
                                <Carousel.Item key={key} className='' >
                                    <Row>
                                        {chuk.map((value, key) => {
                                            return (
                                                <Col md={4} className='mb-3' key={key}>
                                                    <Card style={{ width: '18rem' }} >

                                                        <Card.Body>
                                                            <Card.Title>
                                                                {providerList[value].firstName + " " + providerList[value].lastName}
                                                            </Card.Title>
                                                            <Card.Text>
                                                                <p>Speicilize In: </p>
                                                                {providerList[value].advanced.map((value, key) => (<span key={key} className='fw-lighter'>{value + ". "}</span>))}
                                                            </Card.Text>
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

            <AppointmentStats step={2} {...props} />
        </div>
    )
}

export default ProviderPick