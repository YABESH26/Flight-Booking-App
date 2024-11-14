import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FlightResult = () => {
  const [flights, setFlights] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState({});

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

  const toggleSeatSelection = (flightId, seatNumber) => {
    setSelectedSeats((prevSelectedSeats) => {
      const flightSeats = prevSelectedSeats[flightId] || [];
      const isSelected = flightSeats.includes(seatNumber);
      
      return {
        ...prevSelectedSeats,
        [flightId]: isSelected 
          ? flightSeats.filter((seat) => seat !== seatNumber) 
          : [...flightSeats, seatNumber]
      };
    });
  };

  const isSeatSelected = (flightId, seatNumber) => {
    return selectedSeats[flightId]?.includes(seatNumber);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#2E3B55' }}>Flight Results</h2>
      {flights.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {flights.map((flight) => (
            <div
              key={flight._id}
              style={{
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <div>
                <p style={{ margin: 0, fontSize: '1.1em', fontWeight: 'bold', color: '#333' }}>
                  Flight Number: {flight.flightNumber} / ({flight.class})
                </p>
                <p style={{ margin: '5px 0', color: '#555' }}>
                  Origin: {flight.origin} - Destination: {flight.destination}
                </p>
                <p style={{ margin: '5px 0', color: '#555' }}>
                  Price: ₹{flight.price}
                </p>
              </div>

              {/* Seat Selection Grid */}
              <div style={{ marginTop: '10px', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '5px' }}>
                {[...Array(30)].map((_, index) => {
                  const seatNumber = index + 1;
                  return (
                    <div
                      key={seatNumber}
                      onClick={() => toggleSeatSelection(flight._id, seatNumber)}
                      style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        backgroundColor: isSeatSelected(flight._id, seatNumber) ? '#3f51b5' : '#f1f1f1',
                        color: isSeatSelected(flight._id, seatNumber) ? '#fff' : '#333',
                      }}
                    >
                      {seatNumber}
                    </div>
                  );
                })}
              </div>

              {/* Show "Book Now" button only if at least one seat is selected */}
              {selectedSeats[flight._id]?.length > 0 && (
                <button
                  style={{
                    marginTop: '10px',
                    padding: '10px 20px',
                    backgroundColor: '#3f51b5',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                  onClick={() => alert(`Your flight with ID - ${flight.flightNumber} has been successfully booked! Seats: ${selectedSeats[flight._id].join(', ')}`)}
                >
                  Book Now
                </button>
              )}
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
