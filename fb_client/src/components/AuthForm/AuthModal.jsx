import React from 'react';
import { Modal, Button, Box, Typography } from '@mui/material';
import Login from './Login';
import SignIn from './SignIn';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#0b1e3f', // Update background color to match your requirement
  boxShadow: 24,
  p: 4,
  borderRadius: '16px', // Add border radius for curved edges
};

const AuthModal = ({ open, handleClose, onClick, isLogin, setIsLogin, setUserName }) => {

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2" style={{ color: 'white', textAlign: 'center' }}>
          {isLogin ? 'Login' : 'Sign In'}
        </Typography>
        {isLogin ? <Login onClick={onClick} setUserName={setUserName}/> : <SignIn setUserName={setUserName}/>}
        <Button 
          onClick={toggleForm} 
          style={{ 
            color: 'white',
            transition: 'background-color 0.3s',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.3)', // Transparent black on hover
            },
          }}
        >
          {isLogin ? 'Create an account' : 'Already have an account?'}
        </Button>
      </Box>
    </Modal>
  );
};

export default AuthModal;
