import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const Login = ({setUserName, onClick}) => {
  const [uname, setUname] = useState('')
  const [pass, setPass] = useState('')

  const handleClick = () =>{

    const name = uname.trim()
    if (name && pass && pass.length >= 8 && name.length > 5){
      setUserName(name)
      onClick(false)
    }
  }

  return (
    <Box sx={{ mt: 2, padding: 2 }}>
      <Typography variant="h6" component="h2" sx={{ mb: 2, color: '#0b1e3f', textAlign: 'center' }}>
        Login to Your Account
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        required
        sx={{
          backgroundColor: 'white', // Set background color to white
          borderRadius: 2,
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            '& fieldset': {
              borderColor: '#ccc', // Border color
            },
            '&:hover fieldset': {
              borderColor: '#0b1e3f', // Change border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0b1e3f', // Change border color when focused
            },
          },
          '& .MuiInputBase-input': {
            padding: '12px', // Padding for input
          },
        }}
        onChange={(e) => setUname(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        required
        onChange={(e) => setPass(e.target.value)}
        sx={{
          mt: 2,
          backgroundColor: 'white', // Set background color to white
          borderRadius: 2,
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            '& fieldset': {
              borderColor: '#ccc', // Border color
            },
            '&:hover fieldset': {
              borderColor: '#0b1e3f', // Change border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0b1e3f', // Change border color when focused
            },
          },
          '& .MuiInputBase-input': {
            padding: '12px', // Padding for input
          },
        }}
      />
      <Button onClick={handleClick} variant="contained" color="primary" sx={{ mt: 2, width: '100%', borderRadius: 2 }}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
