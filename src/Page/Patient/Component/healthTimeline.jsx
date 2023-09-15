import React from 'react'
import "../style.css"
import HistoryTest from './HistoryTest'
import { Container } from 'react-bootstrap'



function HealthTimeline() {


    return (
        <Container>

        
            <div>
                <div className='fs-4'>
                    Health Timeline
                </div>

                <div className="timeLineChart mt-2 border rounded-bottom-3 p-3 pb-0" style={{ overflow: "auto"}}>
                    
                    <div className="position-relative" >
                        <div>
                            <div className='border-1 rounded-pill p-2 w-auto mb-1 d-inline-block' 
                            style={{ background: "#ffee93"}} >
                                Medication
                            </div>
                        </div>
                        <div>
                            <div className='border-1 rounded-pill p-2 w-auto mb-1 d-inline-block' 
                            style={{ background: "#ffee93"}} >
                                Medication
                            </div>
                        </div>
                        <div>
                            <div className='border-1 rounded-pill p-2 w-auto mb-1 d-inline-block' 
                            style={{ background: "#ffee93"}} >
                                Medication
                            </div>
                        </div>
                        <div>
                            <div className='border-1 rounded-pill p-2 w-auto mb-1 d-inline-block' 
                            style={{ background: "#fcf5c7"}} >
                                Injection
                            </div>
                        </div>
                        <div>
                            <div className='border-1 rounded-pill p-2 w-auto mb-1 d-inline-block' 
                            style={{ background: "#79addc"}} >
                                Pescription
                            </div>
                        </div>
                        <div>
                            <div className='border-1 rounded-pill p-2 w-auto mb-1 d-inline-block' 
                            style={{ background: "#79addc"}} >
                                Pescription
                            </div>
                        </div>
                        <div>
                            <div className='border-1 rounded-pill p-2 w-auto mb-1 d-inline-block' 
                            style={{ background: "#79addc"}} >
                                Pescription
                            </div>
                        </div>
                        <div>
                            <div className='border-1 rounded-pill p-2 w-auto mb-1 d-inline-block' 
                            style={{ background: "#79addc"}} >
                                Pescription
                            </div>
                        </div>
                        <div>
                            <div className='border-1 rounded-pill p-2 w-auto mb-1 d-inline-block' 
                            style={{ background: "#ffc09f"}} >
                                Health Consolation
                            </div>
                        </div>
                        <p className='pt-3 border-top' >2020-11-03</p>
                    </div>

                    <HistoryTest />
                    <HistoryTest />
                    <HistoryTest />
                    <HistoryTest />
                    <HistoryTest />

                </div>
            </div>
        </Container>
    )
}

export default HealthTimeline