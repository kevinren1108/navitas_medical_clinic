import React from 'react'
import ScheduleView from './Component/scheduleView'
import { useSelector } from 'react-redux'
import DateDetail from './Component/dateDetail'
import { Col, Container, Row } from 'react-bootstrap'


function Schedule() {
    const scheduleUIInfo = useSelector((state) => (state.scheduleUI))

    return (

        <Container fluid className='' style={{ height: "calc(100% - 57px)" }}>
            <Row className='h-100'>
                {scheduleUIInfo.displayDateDetail ? 
                    <>
                        <Col className='col-8 border'>
                            <ScheduleView />
                        </Col>
                        <Col className='border p-4'>
                            <DateDetail />
                        </Col>
                    </> 
                    :
                    <>
                        <Col >
                            <ScheduleView />
                        </Col>
                        </>
                    }



            </Row>
        </Container>

    )
}

export default Schedule