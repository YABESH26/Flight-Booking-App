import React, { useEffect, useState } from 'react';
import '../styles/Admin.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Admin = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);           // State for user approvals
  const [userCount, setUserCount] = useState(0);    // Total user count
  const [bookingCount, setBookingCount] = useState(0);  // Total booking count
  const [flightsCount, setFlightsCount] = useState(0);  // Total flights count

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch user, booking, and flight data from the backend
  const fetchData = async () => {
    try {
      const userResponse = await axios.get('http://localhost:5000/api/users');  // API to fetch users
      setUserCount(userResponse.data.length);  // Update user count
      setUsers(userResponse.data.filter(user => user.approval === 'not-approved'));  // Filter unapproved users

      const bookingResponse = await axios.get('http://localhost:5000/api/bookings');  // API to fetch bookings
      setBookingCount(bookingResponse.data.length);  // Update booking count

      const flightsResponse = await axios.get('http://localhost:5000/api/flights');  // API to fetch flights
      setFlightsCount(flightsResponse.data.length);  // Update flights count
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Approve operator (user)
  const approveRequest = async (id) => {
    try {
      await axios.post('http://localhost:5000/api/approve-operator', { id });
      alert("Operator approved!");
      fetchData();  // Refresh data after approval
    } catch (err) {
      console.error("Error approving operator:", err);
    }
  };

  // Reject operator (user)
  const rejectRequest = async (id) => {
    try {
      await axios.post('http://localhost:5000/api/reject-operator', { id });
      alert("Operator rejected!");
      fetchData();  // Refresh data after rejection
    } catch (err) {
      console.error("Error rejecting operator:", err);
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-page-cards">
        {/* User card */}
        <div className="card admin-card users-card">
          <h4>Users</h4>
          <p>{userCount}</p>
          <button className="btn btn-primary" onClick={() => navigate('/all-users')}>View all</button>
        </div>

        {/* Booking card */}
        <div className="card admin-card transactions-card">
          <h4>Bookings</h4>
          <p>{bookingCount}</p>
          <button className="btn btn-primary" onClick={() => navigate('/all-bookings')}>View all</button>
        </div>

        {/* Flights card */}
        <div className="card admin-card deposits-card">
          <h4>Flights</h4>
          <p>{flightsCount}</p>
          <button className="btn btn-primary" onClick={() => navigate('/all-flights')}>View all</button>
        </div>
      </div>

      {/* Operator approval section */}
      <div className="admin-requests-container">
        <h3>New Operator Applications</h3>
        <div className="admin-requests">
          {users.length === 0 ? (
            <p>No new requests...</p>
          ) : (
            users.map((user) => (
              <div className="admin-request" key={user._id}>
                <span><b>Operator name:</b> {user.username}</span>
                <span><b>Operator email:</b> {user.email}</span>
                <div className="admin-request-actions">
                  <button className="btn btn-primary" onClick={() => approveRequest(user._id)}>Approve</button>
                  <button className="btn btn-danger" onClick={() => rejectRequest(user._id)}>Reject</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
