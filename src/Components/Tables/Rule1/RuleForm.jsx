import * as React from 'react';
import { useState, useEffect } from 'react';
import { Form, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { getRuleStart, createRuleStart, updateRuleStart } from '../../../Actions/ruleAction';
import { useDispatch } from "react-redux";
import TimeSch from './TimeSc';
import { options } from '../../../Utils/Columns';
import MUIDataTable from "mui-datatables";
import { Styles } from '../../../CSS/TableStyle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function RuleForm({ handleCloses, Emode, Edata }) {
    const dispatch = useDispatch();
    const initialValue = {
        description: "",
        event_Id: '',
        entity_Id: '',
        isActive: true,
        notificationCount: 0,
        rulesSchedules: [
            {
                Intervals: 94,
                ScheduleTime: new Date().toLocaleTimeString(),
                rule_Id: 0,
                isDeleted: false,
                isActive: true,
            }
        ]
    };
    const timeini = {
        Intervals: "",
        ScheduleTime: "",
        // rule_Id: 0,
        isDeleted: false,
        isActive: true,
    };
    
    const [ruleData, setRuleData] = useState(initialValue);
    const [timeSch, setTimeSch] = useState(timeini);
    // const [tarr, setTarr] = useState('');

    const onChangeTime = (e) => {
        const { value, name } = e.target;
        setTimeSch({ ...timeSch, [name]: value })
    };

    const onChange = (e) => {
        const { value, id, checked, name } = e.target;
        setRuleData({ ...ruleData, [name]: value, [id]: checked })
    };
    useEffect(() => {
        if (Emode && Object.keys(Edata).length > 0) {
            setRuleData(Edata)
        }
    }, [Emode, Edata]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Events = useSelector(state => state.fetchEvents.events);
    const EntityArr = [
        { id: 91, value: "vender" },
        { id: 50, value: "Corporate(BLS)" },
        { id: 5, value: "Store" },
        { id: 4, value: "PoolProvider" },
        { id: 3, value: "Broker" },
        { id: 2, value: "Carrier" },
        { id: 1, value: "Customer" },
    ];
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (Emode) {
            dispatch(updateRuleStart(ruleData));
            toast.success("rule Updated Successfully");
        } else {
            dispatch(createRuleStart(ruleData));
            toast.success("rule added Successfully");
        };
        handleCloses();
        setTimeout(() => dispatch(getRuleStart()), 2000);
    };
    const Timecol = [
        {
            name: 'Intervals',
            label: 'intervals',
            options: {
                customBodyRender: (value) => {
                    return (
                        <div>
                            {value && value.toString() === "91"
                                ? "Every 2 Weeks"
                                : value.toString() === "93"
                                    ? "Once a Week"
                                    : value.toString() === "94"
                                        ? "Every Day" : ""}
                        </div>
                    );
                },
            }
        },
        {
            name: 'ScheduleTime',
            label: 'scheduleTime',
        },
        {
            name: 'isDeleted',
            label: 'Action',
            options: {
                customBodyRender: (value, tableMeta) => {
                    return (
                        <div>
                            <Tooltip title="Edit">
                                <IconButton>
                                    <EditIcon
                                        color="info"
                                    />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete">
                                <IconButton>
                                    <DeleteIcon
                                        color="error"
                                    />
                                </IconButton>
                            </Tooltip>
                        </div>
                    );
                }
            },
        },
    ];
    return (
        <div>
            <Form>
                <Row>
                    <Col>
                        <Form.Label >Rules Name</Form.Label>
                        <Form.Control
                            name='description'
                            value={ruleData.description}
                            onChange={(e) => onChange(e)}
                            disabled={false}
                        />
                    </Col>

                    <Col >
                        <Form.Label> Events<span className="required">*</span> </Form.Label>
                        <Form.Select
                            name='event_Id'
                            value={ruleData.event_Id}
                            onChange={(e) => onChange(e)}
                            // as="select"
                            disabled={false}
                        >
                            <option value="">Select</option>
                            {Events.map((e) => (
                                <option key={e.id} value={e.id}>{e.name}</option>
                            ))}
                        </Form.Select >
                    </Col>
                    <Col>
                        <Form.Label >Entity</Form.Label>
                        <Form.Select
                            name='entity_Id'
                            value={ruleData.entity_Id}
                            onChange={(e) => onChange(e)}
                            // as="select"
                            disabled={false}
                        >
                            <option value="">Select</option>
                            {EntityArr.map((e) => (
                                <option key={e.id} value={e.id}>{e.value}</option>
                            ))}
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label>IsActive</Form.Label>
                        <Form.Check
                            id="isActive"
                            value={ruleData.isActive}
                            checked={ruleData.isActive}
                            onChange={(e) => onChange(e)}
                            type="checkbox"
                            autoComplete="nope"
                        />
                    </Col>
                </Row>
            </Form>
            <div>
                <TimeSch
                    show={show}
                    handleClose={handleClose}
                    handleShow={handleShow}
                    timeSch={timeSch}
                    onChangeTime={onChangeTime} />
            </div>

            <div>
                <Styles>
                    <MUIDataTable
                        data={ruleData.rulesSchedules}
                        columns={Timecol}
                        options={options}
                    />
                </Styles>
            </div>
            <Modal.Footer>
                <Button className='cancel_Btn' variant="secondary" onClick={handleCloses}>Cancel</Button>{"  "}
                <Button className='save_Btn' variant="primary" onClick={handleFormSubmit} >{Emode ? "Update" : "Save"}</Button>
            </Modal.Footer>
        </div >
    );
}

export default RuleForm;