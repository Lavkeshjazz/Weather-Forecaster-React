import axios from "axios";
const API_URL = "http://api.weatherapi.com/v1/current.json?";
const key = 'd68355196f9f4ce680b170313241107';

const options = {
    // method: 'GET',
     // url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
     // params: {city: 'Seattle'},
     headers: {
       'X-RapidAPI-Key': '735e72ee60msh6ec9764972a47e2p159ad9jsn95a7f88fe07d',
       'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
     }
   };

export const getWeatherofCity = async (cityName) => {
    //console.log('Making request to weather API');
    const response = await axios.get(API_URL+"key="+key+"&q="+cityName+"&aqi=no",options, {
        method: "GET",
    });
    //console.log('Received response:', response);
    return response.data;
}

export const getWeatherofLocation = async (latitude,longitude) => {
  //console.log('Making request to weather API');
  const response = await axios.get(API_URL+"key="+key+"&q="+latitude+","+longitude+"&aqi=no",options, {
      method: "GET",
  });
  //console.log('Received response:', response);
  return response.data;
}

export const getWeatherofDelhi = async () => {
    //console.log('Making request to weather API');
    const response = await axios.get(API_URL+"key="+key+"&q="+"New Delhi"+"&aqi=no",options, {
        method: "GET",
    });
    //console.log('Received response:', response);
    return response.data;
}

export const getWeatherofMumbai = async () => {
  //console.log('Making request to weather API');
  const response = await axios.get(API_URL+"key="+key+"&q="+"Mumbai"+"&aqi=no",options, {
      method: "GET",
  });
  //console.log('Received response:', response);
  return response.data;
}

export const getWeatherofKolkata = async () => {
 // console.log('Making request to weather API');
  const response = await axios.get(API_URL+"key="+key+"&q="+"Kolkata"+"&aqi=no",options, {
      method: "GET",
  });
 // console.log('Received response:', response);
  return response.data;
}

export const getWeatherofBangalore = async () => {
  //console.log('Making request to weather API');
  const response = await axios.get(API_URL+"key="+key+"&q="+"Bangalore"+"&aqi=no",options, {
      method: "GET",
  });
  //console.log('Received response:', response);
  return response.data;
}

export const getWeatherofPune = async () => {
  //console.log('Making request to weather API');
  const response = await axios.get(API_URL+"key="+key+"&q="+"Pune"+"&aqi=no",options, {
      method: "GET",
  });
  //console.log('Received response:', response);
  return response.data;
}

export const getWeatherofHyderabad = async () => {
  //console.log('Making request to weather API');
  const response = await axios.get(API_URL+"key="+key+"&q="+"Hyderabad"+"&aqi=no",options, {
      method: "GET",
  });
  //console.log('Received response:', response);
  return response.data;
}