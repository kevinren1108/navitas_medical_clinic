import React from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { PlusCircle, XCircleFill } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux';
import StepWizard from 'react-step-wizard';
import { updateField, handleSamePhyscalAndMail, 
	handleDiffPhyscalAndMail, handleListPush, handleListDelete 
} from '../Store/patientIntakeSlice'

function PatientIntakeForm() {

	const form = useSelector((state) => state.patientIntake)
	const dispatch = useDispatch()

	const handleFormChange = (field) => (e) => {
		// Handle special case checkbox input
		if (e.target.type === "checkbox") { 
			if (e.target.checked === true) 
				dispatch(updateField({field,value: true}))
			else 
				dispatch(updateField({field,value: false}))
		}else{
		// Handle every other input(text, radio)
			dispatch(updateField({field,value: e.target.value}))
		}
	}

	// Handle same physical and mailing address check box 
	const handleSameAddress = (e) => {
		if (e.target.checked === true) {
			dispatch(handleSamePhyscalAndMail())
		}else{
			dispatch(handleDiffPhyscalAndMail())
		}
	}

	// Handle add item to list dispatch
	const addItemToList = (typeID, listID, inputID) => {
		dispatch(handleListPush({typeID, listID, inputID}))
	}

	const deleteItemFromList = (listID, deleteItem) => {
		dispatch(handleListDelete({listID, deleteItem}))
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
				<First 
					form={form} 
					handleFormChange={handleFormChange} 
				/>
				<Second 
					form={form} 
					handleFormChange={handleFormChange} 
					handleSameAddress={handleSameAddress} 
				/>
				<Third 
					form={form} 
					handleFormChange={handleFormChange}
					addItemToList={addItemToList}
					deleteItemFromList={deleteItemFromList}
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

	const validate = () => {
        if (props.form.itFName !== "") { 
            props.nextStep();
        }
    };

	return (
		<div>
			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itDate" name="itDate" type="date"
							value={props.form.itDate}
							onChange={props.handleFormChange('itDate')} />
						<Form.Label htmlFor="itDate">Date of this form was completed</Form.Label>
					</Form.Floating>

				</Col>
			</Row>
			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itFName" name="itFName" type="text"
							value={props.form.itFName}
							onChange={props.handleFormChange('itFName')}
							></Form.Control>
						<Form.Label htmlFor="itFName">Given Name</Form.Label>
					</Form.Floating>

				</Col>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itLName" name="itLName" type="text"
							value={props.form.itLName}
							onChange={props.handleFormChange('itLName')} />
						<Form.Label htmlFor="itLName">Last Name</Form.Label>
					</Form.Floating>

				</Col>
			</Row>
			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itDoB" name="itDoB" type="date"
							value={props.form.itDoB}
							onChange={props.handleFormChange('itDoB')} />
						<Form.Label htmlFor="itDoB">Date of Birth</Form.Label>
					</Form.Floating>
				</Col>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Select id="itGender" name="itGender"
							value={props.form.itGender}
							onChange ={props.handleFormChange('itGender')} >
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
							value={props.form.itPhone}
							onChange={props.handleFormChange('itPhone')} />
						<Form.Label htmlFor="itPhone">Primary Phone</Form.Label>
					</Form.Floating>

				</Col>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itAPhone" name="itAPhone" type="text"
							value={props.form.itAPhone}
							onChange={props.handleFormChange('itAPhone')} />
						<Form.Label htmlFor="itAPhone">Alternate Phone</Form.Label>
					</Form.Floating>

				</Col>
			</Row>

			<Row>
				<Col>	
					<Form.Floating className='mb-3'>
						<Form.Control id="itHeight" name="itHeight" type="text"
							value={props.form.itHeight}
							onChange={props.handleFormChange('itHeight')} />
						<Form.Label htmlFor="itHeight">Height/cm</Form.Label>				
					</Form.Floating>
				</Col>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itWeight" name="itWeight" type="text"
							value={props.form.itWeight}
							onChange={props.handleFormChange('itWeight')} />
						<Form.Label htmlFor="itWeight">Weight/kg</Form.Label>
					</Form.Floating>

				</Col>
			</Row>

			

			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itEmergenName" name="itEmergenName" type="text"
							value={props.form.itEmergenName}
							onChange={props.handleFormChange('itEmergenName')} />
						<Form.Label htmlFor="itEmergenName">Emergency Contact Name</Form.Label>
					</Form.Floating>

				</Col>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itEmergenPhone" name="itEmergenPhone" type="text"
							value={props.form.itEmergenPhone}
							onChange={props.handleFormChange('itEmergenPhone')} />
						<Form.Label htmlFor="itEmergenPhone">Emergency Contact Phone</Form.Label>
					</Form.Floating>

				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itHealthNo" name="itHealthNo" type="text"
							value={props.form.itHealthNo}
							onChange={props.handleFormChange('itHealthNo')} />
						<Form.Label htmlFor="itHealthNo">Health Card Number</Form.Label>
					</Form.Floating>

				</Col>

				<Col>
					<Form.Floating className='mb-3'>
						<Form.Select id="itHealthProv" name="itHealthProv"
							value={props.form.itHealthProv}
							onChange={props.handleFormChange('itHealthProv')} >
							<option value="" disabled defaultChecked>Please Select</option>
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

			<Stats step={1} {...props} nextStep={validate} />
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
							value={props.form.itAddress}
							onChange={props.handleFormChange('itAddress')} />
						<Form.Label htmlFor="itAddress">Physical Address</Form.Label>
					</Form.Floating>
				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itCity" name="itCity" type="text"
							value={props.form.itCity}
							onChange={props.handleFormChange('itCity')} />
						<Form.Label htmlFor="itCity">City/Towm</Form.Label>
					</Form.Floating>
				</Col>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Select id="itProv" name="itProv" value={props.form.itProv}
							onChange={props.handleFormChange('itProv')} >
							<option value="" disabled defaultChecked>Please Select</option>
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
							value={props.form.itPostal}
							onChange={props.handleFormChange('itPostal')} />
						<Form.Label htmlFor="itPostal">Postal Code</Form.Label>
					</Form.Floating>
				</Col>
			</Row>
			<Row>
				<Col>
					<Form.Group className='mb-3'>
						<Form.Check id="itAPsame" name="itAPsame" type="checkbox"
							label='Mailing address is the same as home address'
							checked={props.form.itAPsame}
							onChange={props.handleFormChange('itAPsame')} 
							onClick={props.handleSameAddress}
							/>
					</Form.Group>
				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Floating className='mb-3'>
							<Form.Control id="itMAddress" name="itMAddress" type="text"
								value={props.form.itMAddress}
								onChange={props.handleFormChange('itMAddress')} 
								disabled={props.form.itAPsame}
							/>
						<Form.Label htmlFor="itAddress">Mailing Address</Form.Label>
					</Form.Floating>
				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Floating className='mb-3'>
							<Form.Control id="itMCity" name="itMCity" type="text"
								value={props.form.itMCity}
								onChange={props.handleFormChange('itMCity')} 
								disabled={props.form.itAPsame}
							/>
						<Form.Label htmlFor="itMCity">City/Towm</Form.Label>
					</Form.Floating>
				</Col>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Select id="itMProv" name="itMProv"
							value={props.form.itMProv}
							onChange={props.handleFormChange('itMProv')} 
							disabled={props.form.itAPsame}
						>
							<option value="" disabled defaultChecked>Please Select</option>
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
							value={props.form.itMPostal}
							onChange={props.handleFormChange('itMPostal')}
							disabled={props.form.itAPsame} />
						<Form.Label htmlFor="itMPostal">Postal Code</Form.Label>
					</Form.Floating>
				</Col>
			</Row>
			<div className='mb-3'>Insurance</div>
			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itInsProvder" name="itInsProvder" type="text"
							value={props.form.itInsProvder}
							onChange={props.handleFormChange('itInsProvder')} />
						<Form.Label htmlFor="itInsProvder">Insurance Provider</Form.Label>
					</Form.Floating>
				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itInsGroup" name="itInsGroup" type="text"
							value={props.form.itInsGroup}
							onChange={props.handleFormChange('itInsGroup')} />
						<Form.Label htmlFor="itInsGroup">Insurance Group ID</Form.Label>
					</Form.Floating>
				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itInsCosID" name="itInsCosID" type="text"
							value={props.form.itInsCosID}
							onChange={props.handleFormChange('itInsCosID')} />
						<Form.Label htmlFor="itInsCosID">Insurance Coustomer ID</Form.Label>
					</Form.Floating>
				</Col>
			</Row>
			<Stats step={2} {...props} />
		</div>
	)
}

function Third(props) {

	const submit = () => {
        alert('You did it! Yay!') // eslint-disable-line
    };

	return (
		<div>
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
			<Stats step={3} {...props} nextStep={submit} />
		</div>
	)
}