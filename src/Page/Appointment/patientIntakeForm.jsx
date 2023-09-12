import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Step1 from './IntakingSteps/step1';
import Step2 from './IntakingSteps/step2';
import Step3 from './IntakingSteps/step3';
import StepWizard from 'react-step-wizard';

function PatientIntakeForm() {
	const [inPatient, SetInPatient] = useState({
		itDate: "", itFName: "", itLName: "",
		itDoB: "", itHealthNo: "", itPhone: "", itAPhone: "",
		itEmail: "", itPharmacy: "", itEmergenName: "",
		itEmergenPhone: "", itHeight: "", itWeight: "", itGender: "",
		itAddress: "", itCity: "", itProv: "", itPostal: "", itAPsame: false,
		itMAddress: "", itMCity: "", itMPostal: "", itMailEnable: true,
		itTetanus: false, itPneumonia: false, itShingles: false,
		itCovidVac: false, itChildhood: false, itAllerg: "", itAllegT: ""
	})
	const handleChange = (e) => {
		if (e.target.type === "checkbox") {
			if (e.target.checked === true) {
				if (e.target.name === "itAPsame") {
					SetInPatient({ ...inPatient, [e.target.name]: true, "itMailEnable": false })
				}else{
					SetInPatient({ ...inPatient, [e.target.name]: true})
				}
			}
			else{
				if (e.target.name === "itAPsame") {
					SetInPatient({ ...inPatient, [e.target.name]: false, "itMailEnable": true })
				}else{
					SetInPatient({ ...inPatient, [e.target.name]: false})
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
				// nav={<Nav />}
				instance={setInstance}
			>
				<Step1 inPatient={inPatient} handleChange={handleChange} />
				<Step2 inPatient={inPatient} handleChange={handleChange} />
				<Step3 inPatient={inPatient} handleChange={handleChange} />

			</StepWizard>
		
				<div className="d-flex justify-content-center ">
					{SW && <Button className="me-auto btn-secondary" 
					onClick={SW.previousStep}>Previous Step</Button>}
					{SW && <Button className="ms-auto btn-secondary" 
					onClick={SW.nextStep}>Next Step</Button>}

				</div>
			

		</div>
	);
}

export default PatientIntakeForm

