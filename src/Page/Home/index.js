import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Container, Alert } from 'react-bootstrap'
import { Calendar3, Person, PlusCircleDotted } from 'react-bootstrap-icons'
import { Timeline } from 'antd';


function Home() {

    const [renderLegalDoc, setRenderLegalDoc] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setRenderLegalDoc(false);
        }, 5000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <Container className='pt-3'>
            {renderLegalDoc? <Alert variant='info' >Please note that all data, including names, gender, and medical history, on this website is randomly generated. 
                <a href="https://www.freepik.com">Picture Provided by Freepik</a> and  {" "}
                <a href="https://mockapi.io/projects">Mock API by mockapi</a>
            </Alert>: <></>}
            <Row className=''>
                <Col md={6} sm={12} className='mb-3'>
                    <Card className='position-relative flex p-3 overflow-hidden' style={{ backgroundColor: "#cfe2ff" }} onClick={() => { window.location.href = "/patient" }}>
                        <div className='position-absolute top-0 start-0'>
                            <Person className="" style={{ fontSize: "150px" }} />
                        </div>
                        <div className='ms-auto' >
                            <Card.Title className='text-end'>Patient</Card.Title>
                            <section className='text-end'>4</section>
                            <section className='text-end'>Today</section>
                        </div>
                    </Card>
                </Col>
                <Col md={6} sm={12} className='mb-3'>
                    <Card className='position-relative flex p-3 overflow-hidden' style={{ backgroundColor: "#cfe2ff" }} onClick={() => { window.location.href = "/appointment" }}>
                        <div className='position-absolute top-20 start-20'>
                            <Calendar3 className="" style={{ fontSize: "120px" }} />
                        </div>
                        <div className='ms-auto'>
                            <Card.Title className='text-end' >Appointments</Card.Title>
                            <section className='text-end'> 4</section>
                            <section className='text-end'>Today</section>
                        </div>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md={6} sm={12} className='mb-3'>
                    <Card className='position-relative flex p-3 ' style={{ backgroundColor: "#cfe2ff" }} >
                        <Card.Title className=''>
                            <div className='d-flex justify-content-between'>
                                <span>Upcoming Appointment </span>
                                <PlusCircleDotted onClick={() => { window.location.href = "/appointment" }} />
                            </div>
                        </Card.Title>
                        <hr />
                        <Row className=''>
                            <Col className='me-auto'>
                                <div className='text-secondary fs-6 fw-light text-wrap'>Category:</div>
                                <div className='text-secondary fs-6 fw-light text-wrap'>Type:</div>
                                <div className='text-secondary fs-6 fw-light text-wrap'>Provider:</div>
                                <div className='text-secondary fs-6 fw-light text-wrap'>Time:</div >
                                <div className='text-secondary fs-6 fw-light text-wrap'>Duration:</div >

                            </Col>
                            <Col className='ms-auto'>
                                <div className='text-secondary fs-6 fw-light text-wrap'>Requisitions</div >
                                <div className='text-secondary fs-6 fw-light text-wrap'>Review My Lab Result</div >
                                <div className='text-secondary fs-6 fw-light text-wrap'>Dr. Vaneet Rai</div >
                                <div className='text-secondary fs-6 fw-light text-wrap'>09:00</div >
                                <div className='text-secondary fs-6 fw-light text-wrap'>45 minutes</div>
                            </Col>
                        </Row>
                        <hr />
                        <Row className=''>
                            <Col className='me-auto'>
                                <div className='text-secondary fs-6 fw-light'>Patient:</div>
                                <div className='text-secondary fs-6 fw-light'>HCN:</div>
                                <div className='text-secondary fs-6 fw-light'>HCN Issuer:</div >


                            </Col>
                            <Col className='ms-auto'>
                                <div className='text-secondary fs-6 fw-light'>Kameron Bosco</div >
                                <div className='text-secondary fs-6 fw-light'>046034894</div >
                                <div className='text-secondary fs-6 fw-light'>Illinois</div >

                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col md={6} sm={12} className='mb-3'>
                    <Card className='position-relative flex p-3 ' style={{ backgroundColor: "#cfe2ff" }}>
                        <Card.Title className=''>
                            <div className='d-flex justify-content-between'>
                                <span>Appointment Timeline </span>
                                <PlusCircleDotted onClick={() => { window.location.href = "/appointment" }} />
                            </div>
                        </Card.Title>
                        <hr />
                        <Timeline
                            mode="left"
                            items={[
                                {
                                    label: '09:00 - 09:45 Review My Lab Result',
                                    children: 'Kameron Bosco with Dr. Vaneet Rai ',
                                },
                                {
                                    label: '09:00 - 09:45 General Appointment',
                                    children: 'Britney Batz with Dr. Michelle Gerber',
                                },
                                {
                                    label: '10:00 - 10:45 Skin Issue',
                                    children: 'Sebastian Cremin with Dr. Imran Mushtaq',
                                },
                                {
                                    label: '11:00 - 11:45 Sport Medicine Consultation',
                                    children: 'Evelyn Lubowitz with Dr. Chelsie Velikovsky',
                                },
                                {
                                    label: '11:00 - 11:45 Weight Loss Consult',
                                    children: 'Rickie Bieier with Dr. Daniel Pannozzo',
                                },
                                {
                                    label: '11:00 - 11:45 Medication Prescriptions',
                                    children: 'Junior Bieier with Dr. Michelle Gerber',
                                },
                                {
                                    label: '13:00 - 13:45 Blood Test, X-Ray',
                                    children: 'Amina White with Dr. Chelsie Velikovsky',
                                },
                                {
                                    label: '13:00 - 13:45 Sport Medicine Consultation',
                                    children: 'Brionna Wolf with Dr. James Fahmed',
                                },
                                {
                                    label: '14:00 - 14:45 Travel Consult',
                                    children: 'Elisha Gibson with Dr. Jacky Todi',
                                },
                                {
                                    label: '15:00 - 15:45 Joint Pain',
                                    children: 'Eloisa Wolf with Dr. Chelsie Velikovsky',
                                }
                            ]}
                        />

                    </Card>


                </Col>
            </Row>



        </Container>

    )
}

export default Home