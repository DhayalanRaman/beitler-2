import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerStart } from '../../../Actions/customerAction';
import { getPoolProviderStart } from '../../../Actions/poolActions';
import MUIDataTable from "mui-datatables";
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import { Styles } from '../../../CSS/TableStyle';
import { options } from '../LookUp/LookupCol';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from 'react-bootstrap/Button';
import AddIcon from '@mui/icons-material/Add';
import FormContainer from './FormContainer';
import DeleteModel from "./DelModel";

const Customer = () => {
    const dispatch = useDispatch();
    const [add, setAdd] = useState(false);
    const [id, setId] = useState(0);
    const [edit, setEdit] = useState("");
    const [mode, setMode] = useState(false)
    const onhandleCLick = () => {
        setAdd(true);
        setMode(false);
    }
    // console.log(mode);
    const onhandleCome = () => {
        setAdd(false);
    }
    useEffect(() => {
        dispatch(getCustomerStart());
        dispatch(getPoolProviderStart());
    }, [dispatch]);

    let customer = useSelector(state => state.fetchCustomer.customer);
    const loading = useSelector(state => state.fetchCustomer.loading);

    if (loading) {
        return (
            <CircularProgress style={{ marginTop: "250px", marginLeft: "550px" }} role="status">
                <span className="visually-hidden">Loading...</span>
            </CircularProgress>
        );
    };

    const customerAttributes = []
    customer.forEach(cl => {
        customerAttributes.push({
            LegalName: cl.corporateoffice.LegalName,
            MC_Number: cl.corporateoffice.MC_Number,
            Federal_Tax_ID: cl.corporateoffice.Federal_Tax_ID,
            DOT_Number: cl.corporateoffice.DOT_Number,
            City: cl.corporateoffice.Address_Id ? cl.corporateoffice.Address_Id[0].City : null,
            Zipcode: cl.corporateoffice.Address_Id ? cl.corporateoffice.Address_Id[0].Zipcode : null,
            Phone: cl.corporateoffice.Address_Id ? cl.corporateoffice.Address_Id[0].Phone : null,
            id: cl.corporateoffice.id,
        })
    });

    const handleUpdate = (Id) => {
        const Edit = customer.find((e) => e.corporateoffice.id === Id);
        setAdd(true);
        setEdit(Edit);
        setMode(true);
    }
    const hadleDelete = (Id) => {
        setId(Id);
    }
    // const doDelete = (Id) => {
    //     console.log(Id)
    //     const DelData = customer.find((e) => e.corporateoffice.id === Id);
    //     // DelData.corporateoffice.IsDeleted = !!+DelData.corporateoffice.IsDeleted;
    //     console.log(DelData)
    //     if (Object.keys(DelData).length > 0) {
    //         console.log(Object.keys(DelData).length > 0);
    //         const confirm = window.confirm("Are you sure, you want to Delete this Template row ?");
    //         DelData.corporateoffice.IsDeleted = true;
    //         // DelData.corporateoffice.BillTo[0].IsDeleted = 1;
    //         // DelData.corporateoffice.DCInfo[0].IsDeleted = 1;            
    //         // DelData.corporateoffice.PoolLocation[0].IsDeleted = 1;
    //         DelData.corporateoffice.IsEdi = false;
    //         DelData.corporateoffice.IsW9_YN = false;
    //         DelData.corporateoffice.IsActive = false;

    //         // const masDel = {

    //         // }

    //         if (confirm) {
    //             dispatch(updateCustomerStart(DelData));
    //             toast.success("customer Delete Success ");
    //             setTimeout(() => dispatch(getCustomerStart()), 2000);
    //         }
    //     }
    // };
    const columns = [
        {
            name: 'LegalName',
            label: 'LegalName',
        },
        {
            name: 'MC_Number',
            label: 'MC#',
        },
        {
            name: 'Federal_Tax_ID',
            label: 'Fed_Tax_ID',
        },
        {
            name: 'DOT_Number',
            label: 'DOT_Number',
        },
        {
            name: 'City',
            label: 'City',
        },
        {
            name: 'Zipcode',
            label: 'Zipcode',
        },
        {
            name: 'Phone',
            label: 'Phone',
        },
        {
            name: "id",
            label: 'Actions',
            options: {
                customBodyRender: (value, tableMeta) => {
                    return (
                        <div className='flex-sm-column justify-content-center'>
                            <Tooltip title="Edit">
                                <IconButton onClick={() => handleUpdate(value)}>
                                    <EditIcon color='info' />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete">
                                <IconButton onClick={() => hadleDelete(value)}>
                                    <DeleteModel handleDelId={id} />
                                </IconButton>
                            </Tooltip>
                        </div>
                    );
                }
            },
        },
    ];

    return (
        <>
            <Paper>
                <p className='tab_head'>Customers Listing</p>
                {add ?
                    (<FormContainer onhandleCome={onhandleCome} edit={edit} mode={mode} />) :
                    (<>

                        <div className="align_right">
                            <Button variant="standard" className="addPop" color="primary" onClick={onhandleCLick}>
                                <AddIcon className='addicon' />Add Customer
                            </Button>
                        </div>
                        <Styles>
                            <MUIDataTable
                                data={customerAttributes}
                                columns={columns}
                                options={options}
                            />
                        </Styles>
                    </>)
                }
            </Paper>

        </>
    )
}

export default Customer;