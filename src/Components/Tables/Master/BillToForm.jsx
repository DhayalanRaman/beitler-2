import React from 'react';
import { Form, Row, Col } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const BillToForm = ({ onChange, billData }) => {
    return (
        <div>
            <Form>
                <Row>
                    <Col>
                        <Form.Label> Contact name *</Form.Label>
                        <Form.Control
                            name='ContactName'
                            value={billData.ContactName}
                            onChange={(e) => onChange(e)}
                            placeholder='Enter Contact name'                    
                        />
                    </Col>
                    <Col>
                        <Form.Label>Address(Street#,name) </Form.Label>
                        <Form.Control
                            name='Address1'
                            value={billData.Address1}
                            onChange={(e) => onChange(e)}
                            placeholder='Enter Address'                       
                        />
                    </Col>
                    <Col>
                        <Form.Label>Address BuildingFloor </Form.Label>
                        <Form.Control
                            name='Address2'
                            value={billData.Address2}
                            onChange={(e) => onChange(e)}
                            placeholder='Enter bilding floor'         
                        />
                    </Col>
                    <Col>
                        <Form.Label> City</Form.Label>
                        <Form.Control
                            name='City'
                            value={billData.City}
                            onChange={(e) => onChange(e)}
                            placeholder='Enter City'                      
                        />
                    </Col>
                    <Col>
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            name='State'
                            value={billData.State}
                            onChange={(e) => onChange(e)}
                            placeholder='Enter State'                           
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Zip Code *</Form.Label>
                        <Form.Control
                            name='Zipcode'
                            value={billData.Zipcode}
                            onChange={(e) => onChange(e)}
                            placeholder='Enter Zip Code'                         
                        />
                    </Col>
                    <Col>
                        <Form.Label> Phone Number</Form.Label>
                        <Form.Control
                            name='Phone'
                            value={billData.Phone || ""}
                            onChange={(e) => onChange(e)}
                            placeholder='Enter Building Floor'                    
                        />
                    </Col>

                    <Col>
                        <Form.Label> Contact Email *</Form.Label>
                        <Form.Control
                            name='ContactEmail'
                            value={billData.ContactEmail || ""}
                            onChange={(e) => onChange(e)}
                            placeholder='Enter Contact Email '                           
                        />
                    </Col>
                    <Col>
                        <Form.Label>Contact Phone *</Form.Label>
                        <Form.Control
                            name='ContactPhone'
                            value={billData.ContactPhone || ""}
                            onChange={(e) => onChange(e)}
                            placeholder='Enter Contact Phone *'                           
                        />
                    </Col>
                    <Col>
                        <Form.Label>Fax Number</Form.Label>
                        <Form.Control
                            name="Fax"
                            value={billData.Fax}
                            onChange={(e) => onChange(e)}
                            placeholder='Enter Fax Number'                            
                        />
                    </Col>
                </Row>
                <Form.Label> Terms</Form.Label>
                <Form.Control
                    name='Terms'
                    value={billData.Terms}
                    onChange={(e) => onChange(e)}
                    placeholder='Enter Terms'                 
                />
                <FloatingLabel label="Comments">
                <Form.Control
                    name='Comments'
                    value={billData.Comments}
                    onChange={(e) => onChange(e)}
                    as="textarea"
                    placeholder='comments'                    
                    className='text_area'
                />
                </FloatingLabel>
            </Form>
        </div>
    )
}

export default BillToForm;