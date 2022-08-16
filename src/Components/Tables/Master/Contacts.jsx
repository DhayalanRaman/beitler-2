import React, { useState } from 'react';
import { Form, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import AddIcon from '@mui/icons-material/Add';
import Modal from 'react-bootstrap/Modal';


function Contact({ onChangeCon, corpCon }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const type = [
        { id: 10, value: "Account/Sales Rep" },
        { id: 8, value: "Additional Contact" },
        { id: 9, value: "Executive Level" },
        { id: 12, value: "Operations" },
        { id: 13, value: "Other" },
        { id: 11, value: "Terminal" },
        { id: 7, value: "Secondary Contact" },
        { id: 6, value: "Primary Contact" },
    ];
    const depart = [
        { id: 13, value: "TLS Lane awarded" },
        { id: 14, value: "PoolLocations" },
        { id: 15, value: "Accounts Payable/receivables" },
    ]

    return (
        <div>
            <Button variant="standard" onClick={handleShow} className="addPop d-flex justify-content-end"><AddIcon />Add</Button>
            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header className='addTitle' closeButton>
                    <Modal.Title>Add Contact Information</Modal.Title>
                </Modal.Header>               
                <Modal.Body>
                    <Form >
                        <Row>
                            <Col>
                                <Form.Label> Type <span className="required">*</span> </Form.Label>
                                <Form.Select
                                    name="Type"
                                    as="select"
                                    value={corpCon.Type}
                                    onChange={(e) => onChangeCon(e)}
                                    disabled={false}  >
                                    {type.map((t) => (
                                        <option key={t.id}
                                            value={t.id}>{t.value}</option>

                                    ))}
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Label > Department </Form.Label>
                                <Form.Select
                                    as="select"
                                    name="Department_Id"
                                    value={corpCon.Department_Id}
                                    onChange={(e) => onChangeCon(e)}
                                    disabled={false}
                                >
                                    {depart.map((depar) => (
                                        <option key={depar.id}
                                            value={depar.id}>{depar.value}</option>
                                    ))}
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Label > Name<span className="required">*</span> </Form.Label>
                                <Form.Control
                                    name="Name"
                                    value={corpCon.Name}
                                    onChange={(e) => onChangeCon(e)}
                                    disabled={false}
                                    placeholder="Enter Name"
                                />
                            </Col>
                            <Col>
                                <Form.Label > Title<span className="required">*</span> </Form.Label>
                                <Form.Select
                                    as="select"
                                    name="Title"
                                    value={corpCon.Title}
                                    onChange={(e) => onChangeCon(e)}
                                    disabled={false}
                                >
                                    <option value={1}>Mr</option>
                                    <option value={2} >Mrs</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label >Corporate office Ext </Form.Label>
                                <Form.Control
                                    name="Extension"
                                    type='number'
                                    value={corpCon.Extension}
                                    placeholder="ext"
                                    onChange={(e) => onChangeCon(e)}
                                    disabled={false}
                                />
                            </Col>
                            <Col>
                                <Form.Label > Phone </Form.Label>
                                <Form.Control
                                    name="Phone"
                                    value={corpCon.Phone}
                                    onChange={(e) => onChangeCon(e)}
                                    placeholder="Enter Phone"
                                    disabled={false}
                                />
                            </Col>
                            <Col>
                                <Form.Label > Mobile </Form.Label>
                                <Form.Control
                                    name="Mobile"
                                    value={corpCon.Mobile}
                                    placeholder='Enter Mobile'
                                    onChange={(e) => onChangeCon(e)}
                                    disabled={false}
                                />
                            </Col>
                            <Col>
                                <Form.Label > Email </Form.Label>
                                <Form.Control
                                    name="Email"
                                    value={corpCon.Email}
                                    placeholder='Enter Email'
                                    onChange={(e) => onChangeCon(e)}
                                    disabled={false}
                                />
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>                    
                    <Button
                        onClick={handleClose}
                        className="save_Btn"  
                        varient="primary"                    
                    >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}
export default Contact;
