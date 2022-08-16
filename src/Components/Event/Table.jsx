import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getEventsStart,
    // createEventStart,
    updateEventStart
} from '../../Actions/eventAction';
import Paper from '@mui/material/Paper';
import { Styles } from '../../CSS/TableStyle';
import MUIDataTable from "mui-datatables";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from './Form';
import Delete from '.././DleteModel';

const EventTable = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [dshow, setDhow] = useState(false);
    const [eventList, setElData] = useState([]);
    const [em, setEm] = useState(false);
    const [eventData, setEventData] = useState({});
    const [delData, setData] = useState({});
    const dClose = () => setDhow(false);

    useEffect(() => {
        dispatch(getEventsStart());
    }, [dispatch]);
    const Events = useSelector(state => state.fetchEvents.events);
    useEffect(() => {
        if (Events && (Object.keys(Events).length > 0)) {
            setElData(Events)
        }
      }, [Events]);

    const handleClickOpen = () => {
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setEventData({})
        setEm(false);
    };
    const handleUpdate = (Id) => {
        const editData = Events.find((e) => e.id === Id);
        handleClickOpen();
        setEm(true);
        setEventData(editData)
    }
    const handleDelete = (Id) => {
        const Data = Events.find((e) => e.id === Id);
        setDhow(true);
        setData(Data)
    };
    const onDelete = () => {
        if(Object.keys(delData).length > 0){
            delData.isDeleted = true;
            dispatch(updateEventStart(delData));
            toast.success("event Deleted Successfully");
            setTimeout(() => dispatch(getEventsStart()), 2000);
            dClose()
        }
    }

    const columns = [
        {
            name: 'name',
            label: 'Event Name',
        },
        {
            name: 'description',
            label: 'Event Description',
        },
        {
            name: 'isActive',
            label: 'Status',  
            options: {
                customBodyRender: (value) => {
                    return (
                        <div>
                            {value.toString() === "true"
                                ? "Active"
                                : value.toString() === "false"
                                    ? "InActive"
                                    : "InActive"}
                        </div>
                    );
                },
            }
        },
        {
            name: "id",
            label: 'Actions',
            options: {
                customBodyRender: (value, tableMeta) => {
                    return (
                        <div>
                            <Tooltip title="Edit">
                                <IconButton onClick={() => handleUpdate(value)} >
                                    <EditIcon color="info" />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete">
                                <IconButton onClick={() => handleDelete(value)}>
                                    <DeleteIcon color="error" />
                                </IconButton>
                            </Tooltip>
                        </div>
                    );
                }
            },
        },
    ];



    const options = {
        exportButton: true,
        filter: true,
        filterType: "dropdown",
        responsive: "standard",
        fixedSelectColumn: false,
        resizableColumns: false,
        rowsPerPageOptions: [5, 10, 15, 30, 50, 100],
        jumpToPage: true,
        textLabels: {
            pagination: {
                next: "Next >",
                previous: "< Previous",
                rowsPerPage: "Total items Per Page",
                displayRows: "of"
            }
        },
    };
    return (
        <div>
            <Paper>
                <p className='tab_head'>Event Listing</p>
                <div>
                    <div className='align_right'>
                        <Button variant="standard" className="addPop" onClick={handleClickOpen}><AddIcon className='addicon' />Add Event</Button>
                    </div>
                    <Styles>
                        <MUIDataTable
                            data={eventList}
                            columns={columns}
                            options={options}
                        />
                    </Styles>
                    <div>
                        <Modal
                            show={show}
                            onHide={handleClose}
                            size='lg'
                        >
                            <Modal.Header closeButton>Add Event</Modal.Header>
                            <Modal.Body>
                                <Form
                                    show={show}
                                    handleClose={handleClose}
                                    ED={eventData}
                                    em={em}
                                />
                            </Modal.Body>
                        </Modal>
                        {dshow &&
                            <Delete
                                show={dshow}
                                handleClose={dClose}
                                onDelete={onDelete}
                            />
                        }
                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default EventTable;