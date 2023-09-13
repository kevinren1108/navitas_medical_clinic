import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TextBubble from '../../Layout/UI/textBubble'
import Male from "../../Assets/male_avator.jpg"

function PatientSel() {
  return (
    <div>
        <Container >
            <Row className='mt-4 mb-3 '>
                <Col className='col-4'>
                    <img className="rounded-circle shadow-4-strong" src={Male} alt="avatar"/> 
                </Col>
                <Col className='' >
                    <h5>Mcdonload Jepthon</h5>
                    <div>1971-09-25 (25 Years)</div>
                    <div>Male</div>
                </Col>
            </Row >
            <Row className='mb-3'>
                <h5>HEALTH CARD NUMBER</h5>
                <span>123 324 3142</span>
                <span>Issued by British Columbia</span>
            </Row>

            <Row className='mb-3'>
                <h5>ADDRESS:</h5>
                <span>123 Kithm St</span>
                <span>Vancouver, BC V5C 4T7</span>
            </Row>

            <Row className='mb-3'> 
                <h5>PREFFRRED COMMUNICATION:</h5>
                <span>718-987-2526</span>
            </Row>

            <Row className='mb-3'> 
                <h5>EMERGENCY CONTACT:</h5>
                <span>Susan Jepthon</span>
                <span>718-997-4879</span>
                                           
            </Row>

            <Row className='mb-3'>
                <h5>LANGUAGE:</h5>
                <span>English</span>
            </Row>

            <Row className='mb-3'>
                <h5>INSURANCE:</h5>
                <span>Provider: Canada Life</span>
                <span>Group ID: 899234</span>
                <span>Coustomer ID: 237 09823</span>
            </Row>

            <Row className='mb-3'>
                <h5>CONDITIONS:</h5>
                
                <TextBubble content={"Atheromatous"} dangerlevel={5} />
                <TextBubble content={"Atrial fibrillation"} dangerlevel={5} />
                <TextBubble content={"Chronic respiratory"} dangerlevel={4} />
                <TextBubble content={"Thyroid"} dangerlevel={4} />
                <TextBubble content={"PCOS"} dangerlevel={3} />
                <TextBubble content={"Anxiety"} dangerlevel={2} />
                <TextBubble content={"Knee pain"} dangerlevel={1} />
                
            </Row>

            <Row className='mb-3'>
                <h5>MEDICATIONS:</h5>
                
                <TextBubble content={"Atheromatous"} dangerlevel={5} />
                <TextBubble content={"Atrial fibrillation"} dangerlevel={5} />
                <TextBubble content={"Chronic respiratory"} dangerlevel={4} />
                <TextBubble content={"Thyroid"} dangerlevel={4} />
                <TextBubble content={"PCOS"} dangerlevel={3} />
                <TextBubble content={"Anxiety"} dangerlevel={2} />
                <TextBubble content={"Knee pain"} dangerlevel={1} />
                
            </Row>

            <Row className='mb-3'>
                <h5>ALLERGIES:</h5>
                <TextBubble content={"Cetirizine"} dangerlevel={1} />
                <TextBubble content={"Loratadine"} dangerlevel={1} />
            </Row>

            <Row className='mb-3'>
                <h5>LAST ENCOUNTER:</h5>
                <p>2015-11-25</p>
            </Row>

        </Container>

    </div>
  )
}

export default PatientSel