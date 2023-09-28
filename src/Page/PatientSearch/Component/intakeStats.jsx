import React from 'react'
import {  Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { handleUIChange } from '../Store/appointmentUISlice';

function IntakeStats ({ nextStep, previousStep, totalSteps, step, nextStyle }) {
	console.log(nextStyle)
	const dispatch = useDispatch()
	return (
		<div className="d-flex justify-content-center ">
		{step === 1 ?
			<Button className='btn btn-secondary btn-block me-auto' onClick={() => {dispatch(handleUIChange("search"))}}>Back to Search</Button>
			:<></>
		}
		{step > 1 &&
			<Button className='btn btn-secondary btn-block' onClick={previousStep}>Go Back</Button>
		}
		{step < totalSteps ?
			<Button className={'btn btn-secondary btn-block ms-auto' + nextStyle}   
				onClick={nextStep}  
				type="submit"
			>
				Continue
			</Button>
			:
			<Button className={'btn btn-success btn-block ms-auto '} onClick={nextStep}>Finish</Button>
		}
	</div>
	)

}

export default IntakeStats
