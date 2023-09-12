import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

function Step2(props) {
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

		</div>
	)
}

export default Step2
