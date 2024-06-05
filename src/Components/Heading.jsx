import React from 'react';

const Heading = ({ cityName }) => {
    // Function to format the city name
    const formatCityName = (cityName) => {
        return cityName
            .split(" ") // Split city name by spaces
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
            .join(" "); // Join the words back together with spaces
    };

    return (
        <h1>Weather for {formatCityName(cityName)}</h1>
    );
};

export default Heading;
