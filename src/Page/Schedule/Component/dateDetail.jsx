import React from 'react'
import { Alert, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

function DateDetail() {
    const dispatch = useDispatch()
    const appointmentInfo = useSelector((state) => (state.appointment))
    const scheduleUIInfo = useSelector((state) => (state.scheduleUI))
    const provider = Object.keys(appointmentInfo.providerList)
    const timeSlot = ["9:00-9:45", "10:00-10:45", "11:00-11:45", "13:00-13:45", "14:00-14:45", "15:00-15:45", "16:00-16:45",]
    let booked = appointmentInfo["providerList"][provider[0]]["booked"][scheduleUIInfo.selectedDate]
    if (booked === undefined) {
        booked = []
    }

    return (
        <div>
            
            <div>
                <Alert>{scheduleUIInfo.selectedDate}</Alert>
            </div>
            <div>



                {provider.map((providerName, providerKey) => {
                    return (
                        <div>
                            <div key={providerKey}>{providerName}</div>
                            <div className='d-flex justify-content-between'>
                            {
                                
                                timeSlot.map((timeSlot, timeSlotIndex) => (
                                    <Button key={timeSlotIndex}
                                        // size='sm'
                                        variant="light"
                                        style={{ width: "5rem" , height:"5rem" }}
                                        className={ appointmentInfo["providerList"]
                                                        [providerName]
                                                        ["booked"]
                                                        [scheduleUIInfo.selectedDate] 
                                                        && 
                                                    appointmentInfo["providerList"]
                                                        [providerName]
                                                        ["booked"]
                                                        [scheduleUIInfo.selectedDate].includes(timeSlotIndex) ?
                                            "border border-3 border-warning mb-1 text-center rounded me-2 bg-light  "
                                            :
                                            'border mb-1 text-center rounded me-2'}
                                    >
                                        <div style={{fontSize:"12px"}}>
                                            {timeSlot}
                                        </div>
                                    </Button>

                                ))
                            }
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default DateDetail