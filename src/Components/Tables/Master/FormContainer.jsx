import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import CooperativeForm from './CooperativeForm';
import BillToForm from './BillToForm';
import PoolForm from './PoolForm';
import DcInfoForm from './DcInfoForm';
import { getCustomerStart, createCustomerStart, updateCustomerStart } from '../../../Actions/customerAction';
import { toast } from "react-toastify";
import { contact, coOP, billTo, DcInfo } from "../../../Utils/ini";

export default function FormContainer({ onhandleCome, edit, mode }) {
    const dispatch = useDispatch();
    const [pool, setPool] = useState("");
    const [billData, setBillData] = useState(billTo);
    const [corp, setCorp] = useState(coOP);
    const [corpCon, setCorpCon] = useState(contact);
    const [dc, setDc] = useState(DcInfo);
    // const [table, setTable] = useState(false);

    const onChangeCon = (e) => {
        const { value, name } = e.target;
        setCorpCon({ ...corpCon, [name]: value })
    };
    const onChange = (e) => {
        const { value, name } = e.target;
        setBillData({ ...billData, [name]: value });
    };
    const onCorpChange = (e) => {
        const { value, name, id, checked } = e.target;
        setCorp({ ...corp, [name]: value, [id]: checked })
    };
    const onChangeDc = (e) => {
        const { value, name } = e.target;
        setDc({ ...dc, [name]: value });
    };

    const toPool = (d) => {
        setPool(d)
    };

    useEffect(() => {
        if (mode && Object.keys(edit).length > 0) {
            // const C = edit.corporateoffice;
            const corp = {
                id: edit.corporateoffice ? edit.corporateoffice.id : "",
                LegalName: edit.corporateoffice ? edit.corporateoffice.LegalName : "",
                DOT_Number: edit.corporateoffice ? edit.corporateoffice.DOT_Number : "",
                DUNS_Number: edit.corporateoffice ? edit.corporateoffice.DUNS_Number : "",
                MC_Number: edit.corporateoffice ? edit.corporateoffice.MC_Number : "",
                Federal_Tax_ID: edit.corporateoffice ? edit.corporateoffice.Federal_Tax_ID : "",
                dbaName: edit.corporateoffice ? edit.corporateoffice.dbaName : "",
                Comments: edit.corporateoffice ? edit.corporateoffice.Comments : "",
                IsEdi: edit.corporateoffice ? Boolean(Number(edit.corporateoffice.IsEdi)) : "",
                IsW9_YN: edit.corporateoffice ? Boolean(Number(edit.corporateoffice.IsW9_YN)) : "",
                IsActive: edit.corporateoffice ? Boolean(Number(edit.corporateoffice.IsActive)) : "",
                Id: edit.corporateoffice ? edit.corporateoffice.Address_Id[0].Id : "",
                Address1: edit.corporateoffice ? edit.corporateoffice.Address_Id[0].Address1 : "",
                Address2: edit.corporateoffice ? edit.corporateoffice.Address_Id[0].Address2 : "",
                City: edit.corporateoffice ? edit.corporateoffice.Address_Id[0].City : "",
                Phone: edit.corporateoffice ? edit.corporateoffice.Address_Id[0].Phone : "",
                State: edit.corporateoffice ? edit.corporateoffice.Address_Id[0].State : "",
                Type: edit.corporateoffice ? edit.corporateoffice.Address_Id[0].Type : "",
                Zipcode: edit.corporateoffice ? edit.corporateoffice.Address_Id[0].Zipcode : "",
                Fax: edit.corporateoffice ? edit.corporateoffice.Address_Id[0].Fax : "",
            };       
            const corpCon = {
                Name: edit.corporateoffice.contacts ? edit.corporateoffice.contacts[0].Name : "",
                Type: edit.corporateoffice.contacts ? edit.corporateoffice.contacts[0].Type : "",
                Email: edit.corporateoffice.contacts ? edit.corporateoffice.contacts[0].Email : "",
                Phone: edit.corporateoffice.contacts ? edit.corporateoffice.contacts[0].Phone : "",
                Title: edit.corporateoffice.contacts ? edit.corporateoffice.contacts[0].Title : "",
                Mobile: edit.corporateoffice.contacts ? edit.corporateoffice.contacts[0].Mobile : "",
                IsActive: edit.corporateoffice.contacts ? edit.corporateoffice.contacts[0].IsActive : "",
                Entity_Id: 2141,
                Extension: edit.corporateoffice.contacts ? edit.corporateoffice.contacts[0].Extension : "",
                IsDeleted: false,
                Entity_Type: edit.corporateoffice.contacts ? edit.corporateoffice.contacts[0].Entity_Type : "",
                Department_Id: edit.corporateoffice.contacts ? edit.corporateoffice.contacts[0].Department_Id : "",
                IsSendInviteEmail: "false"
            }
            const Bill = {
                ContactEmail: edit.corporateoffice.BillTo ? edit.corporateoffice.BillTo[0].ContactEmail : "",
                ContactName: edit.corporateoffice.BillTo ? edit.corporateoffice.BillTo[0].ContactName : "",
                ContactPhone: edit.corporateoffice.BillTo ? edit.corporateoffice.BillTo[0].ContactPhone : "",
                Comments: edit.corporateoffice.BillTo ? edit.corporateoffice.BillTo[0].Comments : "",
                Terms: edit.corporateoffice.BillTo ? edit.corporateoffice.BillTo[0].Terms : "",
                Address1: edit.corporateoffice.BillTo ? edit.corporateoffice.BillTo[0].Address_Id[0].Address1 : "",
                Address2: edit.corporateoffice.BillTo ? edit.corporateoffice.BillTo[0].Address_Id[0].Address2 : "",
                City: edit.corporateoffice.BillTo ? edit.corporateoffice.BillTo[0].Address_Id[0].City : "",
                State: edit.corporateoffice.BillTo ? edit.corporateoffice.BillTo[0].Address_Id[0].State : "",
                Phone: edit.corporateoffice.BillTo ? edit.corporateoffice.BillTo[0].Address_Id[0].Phone : "",
                Zipcode: edit.corporateoffice.BillTo ? edit.corporateoffice.BillTo[0].Address_Id[0].Zipcode : "",
                Fax: edit.corporateoffice.BillTo ? edit.corporateoffice.BillTo[0].Address_Id[0].Fax : "",
            };
            setCorp(corp);
            setBillData(Bill);
            setCorpCon(corpCon);
            setPool([]);
        }
    }, [mode, edit])

    const condi = ((Object.keys(corp).length && Object.keys(billData).length && Object.keys(corpCon).length) > 0)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (condi) {

            const CoopObj = {
                DOT_Number: corp.DOT_Number,
                Comments: corp.Comments,
                DUNS_Number: corp.DUNS_Number,
                Entity_Type_Id: 1,
                Federal_Tax_ID: corp.Fax,
                IsActive: corp.IsActive,
                IsCarrier: false,
                IsDeleted: false,
                IsEdi: corp.IsEdi,
                IsEntityAdmin: false,
                IsW9_YN: corp.IsW9_YN,
                LegalName: corp.LegalName,
                MC_Number: corp.MC_Number,
                SCAC: "",
                Type: "",
                Id: corp.id,
                dbaName: corp.dbaName,
                Address_Id: {
                    Id: corp.Id,
                    Address1: corp.Address1,
                    Address2: corp.Address2,
                    City: corp.City,
                    Fax: corp.Fax,
                    IsActive: false,
                    Phone: corp.Phone,
                    State: corp.State,
                    Type: 14,
                    Zipcode: corp.Zipcode,
                },
                Contacts: [{
                    Department_Id: corpCon.Department_Id,
                    Email: corpCon.Email,
                    Entity_Type: 1,
                    Extension: corpCon.Extension,
                    IsActive: false,
                    IsSendInviteEmail: false,
                    Mobile: corpCon.Mobile,
                    Name: corpCon.Name,
                    Phone: corpCon.Phone,
                    Title: corpCon.Title,
                    Type: corpCon.Type
                }]
            };
            const billObj = {
                Bill_Address_Id: {
                    Address1: billData.Address1,
                    Address2: billData.Address2,
                    City: billData.City,
                    Fax: billData.Fax,
                    IsActive: false,
                    Phone: billData.Phone,
                    State: billData.State,
                    Type: 16,
                    Zipcode: billData.Zipcode,
                },
                Comments: billData.Comments,
                ContactEmail: billData.ContactEmail,
                ContactName: billData.ContactName,
                ContactPhone: billData.ContactPhone,
                IsActive: false,
                Phone: billData.Phone,
                Terms: billData.Terms,
                Type: 19,
            };
            const poolObj = {
                City: pool.City,
                Address1: pool.Address1,
                CurrentPoolProviderId: pool.CurrentPoolProviderId,
                CustomerId: 0,
                CustomerPoolStores: [],
                Id: 0,
                IsActive: true,
                IsDeleted: false,
                State: pool.State,
                Zipcode: pool.Zipcode,
                address: [{ Id: 0, Address1: pool.Address1, City: pool.City, State: pool.State, Zipcode: pool.Zipcode, IsActive: true, IsDeleted: false }],
                address_id: 0,
                poolDuration: [],
                poolLocationName: pool.poolLocationName,
                shipperRefName2: pool.shipperRefName2,
            };
            const DcObj = {
                Fax: dc.Fax,
                Ref1: null,
                Ref2: null,
                Phone: dc.Phone,
                Comments: dc.Comments,
                IsActive: false,
                Entity_Id: 2141,
                IsDeleted: false,
                Contacts: [],
                DC_Address_Id: {
                    Fax: dc.Fax,
                    City: dc.City,
                    Type: 15,
                    Phone: dc.Phone,
                    State: dc.State,
                    Zipcode: dc.Zipcode,
                    Address1: dc.Address1,
                    Address2: dc.Address2,
                    IsActive: false,
                    IsDeleted: false
                },
                Directions: dc.Directions,
                FreightDesc: dc.FreightDesc,
                GroupNumber: dc.GroupNumber,
                LocationNumber: dc.LocationNumber
            };
            const postData = {
                CorporateOffice: CoopObj,
                BillTo: billObj,
                DCInfo: [DcObj],
                poolLocation: [poolObj],
            };
            const updateData = {
                CorporateOffice: CoopObj,
                BillTo: billObj,
                DCInfo: [],
                poolLocation: [],
            };
            if (mode) {
                setTimeout(() => dispatch(updateCustomerStart(updateData)), 100);
                toast.success("Customer updated successfully");
            } else {
                setTimeout(() => dispatch(createCustomerStart(postData)), 100);
                toast.success("Customer added successfully");
            };
            setTimeout(() => dispatch(getCustomerStart()), 2000)
            onhandleCome();
        };
    };
    return (
        <div>
            <Accordion defaultActiveKey="0" >
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='cus_accord_header'>Corporate Office</Accordion.Header>
                    <Accordion.Body>
                        <CooperativeForm onCorpChange={onCorpChange} onChangeCon={onChangeCon} corp={corp} corpCon={corpCon} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header >Pool Location</Accordion.Header>
                    <Accordion.Body>
                        <PoolForm toPool={toPool} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>BillTo</Accordion.Header>
                    <Accordion.Body>
                    <BillToForm onChange={onChange} billData={billData} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Distribution Center Information</Accordion.Header>
                    <Accordion.Body>
                    <DcInfoForm onChangeDc={onChangeDc} dc={dc} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Modal.Footer>
                <form>
                    <Button
                        className="cancel_Btn"
                        variant='contained'
                        onClick={onhandleCome}
                    >
                        Cancel
                    </Button>
                    <Button
                        className="save_Btn"
                        variant='contained'
                        onClick={handleSubmit}
                    >
                        {mode ? "Update" : "Save"}
                    </Button>
                </form>
            </Modal.Footer>
        </div>
    );
}
