import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLookupStart } from '../../../Actions/lookupAction';
import MUIDataTable from "mui-datatables";
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Styles } from '../../../CSS/TableStyle';
import { options, columns } from './LookupCol';

const Lookup = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLookupStart());
  }, [dispatch]);

  const LookData = useSelector(state => state.fetchLookup.lookup);
  const loading = useSelector(state => state.fetchUsers.loading);
  console.log(LookData);

  if (loading) {
    return (
      <CircularProgress style={{ marginTop: "250px", marginLeft: "550px" }} role="status">
        <span className="visually-hidden">Loading...</span>
      </CircularProgress>
    );
  }



  return (
    <>
      <Paper>
        <Typography className='tab_head'>Lookup Listing</Typography>
        <Styles>
          <MUIDataTable
            data={LookData}
            columns={columns}
            options={options}
          />
        </Styles>
      </Paper>
    </>
  )
}

export default Lookup;

