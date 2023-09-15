import React from 'react'
import { Container, Col, Row, Form,Button} from 'react-bootstrap'

function ContactITD() {
    function handleSubmit(){
        
        alert("Ticket Submit to IT department")
        window.location.href = "/login";
    }

    return (
        <div>
            <Container className='mt-3'>
                <Row className='d-flex justify-content-center '>
                    <Col lg={5}>
                        <Form onSubmit={ handleSubmit}>
                            <Form.Floating className='mb-3'>
                                <Form.Control id="username" name="username" type="text" />
                                <Form.Label htmlFor="username">Your Username</Form.Label>
                            </Form.Floating>

                            <Form.Control placeholder="Please describe your issue" 
                                as="textarea"  name="description"  
                                id="description" rows={5} 
                                className='mb-3' 
                            />
        
                            <div className='d-grid  gap-2 '>
                                <Button type="submit" >Submit</Button>
                            </div>
                        
                        </Form>
                    </Col>
                </Row>


            </Container>
        </div>
    )

}

export default ContactITD