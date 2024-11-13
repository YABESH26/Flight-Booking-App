import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Flightresult from './components/Flightresult';
import Header from './components/Header';
import FlightSearch from './components/FlightSearch';
import FlightList from './components/FlightList';
import VideoSlider from './components/VideoSlider';
import Footer from './components/Footer';
import AboutUs from './components/contact/AboutUs';
import ContactUs from './components/contact/ContactUs';
import PrivacyPolicy from './components/contact/PrivacyPolicy';
import TermsOfUse from './components/contact/TermsOfUse';
import RefundPolicy from './components/contact/RefundPolicy';
import Loader from './components/Loader';
import AuthModal from './components/AuthForm/AuthModal';
import axios from 'axios';
import TourPackageSlider from './components/TourPackageSlider';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import './App.css';

function App() {
    const [searchCriteria, setSearchCriteria] = useState(null);  
    const [loading, setLoading] = useState(false); 
    const [username, setUserName] = useState(null);  
            
    const [flights, setFlights] = useState([]);   
    const [error, setError] = useState(null);                 
    const [modalOpen, setModalOpen] = useState(false); 
    const [isLogin, setIsLogin] = useState(true); 
       
    // Handle flight search
    const handleSearch = (criteria) => {
        setSearchCriteria(criteria);
        setLoading(true);
    };

    // Fetch flights based on search criteria
    useEffect(() => {
        const fetchFlights = async () => {
            if (!searchCriteria) {
                setLoading(false);
                return;
            }

            setLoading(true);
            setError(null);

            try {
                const response = await axios.get('http://localhost:5001/api/flights', {
                    params: searchCriteria,
                });
                setFlights(response.data);
            } catch (error) {
                console.error("Error fetching flights:", error.message);
                setError("Error fetching flights. Please try again.");
                setFlights([]);
            } finally {
                setLoading(false);
            }
        };

        fetchFlights();
    }, [searchCriteria]);

    // Handle modal opening for login/sign-in
    const handleOpenModal = (isLoginMode) => {
        setIsLogin(isLoginMode);
        setModalOpen(true);
    };

    // Handle closing of modal
    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <BrowserRouter>
            <div>
                <Header 
                name={username}
                    onLoginClick={() => handleOpenModal(true)} 
                    onSignInClick={() => handleOpenModal(false)} 
                />
                
                {loading ? (
                    <Loader />
                ) : (
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <FlightSearch onSearch={handleSearch} setLoading={setLoading}/>
                                    <FlightList flights={flights} error={error} />
                                    <TourPackageSlider />
                                    <VideoSlider />
                                </>
                            }
                        />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/terms-of-use" element={<TermsOfUse />} />
                        <Route path="/refund-policy" element={<RefundPolicy />} />
                        <Route path="/results" element={<Flightresult/>} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                )}

                <Footer />
                <AuthModal open={modalOpen} onClick={ setModalOpen} setUserName={setUserName} handleClose={handleCloseModal} isLogin={isLogin} setIsLogin={setIsLogin} />
            </div>
        </BrowserRouter>
    );
}

export default App; 
