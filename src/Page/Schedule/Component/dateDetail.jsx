import React, { useEffect, useState } from 'react'
import { Alert, Button, Row, Col, Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { handleDateChange, handleDisplayChange } from '../store/scheduleUISlice'
import dayjs from 'dayjs'

function DateDetail() {
    const dispatch = useDispatch()
    const appointmentInfo = useSelector((state) => (state.appointment))
    const scheduleUIInfo = useSelector((state) => (state.scheduleUI))
    const provider = Object.keys(appointmentInfo.providerList)
    const [displayStatus, setDisplayStatus] = useState(false)
    const timeSlot = ["9:00-9:45", "10:00-10:45", "11:00-11:45", "13:00-13:45", "14:00-14:45", "15:00-15:45", "16:00-16:45",]
    
    const [date, setValue] = useState(() => dayjs(new Date()));

    const [displayDetail, setDisplayDetail] = useState({
        avaliable: "",
        timeSlotIndex: "",
        providerName: ""
    })

    useEffect(() => {
        if(scheduleUIInfo.selectedDate === ""){
            const date = dayjs().format('M/DD/YYYY') 
            dispatch(handleDateChange(date))
        }
    }, [])

    function handleDisplayDetail(newState, timeSlotIndex, providerName) {
        const timeSlotForProvider = appointmentInfo["providerList"][providerName]["booked"][scheduleUIInfo.selectedDate]
        let availiability = false
        if (timeSlotForProvider === undefined) {
            availiability = false
        } else {
            availiability = timeSlotForProvider.includes(timeSlotIndex)
        }

        setDisplayStatus(newState)
        setDisplayDetail({
            ...displayDetail,
            timeSlotIndex: timeSlotIndex,
            providerName: providerName,
            avaliable: availiability
        })
    }


    return (
        <Container className='pb-5 pt-3'>
            <div>
                <div >
                    <Alert className='d-flex justify-content-between'>
                        <span className='align-self-center'>{scheduleUIInfo.selectedDate}</span> 
                        <Button onClick={() => dispatch(handleDisplayChange(false))} >Go Back</Button> 
                    </Alert>

                </div>
                {displayStatus === true ? displayDetail.avaliable ?
                    <div className='border rounded p-1 ps-3 mb-3' >
                        <Row className='d-flex'>
                            <Col sm={4} className='me-auto'>
                                <div className='text-secondary fs-6 fw-light'>Category:</div>
                                <div className='text-secondary fs-6 fw-light'>Type:</div>
                                <div className='text-secondary fs-6 fw-light'>Provider:</div>
                                <div className='text-secondary fs-6 fw-light'>Date:</div >
                                <div className='text-secondary fs-6 fw-light'>Time:</div >

                            </Col>
                            <Col sm={5} className='ms-auto'>
                                <div className='text-secondary fs-6 fw-light'>Requisitions</div >
                                <div className='text-secondary fs-6 fw-light'>Review My Lab Result</div >
                                <div className='text-secondary fs-6 fw-light'>{displayDetail.providerName}</div >
                                <div className='text-secondary fs-6 fw-light'>{scheduleUIInfo.selectedDate}</div >
                                <div className='text-secondary fs-6 fw-light'>{timeSlot[displayDetail.timeSlotIndex]}</div>
                            </Col>
                        </Row>
                        <hr />
                        <Row className='d-flex'>
                            <Col sm={4} className='me-auto'>
                                <div className='text-secondary fs-6 fw-light'>Patient:</div>
                                <div className='text-secondary fs-6 fw-light'>HCN:</div>
                                <div className='text-secondary fs-6 fw-light'>HCN Issuer:</div >


                            </Col>
                            <Col sm={5} className='ms-auto'>
                                <div className='text-secondary fs-6 fw-light'>Kameron Bosco</div >
                                <div className='text-secondary fs-6 fw-light'>046034894</div >
                                <div className='text-secondary fs-6 fw-light'>Illinois</div >

                            </Col>
                        </Row>
                    </div> :

                    <Alert className='d-flex justify-content-between'>
                        <span className='align-self-center'>TIME SLOT AVAILABLE</span> 
                        <Button href='./appointment' >BOOK NOW</Button>
                    </Alert>
                     : <></>}
                <div>


                    {/* render each privider row */}
                    {provider.map((providerName, providerKey) => {
                        return (
                            <div>
                                <div key={providerKey}>{providerName}</div>
                                <div className='timeRow d-flex justify-content-between align-self-center '>
                                    {
                                        // render each time slot
                                        timeSlot.map((timeSlot, timeSlotIndex) => (
                                            <Button key={timeSlotIndex}
                                                variant="light"
                                                onClick={() => handleDisplayDetail(true, timeSlotIndex, providerName)}
                                                className={appointmentInfo["providerList"]
                                                [providerName]
                                                ["booked"]
                                                [scheduleUIInfo.selectedDate]
                                                    &&
                                                    appointmentInfo["providerList"]
                                                    [providerName]
                                                    ["booked"]
                                                    [scheduleUIInfo.selectedDate].includes(timeSlotIndex) ?
                                                    "border border-3 border-warning mb-1 text-center me-2 "
                                                    :
                                                    'border mb-1 text-center  me-2'}
                                            >
                                                <div className='timeBtn' style={{ fontSize: "12px" }}>
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
        </Container>

    )
}

export default DateDetail