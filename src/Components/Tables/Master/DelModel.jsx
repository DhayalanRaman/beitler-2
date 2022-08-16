import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { getCustomerStart, updateCustomerStart } from '../../../Actions/customerAction';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";

export default function DeleteModel({ handleDelId }) {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const customer = useSelector(state => state.fetchCustomer.customer);
    const doDelete = (e) => {
        const DelData = customer.find((e) => e.corporateoffice.id === handleDelId);
        if (Object.keys(DelData).length > 0) {
            const CoopObj = {
                DOT_Number: DelData.corporateoffice.DOT_Number,
                Comments: DelData.corporateoffice.Comments,
                DUNS_Number: DelData.corporateoffice.DUNS_Number,
                Entity_Type_Id: 1,
                Federal_Tax_ID: DelData.corporateoffice.Federal_Tax_ID,
                IsActive: true,
                IsCarrier: false,
                IsDeleted: true,
                IsEdi: true,
                IsEntityAdmin: false,
                IsW9_YN: true,
                LegalName: DelData.corporateoffice.LegalName,
                MC_Number: DelData.corporateoffice.MC_Number,
                SCAC: "",
                Type: "",
                Id: DelData.corporateoffice.id,
                dbaName: DelData.corporateoffice.dbaName,
                Address_Id: {
                    Id: DelData.corporateoffice.Address_Id[0].Id,
                    Address1: DelData.corporateoffice.Address_Id[0].Address1,
                    Address2: DelData.corporateoffice.Address_Id[0].Address2,
                    City: DelData.corporateoffice.Address_Id[0].City,
                    Fax: DelData.corporateoffice.Address_Id[0].Fax,
                    IsActive: false,
                    Phone: DelData.corporateoffice.Address_Id[0].Phone,
                    State: DelData.corporateoffice.Address_Id[0].State,
                    Type: 14,
                    Zipcode: DelData.corporateoffice.Address_Id[0].Zipcode,
                    IsDeleted: true,
                },
                Contacts: [{
                    Department_Id: DelData.corporateoffice.contacts[0].Department_Id,
                    Email: DelData.corporateoffice.contacts[0].Email,
                    Entity_Type: 1,
                    Extension: DelData.corporateoffice.contacts[0].Extension,
                    IsActive: false,
                    IsSendInviteEmail: false,
                    Mobile: DelData.corporateoffice.contacts[0].Mobile,
                    Name: DelData.corporateoffice.contacts[0].Name,
                    Phone: DelData.corporateoffice.contacts[0].Phone,
                    Title: DelData.corporateoffice.contacts[0].Title,
                    Type: DelData.corporateoffice.contacts[0].Type
                }]
            };
            const billObj = {
                Bill_Address_Id: {
                    Address1: DelData.corporateoffice.BillTo[0].Address_Id[0].Address1,
                    Address2: DelData.corporateoffice.BillTo[0].Address_Id[0].Address2,
                    City: DelData.corporateoffice.BillTo[0].Address_Id[0].City,
                    Fax: DelData.corporateoffice.BillTo[0].Address_Id[0].Fax,
                    IsActive: false,
                    IsDeleted: true,
                    Phone: DelData.corporateoffice.BillTo[0].Address_Id[0].Phone,
                    State: DelData.corporateoffice.BillTo[0].Address_Id[0].State,
                    Type: 16,
                    Zipcode: DelData.Zipcode,
                },
                Comments: DelData.corporateoffice.BillTo[0].Comments,
                ContactEmail: DelData.corporateoffice.BillTo[0].ContactEmail,
                ContactName: DelData.corporateoffice.BillTo[0].ContactName,
                ContactPhone: DelData.corporateoffice.BillTo[0].ContactPhone,
                IsActive: false,
                Phone: DelData.corporateoffice.BillTo[0].Phone,
                Terms: DelData.corporateoffice.BillTo[0].Terms,
                Type: 19,
                IsDeleted: true,
            };
            const massDelete = {
                CorporateOffice: CoopObj,
                BillTo: billObj,
                DCInfo: [],
                poolLocation: [],
            };
            dispatch(updateCustomerStart(massDelete));
            toast.success("customer Deleted Success ");
            setTimeout(() => dispatch(getCustomerStart()), 2000);
            console.log(massDelete)
        };
    };

    return (
        <div>
            <DeleteIcon color='error' onClick={handleShow} />
            <Modal show={show} onHide={handleClose} centered size='md'>
                <Modal.Header className='addTitle' closeButton>
                    <Modal.Title>Are You Want To Delete</Modal.Title>
                </Modal.Header>
                {/* <Modal.Body>
                    {""}
                </Modal.Body> */}
                <Modal.Footer>
                    <Form>
                        <Button
                            onClick={handleClose}
                            className="cancel_Btn"
                            variant='contained'
                        >
                            No
                        </Button>
                        <Button
                            // type="submit"
                            onClick={doDelete}
                            variant='contained'
                            className="save_Btn"
                        >
                            Yes
                        </Button>
                    </Form>
                </Modal.Footer>
            </Modal>
        </div >
    );
}
