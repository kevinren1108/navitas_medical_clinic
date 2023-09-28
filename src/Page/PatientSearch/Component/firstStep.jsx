import React, {useState} from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import IntakeStats from './intakeStats';
import "./style.css"

function FirstStep(props) {
	const [validated, setValidated] = useState(false);
	const [nextStyle, setNextStyle] = useState("")
	const yesterday = new Date(new Date().setDate(new Date().getDate()-1)).toISOString().split("T")[0] ;

	const validate = () => {
		const form = props.form

		if (form.itFName !== ""
			&& form.itLName !== ""
			&& form.itDoB !== ""
			&& form.itGender !== ""
			&& form.itPhone !== ""
			&& form.itAPhone !== ""
			&& form.itHeight !== ""
			&& form.itWeight !== ""
			&& form.itEmergenName !== ""
			&& form.itEmergenPhone !== ""
			&& form.itHealthNo !== ""
			&& form.itHealthProv !== ""
		) {
			props.nextStep();
		}
	};

	const handleButtonStyle = () => {
		const form = props.form

		if (form.itFName !== ""
			&& form.itLName !== ""
			&& form.itDoB !== ""
			&& form.itGender !== ""
			&& form.itPhone !== ""
			&& form.itAPhone !== ""
			&& form.itHeight !== ""
			&& form.itWeight !== ""
			&& form.itEmergenName !== ""
			&& form.itEmergenPhone !== ""
			&& form.itHealthNo !== ""
			&& form.itHealthProv !== ""
		) {
			setNextStyle(" bg-success")
		}
	}
	
	const handleSubmit = (event) => {
		const form = event.currentTarget;
		
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		setValidated(true);
	};

	return (
		<Form noValidate validated={validated} onSubmit={handleSubmit} onChange={handleButtonStyle}> 
			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itDate" name="itDate" type="date"
							value={props.form.itDate}
							onChange={props.handleFormChange('itDate')}
							min={yesterday}
							required />
						<Form.Label htmlFor="itDate">Date of this form was completed</Form.Label>
						<Form.Control.Feedback type="invalid">Complete date need be greater than yestaday and not empty</Form.Control.Feedback>
					</Form.Floating>

				</Col>
			</Row>
			<Row>
				<Col>
					<Form.Floating className='mb-3 '>
						<Form.Control id="itFName" name="itFName" type="text"
							value={props.form.itFName}
							onChange={props.handleFormChange('itFName')}
							minLength="3"
							required
						></Form.Control>
						<Form.Label htmlFor="itFName">Given Name</Form.Label>
						<Form.Control.Feedback type="invalid">Please provide a valid entry.</Form.Control.Feedback>
					</Form.Floating>
					
				</Col>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itLName" name="itLName" type="text"
							value={props.form.itLName}
							onChange={props.handleFormChange('itLName')} 
							minLength="3"
							required
							/>
						<Form.Label htmlFor="itLName">Last Name</Form.Label>
						<Form.Control.Feedback type="invalid">Please provide a valid entry.</Form.Control.Feedback>

					</Form.Floating>

				</Col>
			</Row>
			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itDoB" name="itDoB" type="date"
							value={props.form.itDoB}
							onChange={props.handleFormChange('itDoB')} 
							max={yesterday}
							required
							/>
						<Form.Label htmlFor="itDoB">Date of Birth</Form.Label>
						<Form.Control.Feedback type="invalid">Please provide a valid entry.</Form.Control.Feedback>
					</Form.Floating>
				</Col>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Select id="itGender" name="itGender"
							value={props.form.itGender}
							onChange={props.handleFormChange('itGender')} 
							required
							>
							<option value=""></option>
							<option value="Male">Male</option>
							<option value="Famale">Famale</option>
						</Form.Select>
						<Form.Label htmlFor="itGender">Gender</Form.Label>
						<Form.Control.Feedback type="invalid">Please provide a valid entry.</Form.Control.Feedback>
					</Form.Floating>
				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itPhone" name="itPhone" type="text"
							value={props.form.itPhone}
							onChange={props.handleFormChange('itPhone')} 
							required
							/>
						<Form.Label htmlFor="itPhone">Primary Phone</Form.Label>
						<Form.Control.Feedback type="invalid">Please provide a valid entry.</Form.Control.Feedback>
					</Form.Floating>

				</Col>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itAPhone" name="itAPhone" type="text"
							value={props.form.itAPhone}
							onChange={props.handleFormChange('itAPhone')} 
							required
							/>
						<Form.Label htmlFor="itAPhone">Alternate Phone</Form.Label>
						<Form.Control.Feedback type="invalid">Please provide a valid entry.</Form.Control.Feedback>
					</Form.Floating>

				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itHeight" name="itHeight" type="text"
							value={props.form.itHeight}
							onChange={props.handleFormChange('itHeight')} 
							required
							/>
						<Form.Label htmlFor="itHeight">Height/cm</Form.Label>
						<Form.Control.Feedback type="invalid">Please provide a valid entry.</Form.Control.Feedback>
					</Form.Floating>
				</Col>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itWeight" name="itWeight" type="text"
							value={props.form.itWeight}
							onChange={props.handleFormChange('itWeight')} 
							required
							/>
						<Form.Label htmlFor="itWeight">Weight/kg</Form.Label>
						<Form.Control.Feedback type="invalid">Please provide a valid entry.</Form.Control.Feedback>
					</Form.Floating>

				</Col>
			</Row>



			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itEmergenName" name="itEmergenName" type="text"
							value={props.form.itEmergenName}
							onChange={props.handleFormChange('itEmergenName')} 
							required
							/>
						<Form.Label htmlFor="itEmergenName">Emergency Contact Name</Form.Label>
						<Form.Control.Feedback type="invalid">Please provide a valid entry.</Form.Control.Feedback>
					</Form.Floating>

				</Col>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itEmergenPhone" name="itEmergenPhone" type="text"
							value={props.form.itEmergenPhone}
							onChange={props.handleFormChange('itEmergenPhone')} 
							required
							/>
						<Form.Label htmlFor="itEmergenPhone">Emergency Contact Phone</Form.Label>
						<Form.Control.Feedback type="invalid">Please provide a valid entry.</Form.Control.Feedback>
					</Form.Floating>

				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itHealthNo" name="itHealthNo" type="text"
							value={props.form.itHealthNo}
							onChange={props.handleFormChange('itHealthNo')} 
							required
							/>
						<Form.Label htmlFor="itHealthNo">Health Card Number</Form.Label>
						<Form.Control.Feedback type="invalid">Please provide a valid entry.</Form.Control.Feedback>
					</Form.Floating>

				</Col>

				<Col>
					<Form.Floating className='mb-3'>
						<Form.Select id="itHealthProv" name="itHealthProv"
							value={props.form.itHealthProv}
							onChange={props.handleFormChange('itHealthProv')} 
							required
							>
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
						<Form.Control.Feedback type="invalid">Please provide a valid entry.</Form.Control.Feedback>
					</Form.Floating>

				</Col>
			</Row>
			<IntakeStats step={1} {...props} nextStep={validate} nextStyle={nextStyle}/>
		</Form>
	)
}

export default FirstStep