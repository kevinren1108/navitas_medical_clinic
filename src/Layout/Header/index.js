import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Envelope, PersonCircle } from 'react-bootstrap-icons';


function Header() {
    const [searchWidth, setSearchWidth] = useState("ms-auto")
    const userFirstName = "Joe"
    const userLastName = "Doe"
    return (
        <Navbar expand="lg" className="bg-body-tertiary border-bottom ">
            <Container fluid>
                {/* <Navbar.Brand className='ms-auto' href="/">Fictional Medical Clinic</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form  className={searchWidth} onFocus={() => setSearchWidth("ms-auto w-50")} onBlur={() => setSearchWidth("ms-auto ")}>
                        
                                <InputGroup >
                                    <InputGroup.Text id="basic-addon1">
                                        <NavDropdown title="Patient" id="basic-nav-dropdown">
                                            <NavDropdown.Item>Patient</NavDropdown.Item>
                                            <NavDropdown.Item>Doctor</NavDropdown.Item>
                                            <NavDropdown.Item>Appointment</NavDropdown.Item>
                                            
                                        </NavDropdown>
                                    </InputGroup.Text>
                                    <Form.Control
                                        className='w-50'
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
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
        </Navbar>
    )
}

export default Header