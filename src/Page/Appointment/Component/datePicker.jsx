import React, { useEffect, useState } from 'react'
import AppointmentStats from './appointmentStats'
import Calendar from 'react-calendar'
import { Button, Col, Container, Row } from 'react-bootstrap'
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import { handleDateUpdate, handleTimeUpdate, handleAlertDelete, handleAlertPush } from '../store/appointmentSlice';

function DatePicker(props) {

    const dispatch = useDispatch();
    const appointmentInfo = useSelector((state) => state.appointment)
    const patinentInfo = useSelector((state) => state.patient)
    const [value, onChange] = useState(new Date())
    const [timeBooked, updatetimeBooked] = useState([])
    const timeSlot = ["9:00-9:45", "10:00-10:45", "11:00-11:45", "13:00-13:45", "14:00-14:45", "15:00-15:45", "16:00-16:45",]
    const [timeSel, setTimeSel] = useState("")

    function handleTimeSelect(key) {
        // update UI
        setTimeSel(key)
        // update State
        dispatch(handleTimeUpdate(timeSlot[key]))
    }

    useEffect((() => {
        // fetch available time slot for the selected date
        if (appointmentInfo.appointmentProvider) {
            const booked = appointmentInfo.providerList[appointmentInfo.appointmentProvider].booked[value.toLocaleDateString("en-US")]
            if (booked === undefined) {
                updatetimeBooked([])
            } else {
                updatetimeBooked(booked)
            }
            // update appointment date state
            dispatch(handleDateUpdate(value.toLocaleDateString("en-US")))
        }


        // eslint-disable-next-line
    }), [value])

    function formValidation() {
        if (appointmentInfo.appointmentTime === "") {
            dispatch(handleAlertPush("Choose Time"))
        } else {
            dispatch(handleAlertDelete("Choose Time"))
        }
        if (appointmentInfo.appointmentDate === "") {
            dispatch(handleAlertPush("Choose Date"))
        } else {
            dispatch(handleAlertDelete("Choose Date"))
        }
        if (appointmentInfo.appointmentDate !== "" && appointmentInfo.appointmentTime !== "") {

            props.nextStep();
        }
    };

    return (
        <Container className='pt-3 pb-5'>
            <div className='flex '>
                <Row className='mb-3'>
                    <Col sm={4}>
                        <Calendar
                            onChange={onChange}
                            value={value}

                        />
                        {value.toLocaleDateString("en-US")}

                    </Col>
                    {/*  */}
                    <Col sm={2}>
                        {timeSlot.map((value, key) => (
                            timeBooked.includes(key) ?
                                <></>
                                :
                                <Button key={key}
                                    variant="light"
                                    style={{ width: "10rem" }}
                                    className={timeSel === key ? " border border-3 border-primary mb-1 text-center rounded" : 'border mb-1 text-center rounded'}
                                    onClick={() => handleTimeSelect(key)}>
                                    {value}
                                </Button>
                        ))}
                    </Col>
                    <Col sm={1}>
                    </Col>
                    <Col sm={5}>
                        <div className='border rounded p-3'>
                            <h4>Appointment Summary</h4>
                            <Row>
                                <Col>
                                    <div className='text-secondary fs-6 fw-light'>Category:</div>
                                    <div className='text-secondary fs-6 fw-light'>Type:</div>
                                    <div className='text-secondary fs-6 fw-light'>Provider:</div>
                                    <div className='text-secondary fs-6 fw-light'>Date:</div >
                                    <div className='text-secondary fs-6 fw-light'>Time:</div >

                                </Col>
                                <Col>
                                    <div className='text-secondary fs-6 fw-light'>{appointmentInfo.appointmentCategory}</div >
                                    <div className='text-secondary fs-6 fw-light'>{appointmentInfo.appointmentType}</div >
                                    <div className='text-secondary fs-6 fw-light'>{appointmentInfo.appointmentProvider}</div >
                                    <div className='text-secondary fs-6 fw-light'>{appointmentInfo.appointmentDate}</div >
                                    <div className='text-secondary fs-6 fw-light'>{appointmentInfo.appointmentTime}</div>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col>
                                    <div className='text-secondary fs-6 fw-light'>Patient:</div>
                                    <div className='text-secondary fs-6 fw-light'>HCN:</div>
                                    <div className='text-secondary fs-6 fw-light'>HCN Issuer:</div >


                                </Col>
                                <Col>
                                    <div className='text-secondary fs-6 fw-light'>{patinentInfo.firstName + " " + patinentInfo.lastName}</div >
                                    <div className='text-secondary fs-6 fw-light'>{patinentInfo.healthCardNumber}</div >
                                    <div className='text-secondary fs-6 fw-light'>{patinentInfo.healthCardIssuer}</div >

                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>


                <AppointmentStats step={3} {...props} nextStep={formValidation} />
            </div>
        </Container>




    )
}

export default DatePicker