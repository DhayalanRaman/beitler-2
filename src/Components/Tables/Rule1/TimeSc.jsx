import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddIcon from '@mui/icons-material/Add';
import { Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function TimeSch({ show, handleClose, handleShow, onChangeTime, timeSch }) {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <Button variant="standard" onClick={handleShow} className="addPop" id="Add_modal"><AddIcon />Add timeSchedule</Button>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header className='addTitle' closeButton>
                    <Modal.Title>Add timeSchedule</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Label>Interval</Form.Label>
                                <Form.Select
                                    name='Intervals'
                                    value={timeSch.Intervals}
                                    onChange={(e) => onChangeTime(e)}
                                    as="select"
                                    disabled={false}
                                >
                                    <option value="">Select</option>
                                    <option value={91}>Every 2 Weeks</option>
                                    <option value={93}>Once a Week</option>
                                    <option value={94}>Every Day</option>
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Label > Schedule Time</Form.Label>                               
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"
                                    className='form-control'
                                />
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose} className='save_Btn'>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default TimeSch;