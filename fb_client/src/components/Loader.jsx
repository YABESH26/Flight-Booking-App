import React from 'react';
import './styles/Loader.css';
import logo from '../images/2.png';

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="logo-container">
                <img src={logo} alt="SkyAirlines Logo" className="loader-logo" />
                <div className="dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <p>Loading...</p>
            </div>
        </div>
    );
};

export default Loader;
