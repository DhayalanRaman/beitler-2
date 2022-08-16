import React, { useState } from 'react';
import { Form, Row, Col } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddIcon from '@mui/icons-material/Add';
import MUIDataTable from "mui-datatables";
import { poolColumns, options } from '../../../Utils/Columns';
import { Styles } from '../../../CSS/TableStyle';
import { useSelector } from 'react-redux';
import { polln } from "../../../Utils/ini";

function PoolForm({ toPool }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let pool = useSelector(state => state.fetchPool.pools);

    const [formData, setFormdata] = useState(polln);
    const [data, setData] = useState("");


    const onChange = (e) => {
        const { value, name } = e.target;
        setFormdata({ ...formData, [name]: value })
    };

    function handleCloses() {
        setShow(false);
        setData(formData)
    }
    function sendPool() {
        toPool(formData);
    }
    return (
        <div>
            <div className='align_right'>
                <Button variant="standard" onClick={handleShow} className="addPop d-flex justify-content-end"><AddIcon />Add Pool Location</Button>
            </div>
            <Modal show={show} onHide={handleClose} size='xl'>
                <Modal.Header className='addTitle' closeButton>
                    <Modal.Title>Add Pool Location</Modal.Title>
                </Modal.Header>

                <Modal.Body id="content">
                    <Form>
                        <Row>
                            <Col>
                                <Form.Label className='input_label'>Pool Provider </Form.Label>
                                <Form.Select
                                    name='CurrentPoolProviderId'
                                    placeholder='Enter Address'
                                    onChange={(e) => onChange(e)}
                                >
                                    <option value={""} >--select-poollocation--</option>
                                    {pool.map((p) => (
                                        <option key={p.corporateoffice.id} value={p.corporateoffice.id}>{p.corporateoffice.LegalName}</option>
                                    ))}
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Label className='input_label'>Pool Location * </Form.Label>
                                <Form.Control
                                    name='poolLocationName'
                                    placeholder='Enter Pool Location'
                                    onChange={(e) => onChange(e)}
                                />
                            </Col>
                            <Col>
                                <Form.Label className='input_label'>Address </Form.Label>
                                <Form.Control
                                    name='Address1'
                                    placeholder='Enter Address1'
                                    onChange={(e) => onChange(e)}
                                />
                            </Col>
                            <Col>
                                <Form.Label className='input_label'> City</Form.Label>
                                <Form.Control
                                    name='City'
                                    placeholder='Enter City Name'
                                    onChange={(e) => onChange(e)}
                                />
                            </Col>
                            <Col>
                                <Form.Label className='input_label'>State</Form.Label>
                                <Form.Control
                                    name='State'
                                    placeholder='Enter State Name'
                                    onChange={(e) => onChange(e)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col item xs={4}>
                                <Form.Label className='input_label'>Zip Code *</Form.Label>
                                <Form.Control
                                    name='Zipcode'
                                    placeholder='Enter ZipCode'
                                    onChange={(e) => onChange(e)}
                                />
                            </Col>
                            <Col item xs={4}>
                                <Form.Label className='input_label'>ShipperRefName1</Form.Label>
                                <Form.Control
                                    name='shipperRefName1'
                                    placeholder='Enter ShipperRef Name1'
                                    onChange={(e) => onChange(e)}
                                />
                            </Col>
                            <Col item xs={4}>
                                <Form.Label className='input_label'>ShipperRefName2</Form.Label>
                                <Form.Control
                                    name='shipperRefName2'
                                    placeholder='ShipperRef Name2'
                                    onChange={(e) => onChange(e)}
                                />
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={handleClose}
                        className="cancel_Btn"
                        variant='contained'
                    >
                        Cancel
                    </Button>
                    <Button
                        className="save_Btn"
                        variant='contained'
                        onClick={() => { sendPool(); handleCloses() }}
                    >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
            <Styles>
                <MUIDataTable
                    data={[data]}
                    columns={poolColumns}
                    options={options}
                />
            </Styles>
        </div>
    );
}
export default PoolForm;