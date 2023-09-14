import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Envelope, PersonCircle, Search } from 'react-bootstrap-icons';
import { Modal } from 'react-bootstrap';
import PatientSearch from '../../Page/PatientSearch/Component/patientSearch';

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
                                placeholder="First Name/Last Name/HCN"
                                aria-label="First Name/Last Name/HCN"
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

            <Modal show={show} onClick={handleClose} onHide={handleClose}>
                <Modal.Body>
                    <PatientSearch />
                </Modal.Body>
            </Modal>

        </Navbar>
    )
}

export default Header