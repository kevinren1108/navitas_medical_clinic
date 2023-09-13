import React, { useState } from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { PlusCircle, XCircleFill } from 'react-bootstrap-icons'
import StepWizard from 'react-step-wizard';
import 'animate.css';


function PatientIntakeForm() {

	// Form States
	const [inPatient, SetInPatient] = useState({
		itDate: "", 
		// Patient personal info
		itFName: "", itLName: "", itDoB: "", 
		itHeight: "", itWeight: "", itGender: "",
		// Patient personal contact
		itPhone: "", itAPhone: "", itEmail: "", 
		// Patient healthcare info
		itPharmacy: "", itHealthNo: "", 
		itEmergenName: "", itEmergenPhone: "", 
		itInsProvder: "", itInsGroup: "", itInsCosID: "", 
		// Patient Address info
		itAddress: "", itCity: "", itProv: "", itPostal: "", 
		itMAddress: "", itMCity: "", itMProv: "", itMPostal: "", 
		itAPsame: false, itMailEnable: true,
		// Patient immu info
		itTetanus: false, itPneumonia: false, itShingles: false,
		itCovidVac: false, itChildhood: false, 
		// Patient allergies info
		itAllerg: "No", itAllergInput: "", itAllergList: [],
		// Patient Medications info
		itMed: "No", itMedInput: "", itMedList: []
	})

	// Handle different type form change
	const handleChange = (e) => {
		// Handle change for checkbox
		if (e.target.type === "checkbox") {
			if (e.target.checked === true) 
				SetInPatient({ ...inPatient, [e.target.name]: true })
			else 
				SetInPatient({ ...inPatient, [e.target.name]: false })
		// Handle change for radio selection
		}else if(e.target.type === "select-one"){
			SetInPatient({...inPatient, [e.target.name]: e.target.value})
		// Handle change for all other input type( text input, textare, etc)
		}else {
			SetInPatient({ ...inPatient, [e.target.name]: e.target.value })
		}
	}

	// Handle same physical and mailing address check box 
	const handleSameAddress = (e) => {
		if (e.target.checked === true) {
			SetInPatient({ ...inPatient, itAPsame: true, itMailEnable: false, 
				itMAddress: inPatient.itAddress, 
				itMCity: inPatient.itCity,
				itMProv: inPatient.itProv,
				itMPostal: inPatient.itPostal })
			
		}else{
			SetInPatient({ ...inPatient, itAPsame: false, itMailEnable: true,
				itMAddress: "", 
				itMCity: "",
				itMProv: "",
				itMPostal: "" })
		}
	}

	// Handle add allergie
	const addAllergies = (newValue) => {
		if(newValue && !inPatient.itAllergList.includes(newValue)){
			SetInPatient({...inPatient, itAllergList: [...inPatient.itAllergList, newValue ], itAllergInput: ""})
		}else{
			SetInPatient({...inPatient, itAllergInput: ""})
		}
		
	}

	const handleAllergDelete = (deleteItem) => {
		const updateList = inPatient.itAllergList.filter(item => item !== deleteItem)
		SetInPatient({...inPatient, itAllergList: updateList})
	}
	 
	// Handle add medications
	const addMedications = (newValue) => {
		if(newValue && !inPatient.itMedList.includes(newValue)){
			SetInPatient({...inPatient, itMedList: [...inPatient.itMedList, newValue ], itMedInput: ""})
		}else{
			SetInPatient({...inPatient, itMedInput: ""})
		}
		
	}
	
	const handleMedDelete = (deleteItem) => {
		const updateList = inPatient.itMedList.filter(item => item !== deleteItem)
		SetInPatient({...inPatient, itMedList: updateList})
	}

	return (
		<div className='mt-2'>
			<h5>Patient Intaking Form</h5>


			<StepWizard
				isLazyMount={true}
				isHashEnabled
				// transitions={custom}
				// nav={<Nav />}
			>
				<First inPatient={inPatient} handleChange={handleChange} />
				<Second 
					inPatient={inPatient} 
					handleChange={handleChange} 
					handleSameAddress={handleSameAddress} 
				/>
				<Third inPatient={inPatient} 
					handleChange={handleChange} 
					addAllergies={addAllergies} 
					handleAllergDelete={handleAllergDelete}
					addMedications={addMedications}
					handleMedDelete={handleMedDelete}
				/>
			</StepWizard>
		</div>
	);
}

export default PatientIntakeForm

const Stats = ({ nextStep, previousStep, totalSteps, step }) => (
	<div className="d-flex justify-content-center ">
		{step > 1 &&
			<Button className='btn btn-secondary btn-block' onClick={previousStep}>Go Back</Button>
		}
		{step < totalSteps ?
			<Button className='btn btn-secondary btn-block ms-auto' onClick={nextStep}>Continue</Button>
			:
			<Button className='btn btn-success btn-block ms-auto' onClick={nextStep}>Finish</Button>
		}
	</div>
);

function First(props) {
	return (
		<div>
			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itDate" name="itDate" type="date"
							value={props.inPatient.itDate}
							onChange={props.handleChange} />
						<Form.Label htmlFor="itDate">Date of this form was completed</Form.Label>
					</Form.Floating>

				</Col>
			</Row>
			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itFName" name="itFName" type="text"
							value={props.inPatient.itFName}
							onChange={props.handleChange} />
						<Form.Label htmlFor="itFName">Given Name</Form.Label>
					</Form.Floating>

				</Col>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itLName" name="itLName" type="text"
							value={props.inPatient.itLName}
							onChange={props.handleChange} />
						<Form.Label htmlFor="itLName">Last Name</Form.Label>
					</Form.Floating>

				</Col>
			</Row>
			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itDoB" name="itDoB" type="date"
							value={props.inPatient.itDoB}
							onChange={props.handleChange} />
						<Form.Label htmlFor="itDoB">Date of Birth</Form.Label>
					</Form.Floating>
				</Col>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Select id="itGender" name="itGender"
							value={props.inPatient.itGender}
							onChange ={props.handleChange} >
							<option value=""></option>
							<option value="Male">Male</option>
							<option value="Famale">Famale</option>
						</Form.Select>
						<Form.Label htmlFor="itGender">Gender</Form.Label>
					</Form.Floating>
				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itPhone" name="itPhone" type="text"
							value={props.inPatient.itPhone}
							onChange={props.handleChange} />
						<Form.Label htmlFor="itPhone">Primary Phone</Form.Label>
					</Form.Floating>

				</Col>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itAPhone" name="itAPhone" type="text"
							value={props.inPatient.itAPhone}
							onChange={props.handleChange} />
						<Form.Label htmlFor="itAPhone">Alternate Phone</Form.Label>
					</Form.Floating>

				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itHeight" name="itHeight" type="text"
							value={props.inPatient.itHeight}
							onChange={props.handleChange} />
						<Form.Label htmlFor="itHeight">Height</Form.Label>
					</Form.Floating>

				</Col>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itWeight" name="itWeight" type="text"
							value={props.inPatient.itWeight}
							onChange={props.handleChange} />
						<Form.Label htmlFor="itWeight">Weight</Form.Label>
					</Form.Floating>

				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itEmail" name="itEmail" type="email"
							value={props.inPatient.itEmail}
							onChange={props.handleChange} />
						<Form.Label htmlFor="itEmail">Email</Form.Label>
					</Form.Floating>

				</Col>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itPharmacy" name="itPharmacy" type="text"
							value={props.inPatient.itPharmacy}
							onChange={props.handleChange} />
						<Form.Label htmlFor="itPharmacy">Preferred Pharmacy</Form.Label>
					</Form.Floating>

				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itEmergenName" name="itEmergenName" type="text"
							value={props.inPatient.itEmergenName}
							onChange={props.handleChange} />
						<Form.Label htmlFor="itEmergenName">Emergency Contact Name</Form.Label>
					</Form.Floating>

				</Col>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itEmergenPhone" name="itEmergenPhone" type="text"
							value={props.inPatient.itEmergenPhone}
							onChange={props.handleChange} />
						<Form.Label htmlFor="itEmergenPhone">Emergency Contact Phone</Form.Label>
					</Form.Floating>

				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itHealthNo" name="itHealthNo" type="text"
							value={props.inPatient.itHealthNo}
							onChange={props.handleChange} />
						<Form.Label htmlFor="itHealthNo">Health Card Number</Form.Label>
					</Form.Floating>

				</Col>

				<Col>
					<Form.Floating className='mb-3'>
						<Form.Select id="itHealthProv" name="itHealthProv"
							value={props.inPatient.itHealthProv}
							onChange={props.handleChange} >
							<option value="AB"></option>
							<option value="AB">Alberta</option>
							<option value="BC">British Columbia</option>
							<option value="MB">Manitoba</option>
							<option value="NB">New Brunswick</option>
							<option value="NL">Newfoundland and Labrador</option>
							<option value="NS">Nova Scotia</option>
							<option value="ON">Ontario</option>
							<option value="PE">Prince Edward Island</option>
							<option value="QC">Quebec</option>
							<option value="SK">Saskatchewan</option>
							<option value="NT">Northwest Territories</option>
							<option value="NU">Nunavut</option>
							<option value="YT">Yukon</option>
						</Form.Select>
						<Form.Label htmlFor="itHealthProv">Province/Territory of Issue</Form.Label>
					</Form.Floating>

				</Col>
			</Row>

			<Stats step={1} {...props} />
		</div>
	)
}

function Second(props) {
	return (
		<div>
			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itAddress" name="itAddress" type="text"
							value={props.inPatient.itAddress}
							onChange={props.handleChange} />
						<Form.Label htmlFor="itAddress">Physical Address</Form.Label>
					</Form.Floating>
				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itCity" name="itCity" type="text"
							value={props.inPatient.itCity}
							onChange={props.handleChange} />
						<Form.Label htmlFor="itCity">City/Towm</Form.Label>
					</Form.Floating>
				</Col>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Select id="itProv" name="itProv" value={props.inPatient.itProv}
							onChange={props.handleChange} >
							<option value="AB"></option>
							<option value="AB">AB</option>
							<option value="BC">BC</option>
							<option value="MB">MB</option>
							<option value="NB">NB</option>
							<option value="NL">NL</option>
							<option value="NS">NS</option>
							<option value="ON">ON</option>
							<option value="PE">PE</option>
							<option value="QC">QC</option>
							<option value="SK">SK</option>
							<option value="NT">NT</option>
							<option value="NU">NU</option>
							<option value="YT">YT</option>
						</Form.Select>
						<Form.Label htmlFor="itProv">Province/Territory</Form.Label>
					</Form.Floating>
				</Col>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itPostal" name="itPostal" type="text"
							value={props.inPatient.itPostal}
							onChange={props.handleChange} />
						<Form.Label htmlFor="itPostal">Postal Code</Form.Label>
					</Form.Floating>
				</Col>
			</Row>
			<Row>
				<Col>
					<Form.Group className='mb-3'>
						<Form.Check id="itAPsame" name="itAPsame" type="checkbox"
							label='Mailing address is the same as home address'
							checked={props.inPatient.itAPsame}
							onChange={props.handleSameAddress} />
					</Form.Group>
				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Floating className='mb-3'>
							<Form.Control id="itMAddress" name="itMAddress" type="text"
								value={props.inPatient.itMAddress}
								onChange={props.handleChange} 
								disabled={!props.inPatient.itMailEnable}
							/>
						<Form.Label htmlFor="itAddress">Mailing Address</Form.Label>
					</Form.Floating>
				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Floating className='mb-3'>
							<Form.Control id="itMCity" name="itMCity" type="text"
								value={props.inPatient.itMCity}
								onChange={props.handleChange} 
								disabled={!props.inPatient.itMailEnable}
							/>
						<Form.Label htmlFor="itMCity">City/Towm</Form.Label>
					</Form.Floating>
				</Col>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Select id="itMProv" name="itMProv"
							value={props.inPatient.itMProv}
							onChange={props.handleChange} 
							disabled={!props.inPatient.itMailEnable}
						>
							<option value="AB"></option>
							<option value="AB">AB</option>
							<option value="BC">BC</option>
							<option value="MB">MB</option>
							<option value="NB">NB</option>
							<option value="NL">NL</option>
							<option value="NS">NS</option>
							<option value="ON">ON</option>
							<option value="PE">PE</option>
							<option value="QC">QC</option>
							<option value="SK">SK</option>
							<option value="NT">NT</option>
							<option value="NU">NU</option>
							<option value="YT">YT</option>
						</Form.Select>
						<Form.Label htmlFor="itMProv">Province/Territory</Form.Label>
					</Form.Floating>
				</Col>
				<Col>
					<Form.Floating className='mb-3'>
						
						<Form.Control id="itMPostal" name="itMPostal" type="text"
							value={props.inPatient.itMPostal}
							onChange={props.handleChange}
							disabled={!props.inPatient.itMailEnable} />
						<Form.Label htmlFor="itMPostal">Postal Code</Form.Label>
					</Form.Floating>
				</Col>
			</Row>
			<div className='mb-3'>Insurance</div>
			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itInsProvder" name="itInsProvder" type="text"
							value={props.inPatient.itInsProvder}
							onChange={props.handleChange} />
						<Form.Label htmlFor="itInsProvder">Insurance Provider</Form.Label>
					</Form.Floating>
				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itInsGroup" name="itInsGroup" type="text"
							value={props.inPatient.itInsGroup}
							onChange={props.handleChange} />
						<Form.Label htmlFor="itInsGroup">Insurance Group ID</Form.Label>
					</Form.Floating>
				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itInsCosID" name="itInsCosID" type="text"
							value={props.inPatient.itInsCosID}
							onChange={props.handleChange} />
						<Form.Label htmlFor="itInsCosID">Insurance Coustomer ID</Form.Label>
					</Form.Floating>
				</Col>
			</Row>
			<Stats step={2} {...props} />
		</div>
	)
}

function Third(props) {
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
								<Form.Label htmlFor="itAllergY">Have allergies</Form.Label>
							</div>
							<div className='ms-auto'>
								<Form.Check inline name="itAllerg" 
									id="itAllergY" 
									value="Yes"  
									label="Yes" 
									type='radio' 
									checked={props.inPatient.itAllerg === 'Yes'}
									onChange={props.handleChange}
								/>
								<Form.Check inline name="itAllerg" 
									id="itAllergN" 
									value="No"  
									label="No" 
									type='radio' 
									checked={props.inPatient.itAllerg === 'No'}
									onChange={props.handleChange}
									disabled={props.inPatient.itAllergList.length > 0}
								/>
							</div>
						</div>

						<InputGroup className="mb-3">
							<Form.Control style={{borderRight: "0"}} 
								value={props.inPatient.itAllergInput}
								name="itAllergInput" 
								id="itAllergInput"
								onChange={props.handleChange} 
								disabled={props.inPatient.itAllerg !== "Yes"}	
							/>
							<InputGroup.Text 
								onClick={() => props.addAllergies(props.inPatient.itAllergInput)} 
								style={{background: "none", borderLeft: "0"}}>
								<PlusCircle />
							</InputGroup.Text>
						</InputGroup>
						
						<div className='mb-3'>
							{props.inPatient.itAllergList.map((value, key) => (
								
								<div className='border rounded-pill d-inline-block p-3 pt-2 
								pb-2 w-auto m-1 ms-0' key={key}>
									<span className='text-break'>{value}</span>
									<XCircleFill className='ms-1 text-danger fs-5' 
										onClick={() => props.handleAllergDelete(value)}	
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
								<Form.Label htmlFor="itMedY">Currently taking medicaitons</Form.Label>
							</div>
							<div className='ms-auto'>
								<Form.Check inline name="itMed" 
									id="itMedY" 
									value="Yes"  
									label="Yes" 
									type='radio' 
									checked={props.inPatient.itMed === 'Yes'}
									onChange={props.handleChange}
								/>
								<Form.Check inline name="itMed" 
									id="itMedN" 
									value="No"  
									label="No" 
									type='radio' 
									checked={props.inPatient.itMed === 'No'}
									onChange={props.handleChange}
									disabled={props.inPatient.itMedList.length > 0}
								/>
							</div>
						</div>

						<InputGroup className="mb-3">
							<Form.Control style={{borderRight: "0"}} 
								value={props.inPatient.itMedInput}
								name="itMedInput" 
								id="itMedInput"
								onChange={props.handleChange} 
								disabled={props.inPatient.itMed !== "Yes"}	
							/>
							<InputGroup.Text 
								onClick={() => props.addMedications(props.inPatient.itMedInput)} 
								style={{background: "none", borderLeft: "0"}}>
								<PlusCircle />
							</InputGroup.Text>
						</InputGroup>
						
						<div className='mb-3'>
							{props.inPatient.itMedList.map((value, key) => (
								
								<div className='border rounded-pill
									d-inline-block p-3 pt-2 pb-2 w-auto m-1 ms-0' key={key}>
									<span className='text-break'>{value}</span>
									<XCircleFill className='ms-1 text-danger fs-5' 
										onClick={() => props.handleMedDelete(value)}	
									/>
								</div>
								
								))
							}
						</div>

					</Form.Group>
					
				</Col>
			</Row>
			<Stats step={3} {...props} />
		</div>
	)
}