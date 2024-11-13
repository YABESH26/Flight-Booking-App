import React from 'react';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const ContactUs = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>If you have any questions or need assistance, feel free to reach out to us:</p>
            <ul>
                <li><strong>Email:</strong> <a href="mailto:support@skyairlines.com">support@skyairlines.com</a></li>
                <li><strong>Phone:</strong> <a href="tel:+919176521442">+91 9176521442</a></li>
                <li><strong>Office Address:</strong> No:123 Marryamman Kovil St, Tambram Kurukusanthu, Tambram</li>
            </ul>
            <h2>Follow Us on Social Media</h2>
            <ul className="social-media-icons">
                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><Facebook style={{ fontSize: 40, color: '#3b5998' }} /></a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter style={{ fontSize: 40, color: '#00acee' }} /></a></li>
                <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><Instagram style={{ fontSize: 40, color: '#E1306C' }} /></a></li>
            </ul>
            <p>We welcome your feedback to improve our services. Please fill out our <a href="#feedback-form">feedback form</a>.</p>
        </div>
    );
};

export default ContactUs;
