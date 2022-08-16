import EditIcon from '@mui/icons-material/Edit';
import moment from "moment";
export const columns = [
  {
    name: 'store',
    label: 'Store',
  },
  {
    name: 'city',
    label: 'City',
  },
  {
    name: 'state',
    label: 'State',
  },
  {
    name: 'shipper',
    label: 'Email',
  },
  {
    name: 'expectedWeight',
    label: 'ExpWeight',
  },
  {
    name: 'brokerID',
    label: 'Over',
  },
  {
    name: 'sort',
    label: 'Sort',
  },
  {
    name: 'damaged',
    label: 'Damaged',
  },
  {
    name: 'shipperDeliveryStartDatetime',
    label: 'StartArrival',
    type: 'date',
    options: {
      customBodyRender: (value) => {
        return <div>
          {value ? moment(value).format('MM/DD/YYYY') : ''}
        </div>;
      },
    },
  },
  {
    name: 'statusID',
    label: 'Status',
  },
  {
    name: 'isActive',
    label: 'IsinterLineOn',
  },
  {
    name: "id",
    label: 'Actions',
    options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <EditIcon onClick={() => {
            const { data } = this.state;
            data.shift();
            this.setState({ data });
          }}>
          </EditIcon>
        );
      }
    },
  },

]