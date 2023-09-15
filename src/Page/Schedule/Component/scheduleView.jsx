import React, { useState } from 'react'
import { Alert, Badge, Calendar } from 'antd';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { handleDateChange, handleDisplayChange } from '../store/scheduleUISlice';

function ScheduleView() {
    const dispatch = useDispatch()
    const appointmentInfo = useSelector((state) => (state.appointment))
    const getListData = (value) => {
        let listData;

        switch (value.date()) {
            case 8:
                listData = [
                    {
                        type: 'warning',
                        content: 'This is warning event.',
                    },
                    {
                        type: 'success',
                        content: 'This is usual event.',
                    },
                ];
                break;
            case 10:
                listData = [
                    {
                        type: 'warning',
                        content: 'This is warning event.',
                    },
                    {
                        type: 'success',
                        content: 'This is usual event.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event.',
                    },
                ];
                break;
            case 15:
                listData = [
                    {
                        type: 'warning',
                        content: 'This is warning event',
                    },
                    {
                        type: 'success',
                        content: 'This is very long usual event......',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 1.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 2.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 3.',
                    },
                    {
                        type: 'error',
                        content: 'This is error event 4.',
                    },
                ];
                break;
            default:
        }
        return listData || [];
    };
    const [value, setValue] = useState(() => dayjs(new Date()));
    const [selectedValue, setSelectedValue] = useState(() => dayjs(new Date()));
    const onSelect = (newValue) => {
        setValue(newValue);
        setSelectedValue(newValue);
        dispatch(handleDisplayChange(true))
        dispatch(handleDateChange(newValue.format('M/DD/YYYY')))
    };
    const onPanelChange = (newValue) => {
        setValue(newValue);
    };
    const getMonthData = (value) => {
        if (value.month() === 8) {
            return 1394;
        }
    };
    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };
    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };
    const cellRender = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };


    return (
        <div className='p-5'>
            <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} cellRender={cellRender} />
        </div>

    )
}

export default ScheduleView