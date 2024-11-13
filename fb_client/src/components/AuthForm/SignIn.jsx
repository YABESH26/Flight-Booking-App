import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const SignIn = () => {
  return (
    <Box sx={{ mt: 2, padding: 2 }}>
      <Typography variant="h6" component="h2" sx={{ mb: 2, color: '#0b1e3f', textAlign: 'center' }}>
        Create Your Account
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
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
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
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
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
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
      <Button variant="contained" color="primary" sx={{ mt: 2, width: '100%', borderRadius: 2 }}>
        Sign In
      </Button>
    </Box>
  );
};

export default SignIn;
