import React from 'react';
import SignIn from './Login';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import truck from '../../Assets/truck.jpg';
import '../../CSS/SignIn.scss'

function LoginContainer() {
  return (
    <div>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Box sx={{ display: 'flex', position:'fixed' }}>
          <Box >
            <img src={truck} alt='img' className='truck-img' />
          </Box>
          <Box margin={0}>
            <SignIn />
          </Box>
        </Box>
      </Paper>
    </div>
  )
}

export default LoginContainer;
