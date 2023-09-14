import React from 'react'
import Task from './task';
import StepWizard from 'react-step-wizard';
import DatePicker from './datePicker';
import ProviderPick from './providerPicker';

function AppointmentStep() {
  return (
    <div>
      <StepWizard
        isLazyMount={true}
        isHashEnabled={false}
      >
        <Task />
        <ProviderPick />
        <DatePicker />
        
      </StepWizard>

    </div>
  )
}

export default AppointmentStep