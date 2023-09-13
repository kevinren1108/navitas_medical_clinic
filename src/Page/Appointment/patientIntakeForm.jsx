import React, { useState } from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { PlusCircle } from 'react-bootstrap-icons'
import StepWizard from 'react-step-wizard';
import 'animate.css';

function PatientIntakeForm() {

	const [inPatient, SetInPatient] = useState({
		itDate: "", itFName: "", itLName: "",
		itDoB: "", itHealthNo: "", itPhone: "", itAPhone: "",
		itEmail: "", itPharmacy: "", itEmergenName: "",
		itEmergenPhone: "", itHeight: "", itWeight: "", itGender: "",
		itAddress: "", itCity: "", itProv: "", itPostal: "", itAPsame: false,
		itMAddress: "", itMCity: "", itMPostal: "", itMailEnable: true,
		itTetanus: false, itPneumonia: false, itShingles: false,
		itCovidVac: false, itChildhood: false, itAllerg: "", itAllegT: "",
		itInsProvder: "", itInsGroup: "", itInsCosID: ""
	})
	const handleChange = (e) => {
		if (e.target.type === "checkbox") {
			if (e.target.checked === true) {
				if (e.target.name === "itAPsame") {
					SetInPatient({ ...inPatient, [e.target.name]: true, "itMailEnable": false })
				} else {
					SetInPatient({ ...inPatient, [e.target.name]: true })
				}
			}
			else {
				if (e.target.name === "itAPsame") {
					SetInPatient({ ...inPatient, [e.target.name]: false, "itMailEnable": true })
				} else {
					SetInPatient({ ...inPatient, [e.target.name]: false })
				}
			}


		}
		else {
			SetInPatient({ ...inPatient, [e.target.name]: e.target.value })
		}

	}

	const [state, updateState] = useState({
		form: {},
	})

	const setInstance = (SW) =>
		updateState({
			...state,
			SW
		});

	const { SW } = state;

	return (
		<div className='mt-2'>
			<h5>Patient Intaking Form</h5>


			<StepWizard
				isLazyMount={true}
				isHashEnabled
				// transitions={custom}
				// nav={<Nav />}
				instance={setInstance}
			>
				<First inPatient={inPatient} handleChange={handleChange} />
				<Second inPatient={inPatient} handleChange={handleChange} />
				<Third inPatient={inPatient} handleChange={handleChange} />
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
							onChange={props.handleChange} >
							<option value="M">Male</option>
							<option value="F">Famale</option>
						</Form.Select>
						<Form.Label htmlFor="itGender">Date of Birth</Form.Label>
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
							onChange={props.handleChange} />
					</Form.Group>
				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						{props.inPatient.itMailEnable ?
							<Form.Control id="itMAddress" name="itMAddress" type="text"
								value={props.inPatient.itMAddress}
								onChange={props.handleChange} />
							:
							<Form.Control id="itMAddress" name="itMAddress" type="text"
								disabled value={props.inPatient.itAddress}
								onChange={props.handleChange} />
						}

						<Form.Label htmlFor="itAddress">Mailing Address</Form.Label>
					</Form.Floating>
				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						{props.inPatient.itMailEnable ?
							<Form.Control id="itMCity" name="itMCity" type="text"
								value={props.inPatient.itMCity}
								onChange={props.handleChange} />
							:
							<Form.Control id="itMCity" name="itMCity" type="text" disabled
								value={props.inPatient.itCity}
								onChange={props.handleChange} />
						}
						<Form.Label htmlFor="itMCity">City/Towm</Form.Label>
					</Form.Floating>
				</Col>
				<Col>
					<Form.Floating className='mb-3'>
						{props.inPatient.itMailEnable ?
							<Form.Select id="itMProv" name="itMProv"
								value={props.inPatient.itMProv}
								onChange={props.handleChange} >
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
							:
							<Form.Select id="itMProv" name="itMProv" disabled
								value={props.inPatient.itProv}
								onChange={props.handleChange} >
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
						}
						<Form.Label htmlFor="itProv">Province/Territory</Form.Label>
					</Form.Floating>
				</Col>
				<Col>
					<Form.Floating className='mb-3'>
						{props.inPatient.itMailEnable ?
							<Form.Control id="itMPostal" name="itMPostal" type="text"
								value={props.inPatient.itMPostal}
								onChange={props.handleChange} />
							:
							<Form.Control id="itMPostal" name="itMPostal" type="text" disabled
								value={props.inPatient.itPostal}
								onChange={props.handleChange} />
						}
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
								<Form.Check name="itAllerg" id="itAllergY" inline label="Yes" type='radio' />
								<Form.Check name="itAllerg" id="itAllergN" inline label="No" type='radio' />
							</div>


						</div>
						<InputGroup className="mb-3">
							<Form.Control style={{background: "none", borderRight: "0"}} aria-label="allergies" />
							<InputGroup.Text onClick={() => console.log("123")} style={{background: "none", borderLeft: "0"}}><PlusCircle /></InputGroup.Text>
						</InputGroup>
						

					</Form.Group>

				</Col>
			</Row>
			<Stats step={3} {...props} />
		</div>
	)
}