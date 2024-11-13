import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [departDate, setDepartDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [travellers, setTravellers] = useState(1);
    const [cabinClass, setCabinClass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const criteria = { from, to, departDate, returnDate, travellers, cabinClass };
        onSearch(criteria);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} required />
            <input type="text" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} required />
            <input type="date" value={departDate} onChange={(e) => setDepartDate(e.target.value)} required />
            <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
            <input type="number" value={travellers} onChange={(e) => setTravellers(e.target.value)} min="1" />
            <select value={cabinClass} onChange={(e) => setCabinClass(e.target.value)}>
                <option value="">Select Cabin Class</option>
                <option value="economy">Economy</option>
                <option value="business">Business</option>
            </select>
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;
