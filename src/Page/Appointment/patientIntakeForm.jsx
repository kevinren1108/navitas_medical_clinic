import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Step1 from './IntakingSteps/step1';
import Step2 from './IntakingSteps/step2';

function PatientIntakeForm() {
  const [inPatient, SetInPatient] = useState({
    itDate: "", itFName: "", itLName: "",
    itDoB: "", itHealthNo: "", itPhone: "", itAPhone: "",
    itEmail: "", itPharmacy: "", itEmergenName: "",
    itEmergenPhone: "", itHeight: "", itWeight: ""
  })
  const handleChange = (e) => {
    SetInPatient({ ...inPatient, [e.target.name]: e.target.value })
  }

  return (
    <div className="steps_wrapper">
        <Step1 inPatient={inPatient} handleChange={handleChange}/>
        <Step2 inPatient={inPatient} handleChange={handleChange}/>
       
      <Button variant='primary' >Previous</Button>
      <Button variant='primary' >Next</Button>
     
      
    </div>
  )
}

export default PatientIntakeForm