import * as React from 'react';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import MUIDataTable from "mui-datatables";
import { contactCol, DcCol, options } from '../../../Utils/Columns';
import { Styles } from '../../../CSS/TableStyle';
import { Form, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function DcInfoForm({ onChangeDc, dc }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div>
                <div className='align_right'>
                    <Button variant="standard" className="addPop" onClick={handleShow}><AddIcon className='addicon' />Add DC</Button>
                </div>
                <Modal show={show} onHide={handleClose} id="Add_modal_dc" size='xl'>
                    <Modal.Header className='addTitle' closeButton>
                        <Modal.Title>Distributed Center Info</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Label > Address(Street#,name)</Form.Label>
                                    <Form.Control
                                        name="Address1"
                                        value={dc.Address1}
                                        onChange={(e) => onChangeDc(e)}
                                        disabled={false}
                                        placeholder='Enter address'
                                    />
                                </Col>
                                <Col>
                                    <Form.Label >Address BuildingFloor</Form.Label>
                                    <Form.Control
                                        name='Address2'
                                        value={dc.Address2}
                                        onChange={(e) => onChangeDc(e)}
                                        disabled={false}
                                        placeholder='Enter Building Floor'
                                    />
                                </Col>
                                <Col>
                                    <Form.Label >City</Form.Label>
                                    <Form.Control
                                        name="City"
                                        value={dc.City}
                                        onChange={(e) => onChangeDc(e)}
                                        placeholder='Enter City Name'
                                        disabled={false}
                                    />
                                </Col>
                                <Col>
                                    <Form.Label >State</Form.Label>
                                    <Form.Control
                                        name='State'
                                        value={dc.State}
                                        onChange={(e) => onChangeDc(e)}
                                        placeholder='Enter State Name'
                                        disabled={false}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Label >Zip Code <span className="required">*</span></Form.Label>
                                    <Form.Control
                                        name='Zipcode'
                                        value={dc.Zipcode}
                                        onChange={(e) => onChangeDc(e)}
                                        placeholder='Enter ZipCode '
                                        disabled={false}
                                    />
                                </Col>
                                <Col>
                                    <Form.Label >Fax Number</Form.Label>
                                    <Form.Control
                                        value={dc.Fax}
                                        name='Fax'
                                        onChange={(e) => onChangeDc(e)}
                                        placeholder='Enter Fax Number'
                                        disabled={false}
                                    />
                                </Col>
                                <Col>
                                    <Form.Label >Phone Number</Form.Label>
                                    <Form.Control
                                        value={dc.Phone}
                                        onChange={(e) => onChangeDc(e)}
                                        name='Phone'
                                        placeholder='Enter Phone Number'
                                        disabled={false}
                                    />
                                </Col>
                                <Col>
                                    <Form.Label >Freight Description</Form.Label>
                                    <Form.Control
                                        value={dc.FreightDesc}
                                        onChange={(e) => onChangeDc(e)}
                                        name='FreightDesc'
                                        placeholder='Freight Description'
                                        disabled={false}
                                    />
                                </Col>
                                <Col>
                                    <Form.Label >Location Number</Form.Label>
                                    <Form.Control
                                        name='LocationNumber'
                                        value={dc.LocationNumber}
                                        onChange={(e) => onChangeDc(e)}
                                        placeholder='Location Number'
                                    />
                                </Col>
                                <Col>
                                    <Form.Label >DC Number</Form.Label>
                                    <Form.Control
                                        name='GroupNumber'
                                        value={dc.GroupNumber}
                                        onChange={(e) => onChangeDc(e)}
                                        placeholder='Location Number'
                                        disabled={false}
                                    />
                                </Col>
                                <Col>
                                    <Form.Label >Mobile<span className="required">*</span></Form.Label>
                                    <Form.Control
                                        value={dc.Mobile}
                                        name='Mobile'
                                        onChange={(e) => onChangeDc(e)}
                                        placeholder='Location Number'
                                        disabled={false}
                                    />
                                </Col>
                            </Row>
                            {""}

                            <FloatingLabel label="Comments">
                                <Form.Control
                                    name='Comments'
                                    value={dc.Comments}
                                    onChange={(e) => onChangeDc(e)}
                                    as="textarea"
                                    className='text_area'
                                    placeholder='comments'
                                    disabled={false}
                                />
                            </FloatingLabel>

                            {""}

                            <FloatingLabel label="Directions">
                                <Form.Control
                                    name='Directions'
                                    value={dc.Directions}
                                    onChange={(e) => onChangeDc(e)}
                                    as="textarea"
                                    className='text_area'
                                    disabled={false}
                                />
                            </FloatingLabel>

                        </Form>
                        <Styles>
                            <MUIDataTable
                                data={[]}
                                columns={contactCol}
                                options={options}
                            />
                        </Styles>
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
                            onClick={handleClose}
                            className="save_Btn"
                            variant='contained'
                        >
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div>
                <Styles>
                    <MUIDataTable
                        data={[dc]}
                        columns={DcCol}
                        options={options}
                    />
                </Styles>
            </div>
        </>
    );
}
export default DcInfoForm;
