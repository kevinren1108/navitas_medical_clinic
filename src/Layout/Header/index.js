import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Envelope, PersonCircle, Search } from 'react-bootstrap-icons';
import { Button, Modal } from 'react-bootstrap';
import PatientSearch from '../../Page/PatientSearch/Component/patientSearch';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../Routes/authProvider';

function Header() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const location = useLocation()
    const { logout } = useAuth();

    // eslint-disable-next-line
    const [user, setUser] = useState( () => {
        const user = JSON.parse(localStorage.getItem('user'));
        return user || "";
    });

    

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Fictional Medical Clinic</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {location.pathname === "/login" || location.pathname === "/contactITD" ? <></> :
                        <Nav className="me-auto">
                            <Nav.Link href="/patient">PATIENT</Nav.Link>
                            <Nav.Link href="/appointment">APPOINTMENT</Nav.Link>
                            <Nav.Link href="/newbooking">NEW BOOKING</Nav.Link>

                        </Nav>
                    }


                    <Nav>
                        {location.pathname === "/" || location.pathname === "/login" || location.pathname === "/contactITD" ? <></> :
                            <Button onClick={() => setShow(true)} ><Search />Search</Button>
                        }

                        {location.pathname === "/login" || location.pathname === "/contactITD" ? <></> :
                            <>
                                <Nav.Link> <Envelope /></Nav.Link>
                                <Nav.Link> <PersonCircle /></Nav.Link>

                                <NavDropdown title={"Welcome, " + user.username} id="collapsible-nav-dropdown">
                                    <NavDropdown.Item>Account</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => logout()} >Log out</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        }



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