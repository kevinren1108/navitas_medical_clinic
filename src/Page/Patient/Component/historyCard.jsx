import React from 'react'
import { Row, Col } from 'react-bootstrap'

function HistoryCard() {
    return (
        <div>
            <section className=' pt-2 fw-bold'>Appointment Detail</section>
            <hr />
            <Row className=''>
                <Col className='me-auto'>
                    <div className='text-secondary fs-6 fw-light text-wrap'>Category:</div>
                    <div className='text-secondary fs-6 fw-light text-wrap'>Type:</div>
                    <div className='text-secondary fs-6 fw-light text-wrap'>Provider:</div>
                    <div className='text-secondary fs-6 fw-light text-wrap'>Date:</div >
                    <div className='text-secondary fs-6 fw-light text-wrap'>Time:</div >

                </Col>
                <Col className='ms-auto'>
                    <div className='text-secondary fs-6 fw-light text-wrap'>Requisitions</div >
                    <div className='text-secondary fs-6 fw-light text-wrap'>Review My Lab Result</div >
                    <div className='text-secondary fs-6 fw-light text-wrap'>Dr. Imran Mushtaq</div >
                    <div className='text-secondary fs-6 fw-light text-wrap'>9/15/2023</div >
                    <div className='text-secondary fs-6 fw-light text-wrap'>13:00-13:45</div>
                </Col>
            </Row>
            <hr />
            <Row className=''>
                <Col className='me-auto'>
                    <div className='text-secondary fs-6 fw-light'>Patient:</div>
                    <div className='text-secondary fs-6 fw-light'>HCN:</div>
                    <div className='text-secondary fs-6 fw-light'>HCN Issuer:</div >


                </Col>
                <Col className='ms-auto'>
                    <div className='text-secondary fs-6 fw-light'>Kameron Bosco</div >
                    <div className='text-secondary fs-6 fw-light'>046034894</div >
                    <div className='text-secondary fs-6 fw-light'>Illinois</div >

                </Col>
            </Row>

        </div>
    )
}

export default HistoryCard