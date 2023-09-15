import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import TextBubble from '../../../Layout/UI/textBubble'
import { useGetPatientByIDQuery } from '../../../Services/patient'
import { useDispatch, useSelector } from 'react-redux'
import { handlePatientChange } from '../store/patientSlice'


function PatientSel() {

    const dispatch = useDispatch()
    const uiInfo = useSelector((state) => state.appointmentUI)
    const { data, error, isLoading } = useGetPatientByIDQuery(uiInfo.selectPatientID)
    const [age, setAge] = useState()
    const [dataBirth, setDataBirth] = useState()
    const [conditions, setCondition] = useState([])
    const [medications, setMedication] = useState([])
    const [allergies, setAllergies] = useState([])
    const [gender, setGender] = useState([])

    const agePhase = (data) => {
        if (data && data.birthDate) {
            const birthDate = new Date(data.birthDate);
            const currentDate = new Date();
            const age = currentDate.getFullYear() - birthDate.getFullYear();
            return age
        }
        return null;
    }

    const genderPhase = (data) => {
        if (data) {
            let gender = ""
            if (data.gender === true)
                gender = "Male"
            else
                gender = "Famale"
            return gender
        }
        return null;
    }

    const dateBirthPhase = (data) => {
        if (data && data.birthDate) {
            return data.birthDate.slice(0, 10)
        }
        return null;
    }

    const conditionsPhase = (data) => {
        if (data && data.healthCondition) {
            return data.healthCondition.split(' ')
        }
        return null;
    }

    const medicationsPhase = (data) => {
        if (data && data.medications) {
            return data.medications.split(' ')
        }
        return null;
    }

    const allergiesPhase = (data) => {
        if (data && data.allergies) {
            return data.allergies.split(' ')
        }
        return null;
    }


    useEffect(() => {

        const age = agePhase(data)
        const dataBirth = dateBirthPhase(data)
        const conditions = conditionsPhase(data)
        const medications = medicationsPhase(data)
        const allergies = allergiesPhase(data)
        const gender = genderPhase(data)

        setAge(age)
        setDataBirth(dataBirth)
        setCondition(conditions)
        setMedication(medications)
        setAllergies(allergies)
        setGender(gender)

        dispatch(handlePatientChange(data))
        // eslint-disable-next-line
    }, [data])

    return (
        <div>

            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <div className='vh-100 d-flex align-items-center justify-content-center'>
                    <Spinner role='status' />
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : data ? (
                <>
                    <Container >
                        <Row className='mt-4 mb-3' lg={4} md={12} sm={12}>
                            <Col >
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <img className="rounded-circle shadow-4-strong"
                                            src={data.avatar}
                                            alt="avatar"
                                            style={{ height: "100px", width: "100px" }} />
                                    </div>
                                    <div>
                                        <div className='fw-bold'>{data.firstName + " " + data.lastName}</div>
                                        <section>{dataBirth} ({age} Years) </section>
                                        <section>{gender}</section>
                                    </div>
                                </div>
                                <div>
                                    <div className='fw-bold'>HEALTH CARE NUMBER</div>
                                    <div>{data.healthCardNumber}</div>
                                    <div>Issued by {data.healthCardIssuer} Health Service</div>
                                </div>
                                <div>
                                    <div className='fw-bold'>ADDRESS:</div>
                                    <div>{data.addressStreet}</div>
                                    <div>{data.addressCity}, {data.addressState} {data.addressPostal}</div>
                                </div>
                                <div className='mb-3'>
                                    <div className='fw-bold'>LAST ENCOUNTER:</div>
                                    <p>2015-11-25</p>
                                </div>
                            </Col>

                            <Col className='' lg={4} md={12}  sm={12}>
                                <div>
                                    <div className='fw-bold'>PREFFRRED COMMUNICATION:</div>
                                    <div>{data.phone}</div>
                                </div>
                                <div>
                                    <div className='fw-bold'>EMERGENCY CONTACT:</div>
                                    <div>{data.emergencyContactPerson}</div>
                                    <div>{data.emergencyContactPhone}</div>
                                </div>
                                <div>
                                    <div className='fw-bold'>LANGUAGE:</div>
                                    <div>{data.language}</div>
                                </div>
                                <div>

                                    <div className='fw-bold'>INSURANCE:</div>
                                    <div>Provider: {data.insuranceProvider}</div>
                                    <div>Group ID: {data.insuranceGroupID}</div>
                                    <div>Coustomer ID: {data.insuranceCustomerID}</div>

                                </div>
                            </Col>
                            <Col className=' ' lg={4} md={12} sm={12} >
                                <div className='mb-3'>
                                    <div className='fw-bold'>CONDITIONS:</div>
                                    <div className=''>
                                        {conditions ? conditions.map((value, key) => (
                                            <TextBubble key={key} content={value} dangerlevel={conditions.length - key} />
                                        )) : <></>}
                                    </div>

                                </div>
                                <div className='mb-3'>
                                    <div className='fw-bold'>MEDICATIONS:</div>
                                    {medications ? medications.map((value, key) => (
                                        <TextBubble key={key} content={value} dangerlevel={medications.length - key} />
                                    )) : <></>}
                                </div>

                                <div className='mb-3'>
                                    <div className='fw-bold'>ALLERGIES:</div>
                                    <div className="lh-lg" style={{width: "100px"}}>
                                        {allergies ? allergies.map((value, key) => (
                                            <TextBubble className="mb-5" key={key} content={value} dangerlevel={allergies.length - key} />
                                        )) : <></>}
                                    </div>
                                </div>
                            </Col>
                        </Row >
                    </Container>
                </>
            ) : null}
        </div>
    )
}

export default PatientSel