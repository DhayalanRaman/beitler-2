import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const handleUpdate = (value) => {
  console.log(value);
}


export const columns = [
  {
    name: 'name',
    label: 'Event Name',
  },
  {
    name: 'description',
    label: 'Event Description',
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
    name: "id",
    label: 'Actions',
    options: {
      customBodyRender: (value, tableMeta) => {
        return (
          <div>
            <Tooltip title="Edit">
              <IconButton>
                <EditIcon onClick={() => handleUpdate(value)} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
        );
      }
    },
  },
]