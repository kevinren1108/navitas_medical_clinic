import React from 'react'
import { Accordion, Row, Col, Container, Button } from 'react-bootstrap'
import Form from "react-bootstrap/Form";
import jsPDF from "jspdf";
import "jspdf-autotable";

function EncounterDeatil() {
    const textPlaceHolder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim a minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
    const doc = new jsPDF();
    const tableColumn = ["Field Id", "Title", "Description"];
    const tableRows = [["1", "Date of visit", "01/08/2013"], ["1", "First Name", "Mcdonload"], ["2", "Last Name", "Jepthon"],
        ["3", "Chief Complaint", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim a minim veniam, quis nostrud exercitation ullamco laboris nisi utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim a minim veniam, quis nostrud exercitation ullamco laboris nisi utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim a minim veniam, quis nostrud exercitation ullamco laboris nisi ut"],
        ["4", "Other Symptoms", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim a minim veniam, quis nostrud exercitation ullamco laboris nisi utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim a minim veniam, quis nostrud exercitation ullamco laboris nisi utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim a minim veniam, quis nostrud exercitation ullamco laboris nisi ut"],
        ["5", "React Change", "Behavior, Sleeping Habits, Weight Loss"]
    ];
    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.text("Fictional Medical Clinic" ,14, 15)
    function handleDownload(){
        doc.save(`report_.pdf`);
    }
    

    return (
        <Container className=' pb-5'>
            <div className='mt-4'>
                <div className='fs-4'>
                    Encounter Deatil
                </div>
                <Accordion defaultActiveKey="0" className='mb-3'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Health Consolation</Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <Col>
                                    Date of visit
                                    <Form.Group>
                                        <Form.Control id="visitDate" type="date" value="2013-01-08" disabled />
                                        <Form.Label htmlFor="visitDate">Date</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col>

                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    Name of Patient
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Control type="text" value="Mcdonload" id="firstName" disabled />
                                        <Form.Label className="" htmlFor="firstName">First Name</Form.Label>
                                    </Form.Group>

                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Control type="text" value="Jepthon" id="lastName" disabled />
                                        <Form.Label className="" htmlFor="lastName">Last Name</Form.Label>
                                    </Form.Group>

                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    Chief Complaint
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control as="textarea"
                                        value={textPlaceHolder + textPlaceHolder + textPlaceHolder}
                                        rows={5}
                                        disabled />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    Date When Complaint Started
                                    <Form.Group>
                                        <Form.Control id="complaintDate" type="date" value="2013-01-02" disabled />
                                        <Form.Label htmlFor="complaintDate">Date</Form.Label>
                                    </Form.Group>

                                </Col>
                                <Col>

                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    Other Symptoms
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control as="textarea"
                                        value={textPlaceHolder + textPlaceHolder + textPlaceHolder}
                                        rows={5}
                                        disabled />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    React Change
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Check disabled label="Activity" id="activity" />
                                    <Form.Check disabled defaultChecked label="Behavior" id="behavior" />
                                    <Form.Check disabled label="Bowel Routine" id="bowelRoutine" />
                                    <Form.Check disabled label="Distress/Pain" id="distressPain" />
                                    <Form.Check disabled label="Mobility" id="mobility" />
                                    <Form.Check disabled defaultChecked label="Sleeping Habits" id="sleepingHabits" />
                                    <Form.Check disabled label="Swallowing" id="swallowing" />
                                    <Form.Check disabled defaultChecked label="Weight Loss" id="weightLoss" />
                                    <Form.Check disabled label="Weight Gain" id="weightGain" />
                                    <Form.Check disabled label="Other" id="other" />
                                </Col>
                            </Row>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Follow-Up</Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <Col>
                                    Other Symptoms
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control as="textarea"
                                        value={textPlaceHolder + textPlaceHolder + textPlaceHolder}
                                        rows={5}
                                        disabled />
                                </Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <div className="d-grid gap-2 ">
                    <Button variant="primary" onClick={() => handleDownload()} >
                        Generate Report
                    </Button>

                </div>




            </div>
        </Container>
    )
}

export default EncounterDeatil