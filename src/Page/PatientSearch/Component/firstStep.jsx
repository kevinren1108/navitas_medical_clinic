import React from 'react'
import {  Col, Form, Row } from 'react-bootstrap'
import Stats from './stats';

function FirstStep(props) {

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

export default FirstStep