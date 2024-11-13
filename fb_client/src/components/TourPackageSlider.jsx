import React from 'react';
import Slider from "react-slick";
import './styles/TourPackageSlider.css';

const TourPackageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true, 
        arrows: false,
        pauseOnHover: true,
    };

    const images = [
        { id: 1, src: require('../images/tour1.jpg'), alt: 'Tour 1', title: "ROME", description: "Explore the rich history and stunning architecture of Rome, from the Colosseum to the Vatican." },
        { id: 2, src: require('../images/tour2.jpeg'), alt: 'Tour 2', title: "PARIS", description: "Stroll through the charming streets of Paris and visit iconic landmarks like the Eiffel Tower." },
        { id: 3, src: require('../images/tour3.jpeg'), alt: 'Tour 3', title: "BORA BORA", description: "Relax on the pristine beaches of Bora Bora and enjoy breathtaking sunsets over the lagoon." },
        { id: 4, src: require('../images/tour4.jpg'), alt: 'Tour 4', title: "DUBAI", description: "Experience the luxurious lifestyle in Dubai, from skyscrapers to desert adventures." },
        { id: 5, src: require('../images/tour5.jpg'), alt: 'Tour 5', title: "BANGKOK", description: "Immerse yourself in the vibrant culture and delicious street food of Bangkok." }
    ];

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((image) => (
                    <div key={image.id} className="slide">
                        <img src={image.src} alt={image.alt} className="slider-image" />
                        <h1 className="main-heading">Let's Explore</h1> {/* Centered heading on top of the image */}
                        <div className="text-overlay">
                            <h2>{image.title}</h2>
                            <p>{image.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TourPackageSlider;
