import React from 'react';
import './styles/LoadingAnimation.css';
import logo from '../images/2.png';

const LoadingAnimation = () => {
    return (
        <div className="loading-container">
            <div className="logo-container">
                <img src={logo} alt="SkyAirlines Logo" className="loading-logo" />
                <div className="dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingAnimation;
