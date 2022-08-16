import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import { getRuleStart, updateRuleStart } from '../../../Actions/ruleAction';
import { getLookupStart } from '../../../Actions/lookupAction';
import { Styles } from '../../../CSS/TableStyle';
import { options } from "../../../Utils/teplateColumns";
import MUIDataTable from "mui-datatables";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { toast } from "react-toastify";
import Button from 'react-bootstrap/Button';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import RuleForm from './RuleForm';

const Rule = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRuleStart());
        dispatch(getLookupStart());
    }, [dispatch])
    const Events = useSelector(state => state.fetchEvents.events);
    const rules = useSelector(state => state.fetchRule.rules);
    // const loading = useSelector(state => state.fetchTemplate.loading);
    const entitys = useSelector(state => state.fetchLookup.lookup);
    const [tableData, setTableData] = useState(rules);
    const [open, setOpen] = useState(false);
    const [Emode, setEmode] = useState(false);
    const [Edata, setEdata] = useState("");

    useEffect(() => {
        if (rules && rules.length > 0) {
            const temp = [];
            rules.filter((f) => f.isDeleted !== true).map((v) => {
                const entity = entitys && entitys.find((h) => h.id === v.entity_Id)
                const event = Events && Events.find((h) => h.id === v.event_Id);
                Object.assign(v, { entityName: entity ? entity.displayText : '', eventName: event ? event.name : '' });
                // temp.push(v)   
                return temp.push(v)
            })
            setTableData(temp);
        }
    }, [rules, Events, entitys]);


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleUpdate = (Id) => {
        const ruleData = tableData.find((e) => e.id === Id);
        setEmode(true);
        setEdata(ruleData)
        handleClickOpen();
    };
    const handleCloses = () => {
        setOpen(false);
        setEmode(false);
    };

    const handleDelete = (Id) => {
        const ruleDel = tableData.find((e) => e.id === Id);
        // const da = eventData.isDeleted;   
        if (Object.keys(ruleDel).length > 0) {
            const confirm = window.confirm("Are you sure, you want to Delete this Event row ?");
            ruleDel.isDeleted = true;
            if (confirm) {
                dispatch(updateRuleStart(ruleDel));
                toast.success("rule Deleted Success ");           
                setTimeout(() => dispatch(getRuleStart()), 2000);
            }
        }
    }

    const columns = [
        {
            name: 'description',
            label: 'description',
        },
        {
            name: 'eventName',
            label: 'eventName',
        },
        {
            name: 'notificationCount',
            label: 'notificationCount',
        },
        {
            name: 'isActive',
            label: 'Status',
            // type:'boolean',
            options: {
                customBodyRender: (value) => {
                    return (
                        <div>
                            {value.toString() === "true"
                                ? "Active"
                                : value.toString() === "false"
                                    ? "InActive"
                                    : "InActive"}
                        </div>
                    );
                },
            }
        },
        {
            name: 'entityName',
            label: 'entityName',
        },
        {
            name: "id",
            label: 'Actions',
            options: {
                customBodyRender: (value, tableMeta) => {
                    return (
                        <div>
                            <Tooltip title="Edit">
                                <IconButton onClick={() => handleUpdate(value)} >
                                    <EditIcon
                                        color="info"
                                    />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete">
                                <IconButton onClick={() => handleDelete(value)}>
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
            <Paper>
                <Typography className='tab_head'>Rule Entry</Typography>
                <Paper>
                    {open ?
                        (<RuleForm handleCloses={handleCloses} Emode={Emode} Edata={Edata} />) :
                        (<>
                            <Button variant='standard' className='addPop w-100 d-flex justify-content-end' onClick={handleClickOpen}><AddIcon />Add Rule</Button>
                            <Styles>
                                <MUIDataTable
                                    data={tableData}
                                    columns={columns}
                                    options={options}
                                />
                            </Styles>
                        </>
                        )}
                </Paper>
            </Paper>
        </div>
    )
}

export default Rule; 