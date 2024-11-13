import React from 'react';

const CitySelect = ({ cities, selectedCity, onCityChange, label }) => {
    return (
        <div>
            <label htmlFor={label.toLowerCase().replace(" ", "-")}>{label}</label>
            <select
                id={label.toLowerCase().replace(" ", "-")}
                value={selectedCity}
                onChange={(e) => onCityChange(e.target.value)}
            >
                <option value="">Select</option>
                {cities.map((city, index) => (
                    <option key={index} value={city}>
                        {city}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CitySelect;
