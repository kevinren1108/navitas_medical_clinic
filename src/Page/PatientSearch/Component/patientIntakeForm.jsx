import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import StepWizard from 'react-step-wizard';
import { updateField, handleSamePhyscalAndMail, 
	handleDiffPhyscalAndMail, handleListPush, handleListDelete 
} from '../Store/patientIntakeSlice'
import FirstStep from './firstStep';
import SecondStep from './secondStep';
import ThirdStep from './thridStep';


function PatientIntakeForm() {

	const form = useSelector((state) => state.patientIntakeForm)
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
				<FirstStep 
					form={form} 
					handleFormChange={handleFormChange} 
				/>
				
				<SecondStep 
					form={form} 
					handleFormChange={handleFormChange} 
					handleSameAddress={handleSameAddress} 
				/>

				<ThirdStep 
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
