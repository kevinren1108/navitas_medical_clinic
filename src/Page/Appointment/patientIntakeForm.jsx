import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Step1 from './IntakingSteps/step1';
import Step2 from './IntakingSteps/step2';
import StepWizard from 'react-step-wizard';



function PatientIntakeForm() {
	const [inPatient, SetInPatient] = useState({
		itDate: "", itFName: "", itLName: "",
		itDoB: "", itHealthNo: "", itPhone: "", itAPhone: "",
		itEmail: "", itPharmacy: "", itEmergenName: "",
		itEmergenPhone: "", itHeight: "", itWeight: "", itGender: ""
	})
	const handleChange = (e) => {
		SetInPatient({ ...inPatient, [e.target.name]: e.target.value })
	}

	const [state, updateState] = useState({
		form: {},
	})

	const updateForm = (key, value) => {
		const { form } = state;

		form[key] = value;
		updateState({
			...state,
			form
		});
	};

	const onStepChange = (SW) => {
		console.log(SW)

	}

	const setInstance = (SW) =>
		updateState({
			...state,
			SW
		});

	const { SW } = state;

	return (
		<div className="container">
			<h3>Patient Intaking Form</h3>


			<StepWizard
				onStepChange={onStepChange}
				isHashEnabled
				// nav={<Nav />}
				instance={setInstance}
			>
				<Step1 hashKey={"FirstStep"} update={updateForm} inPatient={inPatient} handleChange={handleChange} />
				<Step2 form={state.form} inPatient={inPatient} handleChange={handleChange} />
				{/* <Last hashKey={"TheEnd!"} /> */}
			</StepWizard>
			<div className="d-flex justify-content-center">
				{SW && <Button className="me-auto btn-secondary" onClick={SW.previousStep}>Previous Step</Button>}
				{SW && <Button className="ms-auto btn-secondary" onClick={SW.nextStep}>Next Step</Button>}

			</div>
		</div>
	);
}

export default PatientIntakeForm

