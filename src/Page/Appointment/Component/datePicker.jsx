import React, { useState } from 'react'
import AppointmentStats from './appointmentStats'
import Calendar from 'react-calendar'
import { Col, Row } from 'react-bootstrap'
import 'react-calendar/dist/Calendar.css';

function DatePicker(props) {

    const [value, onChange] = useState(new Date())
    
    return (
        <div className='flex border p-5 m-5'>
            <Row className='mb-3'>
                <Col sm={4}>
                    <Calendar 
                        onChange={onChange} 
                        value={value} 
                        
                    />
                    {value.toLocaleDateString("en-US")}

                </Col>
                <Col sm={8}>
                </Col>

            </Row>


            <AppointmentStats step={3} {...props} />
        </div>



    )
}

export default DatePicker