import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createTemplateStart,
  getTempalateStart,
  updateTemplateStart,
  deleteTemplateStart
} from '../../Actions/templateAction';
import MUIDataTable from "mui-datatables";
import { options } from "../../Utils/teplateColumns"
import Paper from '@mui/material/Paper';
import { Styles } from '../../CSS/TableStyle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import TempForm from './TempForm';
import Button from "react-bootstrap/Button";
import AddIcon from '@mui/icons-material/Add';
import { toast } from "react-toastify";
import Modal from 'react-bootstrap/Modal';
import Delete from '.././DleteModel';
// import CircularProgress from '@mui/material/CircularProgress';

const Template = () => {
  const dispatch = useDispatch();
  const [tempList, setTempData] = useState([]);
  const [show, setShow] = useState(false);
  const [formData, setFormdata] = useState({});
  const [em, setEm] = useState(false);
  const [dshow, setDhow] = useState(false);
  const [delData, setData] = useState({});

  useEffect(() => {
    dispatch(getTempalateStart());
  }, [dispatch]);

  const template = useSelector(state => state.fetchTemplate.template);

  useEffect(() => {
    if (template && (Object.keys(template).length > 0)) {
      setTempData(template)
    }
  }, [template]);

  const dClose = () => setDhow(false);

  const handleUpdate = (Id) => {
    const templateData = template.find((e) => e.id === Id);
    setEm(true);
    setFormdata(templateData);
    handleShow();
  };

  const handleClose = () => {
    setShow(false);
    setFormdata({})
    setEm(false)
  };
  const handleShow = () => setShow(true);

  const handleDelete = (Id) => {
    const DelData = template.find((e) => e.id === Id);
    if (DelData) {
      setDhow(true);
      setData(DelData);
    }
  };
  const onDelete = () => {
    if (delData && (Object.keys(delData).length > 0)) {
      delData.isDeleted = true;
      dispatch(deleteTemplateStart(delData));
      toast.success("Template Delete Success ");
      setTimeout(() => dispatch(getTempalateStart()), 2000);
    }
    dClose()
  };

  const handleFormSubmit = (value) => {
    if (em && Object.keys(value).length > 0) {
      dispatch(updateTemplateStart(value))
      toast.success("Template Updated Success ");
    } else {
      dispatch(createTemplateStart(value));
      toast.success("Template Created Success ");
    };
    handleClose();
    setTimeout(() => dispatch(getTempalateStart()), 2000);
  };
  const columns = [
    {
      name: 'type',
      label: 'Event Type',
      options: {
        customBodyRender: (value) => {
          return (
            <div>
              {value.toString() === "48"
                ? "email"
                : value.toString() === "49"
                  ? "sms"
                  : "email"}
            </div>
          );
        },
      }
    },
    {
      name: 'subject',
      label: 'Subject',
    },
    {
      name: 'bodyText',
      label: 'Body',
    },
    {
      name: 'isActive',
      label: 'Status',
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
      name: 'eventName',
      label: 'Event Name',
    },
    {
      name: "id",
      label: 'Actions',
      options: {
        customBodyRender: (value) => {
          return (
            <div>
              <Tooltip title="Edit">
                <IconButton onClick={() => handleUpdate(value)} >
                  <EditIcon color="info" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton onClick={() => handleDelete(value)}>
                  <DeleteIcon color="error" />
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
        <p className='tab_head'>Notification Listing</p>
        <Button variant="standard" className="addPop w-100 d-flex justify-content-end" onClick={handleShow}><AddIcon className='addicon' />Add Notifictions</Button>

        <Styles>
          <MUIDataTable
            data={tempList}
            columns={columns}
            options={options}
          />
        </Styles>
        <div>
          <Modal
            show={show}
            onHide={handleClose}
            size='lg'
          >
            <Modal.Header closeButton>Add Event</Modal.Header>
            <Modal.Body>
              <TempForm
                TD={formData}
                em={em}
                handleFormSubmit={handleFormSubmit}
                handleClose={handleClose}
              />
            </Modal.Body>
          </Modal>
          {dshow &&
            <Delete
              show={dshow}
              handleClose={dClose}
              onDelete={onDelete}
            />
          }
        </div>
      </Paper>
    </div>
  )
}

export default Template;

