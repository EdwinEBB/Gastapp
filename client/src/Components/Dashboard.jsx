import { Box, Button, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navegar = useNavigate();
  const [message,setMessage]=useState('');
  const [open,setOpen]=useState(false);
  const [severity,setSeverity]=useState('Success');

  const handlogout= async ()=>{
    try {
      await axios.post('http://localhost:3001/gastapp/users/logout');

    } catch (error) {
      
    }
  }
  return (
    <Box
    >
      <Typography variant="h4" component="h1">
        Bienvenido al Dashboard
      </Typography>

      <Button/>
    </Box>
  );
}
