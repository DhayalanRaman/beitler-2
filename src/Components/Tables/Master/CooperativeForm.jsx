import React from 'react';
import { Form, Row, Col } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import MUIDataTable from "mui-datatables";
import { contactCol, options } from '../../../Utils/Columns';
import { Styles } from '../../../CSS/TableStyle';
import Contact from './Contacts';

const CusForm = ({ onCorpChange, onChangeCon, corp, corpCon }) => {
    return (
        <div>
            <Form>
                <Row>
                    <Col>
                        <Form.Label className='input_label'>Legal Name *</Form.Label>
                        <Form.Control
                            value={corp.LegalName || ""}
                            name='LegalName'
                            onChange={(e) => onCorpChange(e)}
                            placeholder='Enter Legal Name'

                        />
                    </Col>
                    <Col>
                        <Form.Label className='input_label'>Address(Street#,name)</Form.Label>
                        <Form.Control
                            name='Address1'
                            value={corp.Address1}
                            onChange={(e) => onCorpChange(e)}
                            placeholder='Enter address'
                        />
                    </Col>
                    <Col>
                        <Form.Label className='input_label'>Address BuildingFloor</Form.Label>
                        <Form.Control
                            name='Address2'
                            value={corp.Address2}
                            onChange={(e) => onCorpChange(e)}
                            placeholder='Enter Building Floor'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label className='input_label'> City *</Form.Label>
                        <Form.Control
                            name='City'
                            value={corp.City}
                            onChange={(e) => onCorpChange(e)}
                            placeholder='Enter City'
                        />
                    </Col>
                    <Col>
                        <Form.Label className='input_label'>State * </Form.Label>
                        <Form.Control
                            name='State'
                            value={corp.State}
                            onChange={(e) => onCorpChange(e)}
                            placeholder='Enter State'
                        />
                    </Col>
                    <Col>
                        <Form.Label className='input_label'> Zip Code*</Form.Label>
                        <Form.Control
                            name='Zipcode'
                            value={corp.Zipcode}
                            onChange={(e) => onCorpChange(e)}
                            placeholder='Enter Zip Code'
                        />
                    </Col>
                    <Col>
                        <Form.Label className='input_label'>Fax Number</Form.Label>
                        <Form.Control
                            name='Fax'
                            value={corp.Fax}
                            onChange={(e) => onCorpChange(e)}
                            placeholder='Enter Fax Number'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label className='input_label'> Phone Number</Form.Label>
                        <Form.Control
                            name='Phone'
                            value={corp.Phone}
                            onChange={(e) => onCorpChange(e)}
                            placeholder='Enter Building Floor'
                        />
                    </Col>
                    <Col>
                        <Form.Label className='input_label'>DBA name </Form.Label>
                        <Form.Control
                            name='dbaName'
                            value={corp.dbaName}
                            onChange={(e) => onCorpChange(e)}
                            placeholder='Enter DBA name'
                        />
                    </Col>
                    <Col>
                        <Form.Label className='input_label'> MC Number</Form.Label>
                        <Form.Control
                            name='MC_Number'
                            value={corp.MC_Number}
                            onChange={(e) => onCorpChange(e)}
                            placeholder='Enter MC Number'
                        />
                    </Col>
                    <Col>
                        <Form.Label className='input_label'> Federal_Tax_ID</Form.Label>
                        <Form.Control
                            name='Federal_Tax_ID'
                            value={corp.Federal_Tax_ID}
                            onChange={(e) => onCorpChange(e)}
                            placeholder='Enter Building Floor'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label className='input_label'> DOT_Number</Form.Label>
                        <Form.Control
                            name='DOT_Number'
                            value={corp.DOT_Number}
                            onChange={(e) => onCorpChange(e)}
                            placeholder='Enter Building Floor'
                        />
                    </Col>
                    <Col>
                        <Form.Label className='input_label'>DUNS_Number</Form.Label>
                        <Form.Control
                            name='DUNS_Number'
                            value={corp.DUNS_Number}
                            onChange={(e) => onCorpChange(e)}
                            placeholder='Enter DUNS_Number'
                        />
                    </Col>
                    <Col>
                        <Form.Label>IsActive(IsW9_YN)</Form.Label>
                        <Form.Check
                            id="IsW9_YN"
                            checked={corp.IsW9_YN}
                            value={corp.IsW9_YN}
                            onChange={(e) => onCorpChange(e)}
                            type="checkbox"
                            autoComplete="nope"
                        />
                    </Col>
                    <Col>
                        <Form.Label>Is EDI?</Form.Label>
                        <Form.Check
                            id="IsEdi"
                            checked={corp.IsEdi}
                            value={corp.IsEdi}
                            onChange={(e) => onCorpChange(e)}
                            type="checkbox"
                            autoComplete="nope"
                        />
                    </Col>
                    <Col>
                        <Form.Label>Is Active</Form.Label>
                        <Form.Check
                            id="IsActive"
                            checked={corp.IsActive}
                            value={corp.IsActive}
                            onChange={(e) => onCorpChange(e)}
                            type="checkbox"
                            autoComplete="nope"
                        />
                    </Col>
                </Row>
                <FloatingLabel label="Comments">
                    <Form.Control
                        name='Comments'
                        value={corp.Comments}
                        onChange={(e) => onCorpChange(e)}
                        as="textarea"
                        className='text_area'

                    />
                </FloatingLabel>
            </Form>
            <div className='align_right'>
                <Contact onChangeCon={onChangeCon} corpCon={corpCon} />
            </div>
            <div>
                <Styles>
                    <MUIDataTable
                        data={[corpCon]}
                        columns={contactCol}
                        options={options}
                    />
                </Styles>
            </div>
        </div>
    )
}

export default CusForm;

