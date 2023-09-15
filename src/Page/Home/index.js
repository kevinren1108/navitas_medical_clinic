import React  from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'
import { Calendar3, Person } from 'react-bootstrap-icons'
import { Timeline } from 'antd';


function Home() {

    return (
        <Container>
            <Row className='mb-3'>
                <Col md={6} sm={12} className='pt-3'>
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
                <Col md={6} sm={12} className='pt-3'>
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
                <Col md={6} sm={12} className=''>
                    <Card className='position-relative flex p-3 ' style={{ backgroundColor: "#cfe2ff" }} onClick={() => { window.location.href = "/appointment" }}>
                        <Card.Title className='mb-3'> Appointment Timeline</Card.Title>
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
                            ]}
                        />

                    </Card>
                </Col>
                <Col md={6} sm={12} className=''>
                    <Card className='position-relative flex p-3 ' style={{ backgroundColor: "#cfe2ff" }} onClick={() => { window.location.href = "/appointment" }}>
                        <Card.Title className='mb-3'> Appointment Timeline</Card.Title>
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
                                    label: '11:00 - 11:45 Sport Medicine Consultation',
                                    children: 'Evelyn Lubowitz with Dr. Chelsie Velikovsky',
                                },
                                {
                                    label: '11:00 - 11:45 Sport Medicine Consultation',
                                    children: 'Evelyn Lubowitz with Dr. Chelsie Velikovsky',
                                },
                                {
                                    label: '11:00 - 11:45 Sport Medicine Consultation',
                                    children: 'Evelyn Lubowitz with Dr. Chelsie Velikovsky',
                                },
                                {
                                    label: '11:00 - 11:45 Sport Medicine Consultation',
                                    children: 'Evelyn Lubowitz with Dr. Chelsie Velikovsky',
                                },
                                {
                                    label: '11:00 - 11:45 Sport Medicine Consultation',
                                    children: 'Evelyn Lubowitz with Dr. Chelsie Velikovsky',
                                },
                                {
                                    label: '11:00 - 11:45 Sport Medicine Consultation',
                                    children: 'Evelyn Lubowitz with Dr. Chelsie Velikovsky',
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