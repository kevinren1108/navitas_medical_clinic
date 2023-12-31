import React, { useEffect } from 'react'
import { ListGroup, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
    handleAlertPush, handleCategoryUpdate,
    handleTypeUpdate, handleAlertDelete
} from '../store/appointmentSlice';
import AppointmentStats from './appointmentStats';
import { useGetPatientByIDQuery } from '../../../Services/patient';
import { handlePatientChange } from '../../Patient/store/patientSlice';


function Task(props) {
    // redux
    const dispatch = useDispatch();

    // fetch selected patient data
    const uiInfo = useSelector((state) => state.appointmentUI)
    const { data } = useGetPatientByIDQuery(uiInfo.selectPatientID)
    useEffect(() => {
        dispatch(handlePatientChange(data))
        // eslint-disable-next-line
    }, [data]) 
    
    // redux getter
    const appointmentInfo = useSelector((state) => state.appointment)
    const patientInfo = useSelector((state) => state.patient)


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

   

    function formValidation() {
        if (patientInfo.id === "") {
            dispatch(handleAlertPush("Choose Patient"))
        } else {
            dispatch(handleAlertDelete("Choose Patient"))
        }
        if (appointmentInfo.appointmentCategory === "") {
            dispatch(handleAlertPush("Choose Category"))
        } else {
            dispatch(handleAlertDelete("Choose Category"))
        }
        if (appointmentInfo.appointmentType === "") {
            dispatch(handleAlertPush("Choose Type"))
        } else {
            dispatch(handleAlertDelete("Choose Type"))
        }
        if (patientInfo.id !== "" &&
            appointmentInfo.appointmentCategory !== "" &&
            appointmentInfo.appointmentType !== ""
        ) {

            props.nextStep();
        }
    };

    return (
        <Container className='pt-3 pb-5'>
            <div className='flex '>

                <Row className='mb-3'>
                    <Col sm={4}>
                        Choose a Category
                        <ListGroup>
                            {appointmentCategory.map((value, key) => (
                                <ListGroup.Item
                                    className={appointmentInfo.appointmentCategory === value ? "border border-3 border-primary" : ""}
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
                                    className={appointmentInfo.appointmentType === value ? "border border-3 border-primary" : ""}
                                    action key={key} variant="secondary"
                                    onClick={() => dispatch(handleTypeUpdate(value))}
                                >
                                    {value}
                                </ListGroup.Item>
                            ))}


                        </ListGroup>
                    </Col>
                </Row>
                <AppointmentStats step={1}  {...props} nextStep={formValidation} />

            </div>
        </Container>

    )
}

export default Task