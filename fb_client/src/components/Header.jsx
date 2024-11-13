import React from 'react';
import './styles/Header.css';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import logo from '../images/2.png';

const Header = ({ onLoginClick, onSignInClick, name }) => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#192252' }}>
      <Toolbar style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="SkyAirlines Logo" style={{ width: '50px', marginRight: '10px' }} />
          <Typography variant="h4" component="div" style={{ color: 'white' }}>
            SkyAirlines
          </Typography>
        </div>
        {/* Align buttons in a flex container */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {!name ? (
            <>
 <Button color="inherit" style={{ marginRight: '10px' }} onClick={onLoginClick}>
            Login
          </Button>
          <Button color="inherit" onClick={onSignInClick}>
            Sign In
          </Button>
            </>
          ):
          <div><p>Logined as {name}!</p></div>
          
        }
         
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
