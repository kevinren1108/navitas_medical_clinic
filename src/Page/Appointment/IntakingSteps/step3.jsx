import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'


function Step3(props) {
    return (
        <div>
            <Row>
                <h5>Immunizations</h5>
                <Col>
                    <Form.Group className='mb-3'>
                        
						<Form.Check id="itTetanus" name="itTetanus" 
                            type="checkbox" label='Tetanus' 
                            checked={props.inPatient.itTetanus}  
                            onChange={props.handleChange}
                        />
                        <Form.Check id="itPneumonia" name="itPneumonia" 
                            type="checkbox" label='Pneumonia' 
                            checked={props.inPatient.itPneumonia}  
                            onChange={props.handleChange}
                        />
                        <Form.Check id="itShingles" name="itShingles" 
                            type="checkbox" label='Shingles' 
                            checked={props.inPatient.itShingles}  
                            onChange={props.handleChange}
                        />
                        
					</Form.Group>
                </Col>
                <Col>
                    <Form.Group className='mb-3'>
                        
						<Form.Check id="itCovidVac" name="itCovidVac" 
                            type="checkbox" label='COVID Vaccines' 
                            checked={props.inPatient.itCovidVac}  
                            onChange={props.handleChange}
                        />
                        <Form.Check id="itChildhood" name="itChildhood" 
                            type="checkbox" label='Childhood Immunizations' 
                            checked={props.inPatient.itChildhood}  
                            onChange={props.handleChange}
                        />
                        
					</Form.Group>
                </Col>
            </Row>
            
            <Row>
                <h5>Allergies</h5>
                <Col>
                    <Form.Group className='mb-3'>
                        <div className=' d-flex'>
                            <div className="me-auto">
                                <Form.Label  htmlFor="itAllergY">Have allergies</Form.Label>
                            </div>
                            <div className='ms-auto'>
                                <Form.Check name="itAllerg" id="itAllergY" inline label="Yes" type='radio' />
                                <Form.Check name="itAllerg" id="itAllergN" inline label="No"  type='radio' />
                            </div>
                            
                            
                        </div>
                        <span className='mb-3'>If yes, describe the reaction that occured with each medication</span>
						<Form.Control as="textarea" name="itAllegT" id="itAllegT" rows={3} />
                        
					</Form.Group>

                </Col>
            </Row>
        </div>
    )

}


export default Step3