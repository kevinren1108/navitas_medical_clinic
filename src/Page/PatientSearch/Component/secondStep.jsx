import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import IntakeStats from './intakeStats';

function SecondStep(props) {
	const [validated, setValidated] = useState(false);
	const [nextStyle, setNextStyle] = useState("")

	const validate = () => {
		const form = props.form
		console.log(form);
		if (form.itAddress !== ""
			&& form.itCity !== ""
			&& form.itProv !== ""
			&& form.itPostal !== ""
			&& form.itMAddress !== ""
			&& form.itMCity !== ""
			&& form.itMProv !== ""
			&& form.itMPostal !== ""
			&& form.itInsProvder !== ""
			&& form.itInsGroup !== ""
			&& form.itInsCosID !== ""
		) {
			props.nextStep();
		}
	};

	const handleButtonStyle = () => {
		const form = props.form

		if (form.itAddress !== ""
			&& form.itCity !== ""
			&& form.itProv !== ""
			&& form.itPostal !== ""
			&& form.itMAddress !== ""
			&& form.itMCity !== ""
			&& form.itMProv !== ""
			&& form.itMPostal !== ""
			&& form.itInsProvder !== ""
			&& form.itInsGroup !== ""
			&& form.itInsCosID !== ""
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
						<Form.Control id="itAddress" name="itAddress" type="text"
							value={props.form.itAddress}
							onChange={props.handleFormChange('itAddress')} 
							required
							/>
						<Form.Label htmlFor="itAddress">Physical Address</Form.Label>
					</Form.Floating>
				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itCity" name="itCity" type="text"
							value={props.form.itCity}
							onChange={props.handleFormChange('itCity')} 
							required
							/>
						<Form.Label htmlFor="itCity">City/Towm</Form.Label>
					</Form.Floating>
				</Col>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Select id="itProv" name="itProv" value={props.form.itProv}
							onChange={props.handleFormChange('itProv')} 
							required
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
						<Form.Label htmlFor="itProv">Province/Territory</Form.Label>
					</Form.Floating>
				</Col>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itPostal" name="itPostal" type="text"
							value={props.form.itPostal}
							onChange={props.handleFormChange('itPostal')} 
							required
							/>
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
							required		
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
							required
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
							required							
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
							disabled={props.form.itAPsame} 
							required
						/>
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
							onChange={props.handleFormChange('itInsProvder')} 
							required
						/>
						<Form.Label htmlFor="itInsProvder">Insurance Provider</Form.Label>
					</Form.Floating>
				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itInsGroup" name="itInsGroup" type="text"
							value={props.form.itInsGroup}
							onChange={props.handleFormChange('itInsGroup')} 
							required
						/>
						<Form.Label htmlFor="itInsGroup">Insurance Group ID</Form.Label>
					</Form.Floating>
				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Floating className='mb-3'>
						<Form.Control id="itInsCosID" name="itInsCosID" type="text"
							value={props.form.itInsCosID}
							onChange={props.handleFormChange('itInsCosID')} 
							required
						/>
						<Form.Label htmlFor="itInsCosID">Insurance Coustomer ID</Form.Label>
					</Form.Floating>
				</Col>
			</Row>
			<IntakeStats step={2} {...props} nextStep={validate} nextStyle={nextStyle} />
		</Form>
	)
}

export default SecondStep