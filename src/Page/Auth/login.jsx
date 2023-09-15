import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap'
import React, { useState } from 'react'
import { useAuth } from '../../Routes/authProvider'
import { ExclamationCircle } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { handleAuthAlertDelete, handleAuthAlertPush } from './store/authSlice';
// handleAuthAlertDelete, handleAuthAlertPush
function Login() {
    const { login } = useAuth();

    const authAlert = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    // const [alert, setAlert] = useState([])
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const validation = (e) => {
        e.preventDefault()
        
        if (password === "") {
            dispatch(handleAuthAlertPush("Please Entre Password"))
        } else {
            dispatch(handleAuthAlertDelete("Please Entre Password"))
        }
        if (username === "") {
            dispatch(handleAuthAlertPush("Please Entre Username"))
        } else {
            dispatch(handleAuthAlertDelete("Please Entre Username"))
        }
        if (username !== "" && password !== "") {
            handleSubmit()
        }
    }

    const handleSubmit = () => {

        login({
            username: username,
            password: password,
        })
    };

    return (
        <Container className='  mt-5' >

            <Row className='d-flex justify-content-end'>
                <Col lg={8} sm={0}>
                </Col>
                <Col lg={4} sm={12} className='border p-3' >
                    <div className=''>
                        
                        <p className='mb-3 fs-4 fw-bolder'>
                        LOGIN
                        </p>
                        {authAlert.alert.length > 0 ? <Alert variant="danger" className=''>
                            {authAlert.alert.map((value, key) => (
                                <div key={key} className='d-flex '>
                                    <ExclamationCircle className="me-1" style={{ height: "24px" }} />
                                    <span>{value}</span>
                                </div>
                            ))
                            }
                        </Alert> : <></>}
                        <Form onSubmit={(e) => validation(e)}>

                            <Form.Floating className='mb-3'>
                                <Form.Control id="username" name="username" type="text"
                                    autoCapitalize="none"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <Form.Label htmlFor="username">Username</Form.Label>
                            </Form.Floating>

                            <Form.Floating className='mb-3'>
                                <Form.Control id="password" name="password" type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Form.Label htmlFor="password">Password</Form.Label>
                            </Form.Floating>

                            <div className='d-grid  gap-2 '>
                                <Button type="submit" >Submit</Button>
                            </div>
                            <a className='d-flex justify-content-end' href='/contactITD'>
                                Have trouble when you login?
                            </a>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default Login