import React from 'react'
import { Container, Accordion } from 'react-bootstrap'
import HistoryCard from './historyCard'

function AppointmentHistory() {
    return (
        <div>
            <Container>
                <section className='fw-bold mb-3' >Upcoming Appointment</section>
                <Accordion className='mb-3' defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>9/11/2023</Accordion.Header>
                        <Accordion.Body>
                            <HistoryCard />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <section className='fw-bold mb-3' >History Appointment</section>
                <Accordion >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>11/5/2022</Accordion.Header>
                        <Accordion.Body>
                            <HistoryCard />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>4/13/2022</Accordion.Header>
                        <Accordion.Body>
                            <HistoryCard />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>1/18/2022</Accordion.Header>
                        <Accordion.Body>
                            <HistoryCard />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>9/28/2021</Accordion.Header>
                        <Accordion.Body>
                            <HistoryCard />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </Container>
        </div>
    )
}

export default AppointmentHistory