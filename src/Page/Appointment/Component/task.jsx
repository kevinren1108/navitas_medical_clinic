import React from 'react'
import { ListGroup, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { handleCategoryUpdate, handleTypeUpdate } from '../store/appointmentSlice';
import AppointmentStats from './appointmentStats';


function Task(props) {

    const dispatch = useDispatch();
    const appointmentInfo = useSelector((state) => state.appointment)
    const appointmentType = {
        "General": ["General Appointment", "General Appointment - Pharmacist"],
        "Mental": ["Mental Health", "Nutrition Consult", "Weight Loss Consult"],
        "Prescriptions": ["Birth Control or Plan B", "Medical Device Prescriptions", "Medication Prescriptions"],
        "Requisitions": ["Blood Test, X-Ray, Ultrasound, MRI, etc.", "Review My Recent Lab Results"],
        "Skin": ["Skin Issues", "Toenail or Fingernail Infection"],
        "Specialist/ Other": ["Nutrition Consult", "Sports Medicine Consultation", "Travel Consult", 
                            "Joint Pain", "Back Pain", "Muscle Pain"]
    }

    const appointmentCategory = Object.keys(appointmentType)

    const handleNextStep = (e) => {
        // console.log(e)
        dispatch(handleTypeUpdate(e))
        props.nextStep();
        
    };

    return (
        <div className='flex border p-5 m-5'>

            <Row className='mb-3'>
                <Col sm={4}>
                    Choose a Category
                    <ListGroup>
                        {appointmentCategory.map((value, key) => (
                            <ListGroup.Item 
                                action key={key} variant="primary"
                                onClick={() => dispatch(handleCategoryUpdate(value))}
                            >
                                {value}
                            </ListGroup.Item>
                        ))}

                    </ListGroup>
                </Col>
                <Col sm={8}>
                    Choose a type
                    <ListGroup>
                        {appointmentType[appointmentInfo.appointmentCategory].map((value, key) => (
                            <ListGroup.Item 
                                action key={key} variant="secondary"
                                onClick={() => handleNextStep(value)}
                            >
                                {value}
                            </ListGroup.Item>
                        ))}

                        
                    </ListGroup>
                </Col>
            </Row>
            <AppointmentStats  step={1} {...props} />
        </div>
    )
}

export default Task