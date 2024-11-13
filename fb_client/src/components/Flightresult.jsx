import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FlightResult = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const origin = urlParams.get('origin');
      const destination = urlParams.get('destination');

      if (origin && destination) {
        const response = await axios.get('http://localhost:5001/api/flights/search', {
          params: { origin, destination },
        });
        setFlights(response.data);
      }
    };
    fetchFlights();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#2E3B55' }}>Flight Results</h2>
      {flights.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {flights.map((flight) => (
            <div
              key={flight._id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <div>
                <p style={{ margin: 0, fontSize: '1.1em', fontWeight: 'bold', color: '#333' }}>
                  Flight Number: {flight.flightNumber} /({flight.class})
                </p>
                <p style={{ margin: '5px 0', color: '#555' }}>
                  Origin: {flight.origin} - Destination: {flight.destination}
                </p>
                <p style={{ margin: '5px 0', color: '#555' }}>
                  Price: ₹{flight.price}
                
                </p>
              </div>
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#3f51b5',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
                onClick={() => alert(`Your flight has successfully Booked :) with flight ID - ${flight.flightNumber}`)}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', color: '#888' }}>No flights found</p>
      )}
    </div>
  );
};

export default FlightResult;
