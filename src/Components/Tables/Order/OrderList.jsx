import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderStart } from '../../../Actions/orderAction';
import MUIDataTable from "mui-datatables";
import { columns } from '../../../Utils/OrderColumns';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import { Styles } from '../../../CSS/TableStyle';
import Typography from '@mui/material/Typography';

const OrderList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderStart());
  }, [dispatch]);

  const orders = useSelector(state => state.fetchUsers.orders);
  const loading = useSelector(state => state.fetchUsers.loading);

  if (loading) {
    return (
      <CircularProgress style={{ marginTop: "250px", marginLeft: "550px" }} role="status">
        <span className="visually-hidden">Loading...</span>
      </CircularProgress>
    );
  }
  const options = {
    exportButton: true,
    filter: true,
    // filterType: "dropdown",
    // responsive: 'scrollMaxHeight',
    scrollX: true,
    responsive: "standard",
    // responsive: "scroll",
    fixedSelectColumn: false,
    resizableColumns: false,
    rowsPerPageOptions: [5, 10, 15, 30, 50, 100],
    jumpToPage: true,
    // responsive: 'vertical',
    // customSort: (data, colIndex, order, meta) => {
    //   return data.sort((a, b) => {
    //     return (a.data[colIndex].length < b.data[colIndex].length ? -1 : 1) * (order === 'desc' ? 1 : -1);
    //   });
    // },
    textLabels: {
      pagination: {
        next: "Next >",
        previous: "< Previous",
        rowsPerPage: "Total items Per Page",
        displayRows: "of"
      }
    },
    MuiTableCell: {
      head: {
        backgroundColor: "red !important"
      }
    }
  };


  return (
    <>
      <Paper>
      <Typography className='tab_head'>Order Listing</Typography>
        <Styles>
          <MUIDataTable
            data={orders}
            columns={columns}
            options={options}
          />
        </Styles>
      </Paper>
    </>
  )
}

export default OrderList;

