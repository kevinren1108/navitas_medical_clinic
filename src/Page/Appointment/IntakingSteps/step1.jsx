import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
function Step1(props) {
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

		</div>
	)
}

export default Step1