import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.css';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#192252', color: 'white', textAlign: 'center', padding: '20px', marginTop: '20px' }}>
            <p>Cheap flight booking from anywhere, to everywhere</p>
            <p>© SkyAirlines Ltd - 2024</p>
            <div>
                <Link to="/about" className="footer-link">About Us</Link>
                <Link to="/contact" className="footer-link">Contact Us</Link>
                <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
                <Link to="/terms-of-use" className="footer-link">Terms of Use</Link>
                <Link to="/refund-policy" className="footer-link">Refund Policy</Link>
            </div>
        </footer>
    );
};

export default Footer;
