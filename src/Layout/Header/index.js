import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Envelope, PersonCircle, Search } from 'react-bootstrap-icons';
import { Modal } from 'react-bootstrap';

function Header() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const userFirstName = "Joe"
    const userLastName = "Doe"
    return (
        <Navbar expand="lg" className="bg-body-tertiary border-bottom ">
            <Container fluid>
                {/* <Navbar.Brand className='ms-auto' href="/">Fictional Medical Clinic</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form className={"ms-auto w-25"} onClick={() => setShow(true)}>

                        <InputGroup >
                            <InputGroup.Text id="search">
                                <Search />
                            </InputGroup.Text>
                            <Form.Control
                                // className='w-25'
                                placeholder="First Name/Last Name/MRN"
                                aria-label="First Name/Last Name/MRN"
                                aria-describedby="search"
                                id="search"
                                name="search"
                            />
                        </InputGroup>


                    </Form>
                    <Nav className="ms-auto">
                        <Nav.Link> <Envelope /> </Nav.Link>
                        <Nav.Link> <PersonCircle /> </Nav.Link>
                        <NavDropdown title={userFirstName + " " + userLastName} id="basic-nav-dropdown">
                            <NavDropdown.Item>Account</NavDropdown.Item>
                            <NavDropdown.Item>Log out</NavDropdown.Item>


                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>

            <Modal show={show} onHide={handleClose}>

                <Modal.Title className='m-3 mb-0' >
                    <InputGroup >
                        <InputGroup.Text id="search" style={{background: "none", borderRight: "0"}}>
                            <Search />  
                        </InputGroup.Text>
                        <Form.Control
                            // className='w-25'
                            placeholder="First Name/Last Name/MRN"
                            aria-label="First Name/Last Name/MRN"
                            aria-describedby="search"
                            style={{borderLeft: "0"}}
                        />
                    </InputGroup>

                </Modal.Title>


                <Modal.Body>search result place holder</Modal.Body>




                {/* redudent code */}
                {/* <NavDropdown title="Patient" id="basic-nav-dropdown">
                    <NavDropdown.Item>Patient</NavDropdown.Item>
                    <NavDropdown.Item>Doctor</NavDropdown.Item>
                    <NavDropdown.Item>Appointment</NavDropdown.Item>

                </NavDropdown> */}

            </Modal>

        </Navbar>
    )
}

export default Header