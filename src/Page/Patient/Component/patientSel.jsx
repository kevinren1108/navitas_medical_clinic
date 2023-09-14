import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import TextBubble from '../../../Layout/UI/textBubble'
import { useGetPatientByIDQuery } from '../../../Services/patient'
import { useSelector } from 'react-redux'


function PatientSel() {

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
        // console.log(data)
        if (data ) {
            console.log(data.gender)
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
        // console.log(data)
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
                        <Row className='mt-4 mb-3 '>
                            <Col className='col-4'>
                                <img className="rounded-circle shadow-4-strong" 
                                src={data.avatar} 
                                alt="avatar" 
                                style={{height: "100px", width: "100px" }}/>
                            </Col>
                            <Col className='pt-2' >
                                <h5>{data.firstName + " " + data.lastName}</h5>
                                <div>{dataBirth} ({age} Years) </div>
                                <div>{gender}</div>
                            </Col>
                        </Row >
                        <Row className='mb-3'>
                            <h5>HEALTH CARD NUMBER</h5>
                            <span>{data.healthCardNumber}</span>
                            <span>Issued by {data.healthCardIssuer} Health Service</span>
                        </Row>

                        <Row className='mb-3'>
                            <h5>ADDRESS:</h5>
                            <span>{data.addressStreet}</span>
                            <span>{data.addressCity}, {data.addressState} {data.addressPostal}</span>
                        </Row>

                        <Row className='mb-3'>
                            <h5>PREFFRRED COMMUNICATION:</h5>
                            <span>{data.phone}</span>
                        </Row>

                        <Row className='mb-3'>
                            <h5>EMERGENCY CONTACT:</h5>
                            <span>{data.emergencyContactPerson}</span>
                            <span>{data.emergencyContactPhone}</span>

                        </Row>

                        <Row className='mb-3'>
                            <h5>LANGUAGE:</h5>
                            <span>{data.language}</span>
                        </Row>

                        <Row className='mb-3'>
                            <h5>INSURANCE:</h5>
                            <span>Provider: {data.insuranceProvider }</span>
                            <span>Group ID: {data.insuranceGroupID}</span>
                            <span>Coustomer ID: {data.insuranceCustomerID }</span>
                        </Row>

                        <Row className='mb-3'>
                            <h5>CONDITIONS:</h5>
                            
                            {conditions ? conditions.map((value, key) => (
                                    <TextBubble key={key} content={value} dangerlevel={conditions.length- key} />
                                )):<></>}

                        </Row>

                        <Row className='mb-3'>
                            <h5>MEDICATIONS:</h5>
                                {medications ? medications.map((value, key) => (
                                    <TextBubble key={key} content={value} dangerlevel={medications.length- key} />
                                )):<></>}
                        </Row>

                        <Row className='mb-3'>
                            <h5>ALLERGIES:</h5>
                            {allergies ? allergies.map((value, key) => (
                                    <TextBubble key={key} content={value} dangerlevel={allergies.length- key} />
                                )):<></>}
                        </Row>

                        <Row className='mb-3'>
                            <h5>LAST ENCOUNTER:</h5>
                            <p>2015-11-25</p>
                        </Row>

                    </Container>
                </>
            ) : null}




        </div>
    )
}

export default PatientSel