import React from 'react'
import Task from './task';
import StepWizard from 'react-step-wizard';
import DatePicker from './datePicker';
import ProviderPick from './providerPicker';
import { useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { ExclamationCircle } from 'react-bootstrap-icons';
import Booked from './booked';

function AppointmentStep() {
    const appointmentInfo = useSelector((state) => state.appointment)

    return (
        <div>
            {appointmentInfo.appointmentAlert.length > 0? 
                <Alert variant="danger" className='p-1 m-5 ps-3'>
                    {appointmentInfo.appointmentAlert.map((value, key) => (
                        <div key={key} className='d-flex '>
                            <ExclamationCircle  className="me-1" style={{height: "24px"}}/> 
                            <span>{value}</span> 
                        </div>
                    )) 
                    
                    }
                </Alert> 
                :
                <></>
            }
            <StepWizard
                isLazyMount={true}
                isHashEnabled={false}
            >
                <Task />
                <ProviderPick />
                <DatePicker />
                <Booked />
            </StepWizard>

        </div>
    )
}

export default AppointmentStep