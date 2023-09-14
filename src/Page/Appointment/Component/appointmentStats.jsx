import React from 'react'
import {  Button } from 'react-bootstrap'

function AppointmentStats ({ nextStep, previousStep, totalSteps, step }) {

	return (
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
	)

}

export default AppointmentStats