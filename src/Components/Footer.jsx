import React, { useEffect, useState } from "react";
import { getWeatherofDelhi, getWeatherofBangalore, getWeatherofHyderabad, getWeatherofKolkata, getWeatherofMumbai, getWeatherofPune } from "../api/index";
import Delhi from "./Delhi";
import Kolkata from "./Kolkata";
import Bangalore from "./Bangalore";
import Hyderabad from "./Hyderabad";
import Mumbai from "./Mumbai";
import Pune from "./Pune";
import Button from "./Button";  // Ensure the Button component is imported

const Footer = () => {
  const [weatherData1, setWeatherData1] = useState(null);
  const [weatherData2, setWeatherData2] = useState(null);
  const [weatherData3, setWeatherData3] = useState(null);
  const [weatherData4, setWeatherData4] = useState(null);
  const [weatherData5, setWeatherData5] = useState(null);
  const [weatherData6, setWeatherData6] = useState(null);

  const fetchWeatherData = () => {
    getWeatherofDelhi().then((weather1) => {
      //console.log("Weather data:", weather1);
      setWeatherData1(weather1);
    });

    getWeatherofMumbai().then((weather2) => {
      //console.log("Weather data:", weather2);
      setWeatherData2(weather2);
    });

    getWeatherofKolkata().then((weather3) => {
     // console.log("Weather data:", weather3);
      setWeatherData3(weather3);
    });

    getWeatherofBangalore().then((weather4) => {
      //console.log("Weather data:", weather4);
      setWeatherData4(weather4);
    });

    getWeatherofPune().then((weather5) => {
     // console.log("Weather data:", weather5);
      setWeatherData5(weather5);
    });

    getWeatherofHyderabad().then((weather6) => {
      //console.log("Weather data:", weather6);
      setWeatherData6(weather6);
    });
  };


  useEffect(() => {
    console.log("Component mounted. Fetching initial weather data...");
    fetchWeatherData();
  }, []);

    return (
        <div class="table-responsive">
      <table class="table1 text-center">
        <thead>
          <tr>
            <th style={{ width: "10%" }}></th>
            <th style={{ width: "10%" }}>Feels like</th>
            <th style={{ width: "10%" }}>Humidity</th>
            <th style={{ width: "10%" }}>Max Temperature</th>
            <th style={{ width: "10%" }}>Min Temperature</th>
            <th style={{ width: "10%" }}>Temperature</th>
            <th style={{ width: "10%" }}>Wind Speed</th>
          </tr>
        </thead>
        <tbody>
        {weatherData1 ? (
            <Delhi feels1={weatherData1.temp} humid1={weatherData1.humidity} max1={weatherData1.max_temp} min1={weatherData1.min_temp} ws1={weatherData1.wind_speed}/>
          ) : <p>No Data</p>}
        
        {weatherData2 ? (
            <Mumbai feels2={weatherData2.temp} humid2={weatherData2.humidity} max2={weatherData2.max_temp} min2={weatherData2.min_temp} ws2={weatherData2.wind_speed}/>
          ) : <p>No Data</p>}
        </tbody>
        <tbody>
        {weatherData3 ? (
            <Kolkata feels3={weatherData3.temp} humid3={weatherData3.humidity} max3={weatherData3.max_temp} min3={weatherData3.min_temp} ws3={weatherData3.wind_speed}/>
          ) : <p>No Data</p>}

        {weatherData4 ? (
            <Bangalore feels4={weatherData4.temp} humid4={weatherData4.humidity} max4={weatherData4.max_temp} min4={weatherData4.min_temp} ws4={weatherData4.wind_speed}/>
          ) : <p>No Data</p>}
           
        {weatherData5 ? (
            <Pune feels5={weatherData5.temp} humid5={weatherData5.humidity} max5={weatherData5.max_temp} min5={weatherData5.min_temp} ws5={weatherData5.wind_speed}/>
          ) : <p>No Data</p>}

        {weatherData6 ? (
            <Hyderabad feels6={weatherData6.temp} humid6={weatherData6.humidity} max6={weatherData6.max_temp} min6={weatherData6.min_temp} ws6={weatherData6.wind_speed}/>
          ) : <p>No Data</p>}
        </tbody>
        </table>
        <Button value="Refresh" onClick={fetchWeatherData} />
        </div>
    )
}

export default Footer;