import React, { useEffect, useState } from 'react';
import { getWeatherofCity, getWeatherofLocation } from "../api/index";
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Navbar from "./Navbar";
import Heading from './Heading';
import OopsPage from './OopsPage'; 

const ThreeMainCard = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [cityName, setCityName] = useState(null); // Initially null to determine if the city is set by user or by location fetch
    const [inputValue, setInputValue] = useState(""); // For managing input value
    const [error, setError] = useState(false); // For managing error state

    useEffect(() => {
        const fetchInitialWeather = async () => {
            try {
                const position = await getUserLocation();
                const weather = await getWeatherofLocation(position.coords.latitude, position.coords.longitude);
                setWeatherData(weather);
                setCityName("Your Location");
                setError(false);
            } catch (error) {
                console.error("Failed to fetch weather data for user's location:", error);
                fetchWeatherByCity("New Delhi"); // Fallback to default city only if location fetch fails
            }
        };

        fetchInitialWeather();
    }, []);

    useEffect(() => {
        if (cityName && cityName !== "Your Location") {
            fetchWeatherByCity(cityName);
        }
    }, [cityName]);

    const fetchWeatherByCity = async (city) => {
        try {
            const weather = await getWeatherofCity(city);
            setWeatherData(weather);
            setError(false);
        } catch (error) {
            console.error("Failed to fetch weather data for city:", error);
            setWeatherData(null);
            setError(true);
        }
    };

    const getUserLocation = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    };

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
                        <Heading cityName={cityName || "Loading..."} />
                        {weatherData && ( // Check if weatherData is not null
                            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                                <Card1 temp={weatherData.current.temp_c} mintemp={weatherData.current.heatindex_c} maxtemp={weatherData.current.condition.text} />
                                <Card2 wspeed={weatherData.current.wind_kph} wdegree={weatherData.current.wind_degree} />
                                <Card3 hmdtiy={weatherData.current.humidity} temp={weatherData.current.feelslike_c} />
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default ThreeMainCard;
