import React from 'react'
import ScheduleView from './Component/scheduleView'
import { useSelector } from 'react-redux'
import DateDetail from './Component/dateDetail'
import { Container } from 'react-bootstrap'


function Schedule() {
    const scheduleUIInfo = useSelector((state) => (state.scheduleUI))

    return (

        <Container fluid className=''>
            {scheduleUIInfo.displayDateDetail ? <DateDetail /> :<ScheduleView />}
        </Container>

    )
}

export default Schedule