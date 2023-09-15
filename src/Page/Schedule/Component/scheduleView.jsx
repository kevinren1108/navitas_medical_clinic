import React, { useState } from 'react'
import { Calendar } from 'antd';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { handleDateChange, handleDisplayChange } from '../store/scheduleUISlice';
import { Container } from 'react-bootstrap';
import "../style.css"

function ScheduleView() {
    const dispatch = useDispatch()
   
    const [value, setValue] = useState(() => dayjs(new Date()));
    
    const onSelect = (newValue) => {
        setValue(newValue);
        
        dispatch(handleDisplayChange(true))
        dispatch(handleDateChange(newValue.format('M/DD/YYYY')))
    };
    const onPanelChange = (newValue) => {
        setValue(newValue);
    };

    const getMonthData = (value) => {
        return Math.floor(Math.random() * 500) + 400;
    };

    const getListData = (value) => {
        const listData = [29, 18, 32, 15, 35, 23, 27, 19, 14, 12, 33, 30, 38, 22, 11, 17, 28, 36, 24, 34, 20, 16, 10, 25, 31, 37, 40, 26, 21, 13, 39]

        return listData[value.date()]
    };

    const getDayData = (value) => {

        const count = getListData(value)
        let status = ""
        let textColor = ""
        if (count < 10) {
            status = "IDLE"
            textColor = "#79addc"
        } else if (10 < count && count < 20) {
            status = "IDLE"
            textColor = "#79addc"
        } else if (20 < count && count < 30) {
            status = "BUSY"
            textColor = "#ffc09f"
        } else if (30 < count < 40) {
            status = "FULL"
            textColor = "#ffc09f"
        } return { status, textColor }
    };

    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Appointments</span>
            </div>
        ) : null;
    };

    const dateCellRender = (value) => {
        const { status, textColor } = getDayData(value);
        return (
            <div className=' position-relative '>
                <div className=' cell position-absolute top-0 end-0' style={{ color: textColor }}>
                    {status}
                </div>
            </div>

        );
    };
    const cellRender = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };


    return (
        <Container>
            <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} cellRender={cellRender} />
        </Container>


    )
}

export default ScheduleView