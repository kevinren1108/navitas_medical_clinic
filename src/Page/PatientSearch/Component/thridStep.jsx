import React, {useState} from 'react'
import {  Col, Form, Row, InputGroup } from 'react-bootstrap'
import { PlusCircle, XCircleFill } from 'react-bootstrap-icons'
import IntakeStats from './intakeStats'

function ThirdStep(props) {
	const [nextStyle, setNextStyle] = useState("") // eslint-disable-line

	const submit = () => {
        alert('You did it! Yay!') // eslint-disable-line
    };

	return (
		<Form>
			<Row>
				<h5>Immunizations</h5>
				<Col>
					<Form.Group className='mb-3'>

						<Form.Check id="itTetanus" name="itTetanus"
							type="checkbox" label='Tetanus'
							checked={props.form.itTetanus}
							onChange={props.handleFormChange('itTetanus')}
						/>
						<Form.Check id="itPneumonia" name="itPneumonia"
							type="checkbox" label='Pneumonia'
							checked={props.form.itPneumonia}
							onChange={props.handleFormChange('itPneumonia')}
						/>
						<Form.Check id="itShingles" name="itShingles"
							type="checkbox" label='Shingles'
							checked={props.form.itShingles}
							onChange={props.handleFormChange('itShingles')}
						/>

					</Form.Group>
				</Col>
				<Col>
					<Form.Group className='mb-3'>

						<Form.Check id="itCovidVac" name="itCovidVac"
							type="checkbox" label='COVID Vaccines'
							checked={props.form.itCovidVac}
							onChange={props.handleFormChange('itCovidVac')}
						/>
						<Form.Check id="itChildhood" name="itChildhood"
							type="checkbox" label='Childhood Immunizations'
							checked={props.form.itChildhood}
							onChange={props.handleFormChange('itChildhood')}
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
								<Form.Label htmlFor="itAllergY">HAVE ALLERGIES?</Form.Label>
							</div>
							<div className='ms-auto'>
								<Form.Check inline name="itAllerg" 
									id="itAllergY" 
									value="Yes"  
									label="Yes" 
									type='radio' 
									checked={props.form.itAllerg === 'Yes'}
									onChange={props.handleFormChange('itAllerg')}
								/>
								<Form.Check inline name="itAllerg" 
									id="itAllergN" 
									value="No"  
									label="No" 
									type='radio' 
									checked={props.form.itAllerg === 'No'}
									onChange={props.handleFormChange('itAllerg')}
									disabled={props.form.itAllergList.length > 0}
								/>
							</div>
						</div>

						<InputGroup className="mb-3">
							<Form.Control style={{borderRight: "0"}} 
								value={props.form.itAllergInput}
								name="itAllergInput" 
								id="itAllergInput"
								
								onChange={props.handleFormChange('itAllergInput')} 
								disabled={props.form.itAllerg !== "Yes"}	
							/>
							<InputGroup.Text 
								onClick={() => props.addItemToList("itAllerg", "itAllergList", "itAllergInput")} 
								style={{background: "none", borderLeft: "0"}}>
								<PlusCircle />
							</InputGroup.Text>
						</InputGroup>
						
						<div className='mb-3'>
							{props.form.itAllergList.map((value, key) => (
								
								<div className='border rounded-pill d-inline-block p-3 pt-2 
								pb-2 w-auto m-1 ms-0' key={key}>
									<span className='text-break'>{value}</span>
									<XCircleFill className='ms-1 text-danger fs-5' 
										onClick={() => props.deleteItemFromList("itAllergList" ,value)}	
									/>
								</div>
								
								))
							}
						</div>

					</Form.Group>

				</Col>
			</Row>

			<Row>
				<h5>Medications</h5>
				<Col>
					<Form.Group className='mb-3'>
						<div className=' d-flex'>
							<div className="me-auto">
								<Form.Label htmlFor="itMedY">TAKING MEDICATIONS?</Form.Label>
							</div>
							<div className='ms-auto'>
								<Form.Check inline name="itMed" 
									id="itMedY" 
									value="Yes"  
									label="Yes" 
									type='radio' 
									checked={props.form.itMed === 'Yes'}
									onChange={props.handleFormChange('itMed')}
								/>
								<Form.Check inline name="itMed" 
									id="itMedN" 
									value="No"  
									label="No" 
									type='radio' 
									checked={props.form.itMed === 'No'}
									onChange={props.handleFormChange('itMed')}
									disabled={props.form.itMedList.length > 0}
								/>
							</div>
						</div>

						<InputGroup className="mb-3">
							<Form.Control style={{borderRight: "0"}} 
								value={props.form.itMedInput}
								name="itMedInput" 
								id="itMedInput"
								onChange={props.handleFormChange("itMedInput")} 
								disabled={props.form.itMed !== "Yes"}	
							/>
							<InputGroup.Text 
								onClick={() => props.addItemToList("itMed", "itMedList", "itMedInput")} 
								style={{background: "none", borderLeft: "0"}}>
								<PlusCircle />
							</InputGroup.Text>
						</InputGroup>
						
						<div className='mb-3'>
							{props.form.itMedList.map((value, key) => (
								
								<div className='border rounded-pill
									d-inline-block p-3 pt-2 pb-2 w-auto m-1 ms-0' key={key}>
									<span className='text-break'>{value}</span>
									<XCircleFill className='ms-1 text-danger fs-5' 
										onClick={() => props.deleteItemFromList("itMedList" ,value)}		
									/>
								</div>
								
								))
							}
						</div>

					</Form.Group>
					
				</Col>
			</Row>

			<Row>
				<h5>CONDITIONS</h5>
				<Col>
					<Form.Group className='mb-3'>
						<div className=' d-flex'>
							<div className="me-auto">
								<Form.Label htmlFor="itCondY">CURRENT HEALTH CONCERNS</Form.Label>
							</div>
							<div className='ms-auto'>
								<Form.Check inline name="itCond" 
									id="itCondY" 
									value="Yes"  
									label="Yes" 
									type='radio' 
									checked={props.form.itCond === 'Yes'}
									onChange={props.handleFormChange("itCond")}
								/>
								<Form.Check inline name="itCond" 
									id="itCondN" 
									value="No"  
									label="No" 
									type='radio' 
									checked={props.form.itCond === 'No'}
									onChange={props.handleFormChange("itCond")}
									disabled={props.form.itCondList.length > 0}
								/>
							</div>
						</div>
						
						<InputGroup className="mb-3">
							<Form.Control style={{borderRight: "0"}} 
								value={props.form.itCondInput}
								name="itCondInput" 
								id="itCondInput"
								onChange={props.handleFormChange("itCondInput")} 
								disabled={props.form.itCond !== "Yes"}	
							/>
							<InputGroup.Text 
								onClick={() => props.addItemToList("itCond", "itCondList", "itCondInput")}
								style={{background: "none", borderLeft: "0"}}>
								<PlusCircle />
							</InputGroup.Text>
						</InputGroup>
						
						<div className='mb-3'>
							{props.form.itCondList.map((value, key) => (
								
								<div className='border rounded-pill
									d-inline-block p-3 pt-2 pb-2 w-auto m-1 ms-0' key={key}>
									<span className='text-break'>{value}</span>
									<XCircleFill className='ms-1 text-danger fs-5' 
										onClick={() => props.deleteItemFromList("itCondList" ,value)}
									/>
								</div>
								
								))
							}
						</div>

					</Form.Group>
					
				</Col>
			</Row>
			<IntakeStats step={3} {...props} nextStep={submit} nextStyle={nextStyle} />
		</Form>
	)
}

export default ThirdStep