import React, { useRef, useEffect, useState } from 'react';
import './styles/VideoSlider.css';
import flightImage from '../images/5.png';
import videoSource from '../images/1.mp4'; 

const VideoSlider = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    // Store current videoRef value in a variable
    const currentVideo = videoRef.current;
    
    if (currentVideo) {
      observer.observe(currentVideo);
    }

    // Cleanup function
    return () => {
      if (currentVideo) {
        observer.unobserve(currentVideo);
      }
    };
  }, []); // Empty dependency array, runs once on mount

  return (
    <div className="video-slider-container">
      <div 
        className={`video-slider ${isVisible ? 'slide-up' : ''}`} 
        style={{ width: '50%', height: 'auto', margin: '0 auto' }}
      >
        <video
          ref={videoRef}
          src={videoSource}
          width="100%"
          height="auto"
          style={{ 
            borderRadius: '400px',
            transform: 'scale(1.6)',
            objectFit: 'cover',
            height: '300px',
            width: '100%',
          }}
          autoPlay
          loop
          muted
        />
        {/* Flight Image Overlay */}
        <img
          src={flightImage}
          alt="Flight"
          className="flight-overlay"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -55%)',
            width: '100%',
            height: 'auto',
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
};

export default VideoSlider;
