import React, { useEffect, useState } from 'react';
import { getWeatherofCity } from "../api/index";
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Navbar from "./Navbar";
import Heading from './Heading';
import OopsPage from './OopsPage'; 

const ThreeMainCard = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [cityName, setCityName] = useState("New Delhi"); // Default city is New Delhi
    const [inputValue, setInputValue] = useState(""); // For managing input value
    const [error, setError] = useState(false); // For managing error state

    useEffect(() => {
        getWeatherofCity(cityName)
            .then((weather) => {
                console.log("Weather data for", cityName, ":", weather);
                setWeatherData(weather);
                setError(false); // Reset error state
            })
            .catch(() => {
                console.error("Failed to fetch weather data for", cityName);
                setWeatherData(null);
                setError(true); // Set error state
            });
    }, [cityName]); // Fetch weather data whenever cityName changes

    const handleCityNameChange = (newCityName) => {
        setCityName(newCityName);
    };

    return (
      <div>
          <Navbar 
              onCityNameChange={handleCityNameChange} 
              inputValue={inputValue} 
              setInputValue={setInputValue} 
          />
          <div className="container">
              {error ? (
                  <OopsPage />
              ) : (
                  <>
                      <Heading cityName={cityName} />
                      {weatherData && ( // Check if weatherData is not null
                          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                              <Card1 temp={weatherData.temp} mintemp={weatherData.min_temp} maxtemp={weatherData.max_temp} />
                              <Card2 wspeed={weatherData.wind_speed} wdegree={weatherData.wind_degrees} />
                              <Card3 hmdtiy={weatherData.humidity} temp={weatherData.feels_like} />
                          </div>
                      )}
                  </>
              )}
          </div>
      </div>
  );
}

export default ThreeMainCard;
