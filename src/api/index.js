import axios from "axios";
const API_URL = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather";

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
    const response = await axios.get(API_URL+"?city="+cityName,options, {
        method: "GET",
    });
    //console.log('Received response:', response);
    return response.data;
}

export const getWeatherofDelhi = async () => {
    //console.log('Making request to weather API');
    const response = await axios.get(API_URL+"?city=New Delhi",options, {
        method: "GET",
    });
    //console.log('Received response:', response);
    return response.data;
}

export const getWeatherofMumbai = async () => {
  //console.log('Making request to weather API');
  const response = await axios.get(API_URL+"?city=Mumbai",options, {
      method: "GET",
  });
  //console.log('Received response:', response);
  return response.data;
}

export const getWeatherofKolkata = async () => {
 // console.log('Making request to weather API');
  const response = await axios.get(API_URL+"?city=Kolkata",options, {
      method: "GET",
  });
 // console.log('Received response:', response);
  return response.data;
}

export const getWeatherofBangalore = async () => {
  //console.log('Making request to weather API');
  const response = await axios.get(API_URL+"?city=Bangalore",options, {
      method: "GET",
  });
  //console.log('Received response:', response);
  return response.data;
}

export const getWeatherofPune = async () => {
  //console.log('Making request to weather API');
  const response = await axios.get(API_URL+"?city=Pune",options, {
      method: "GET",
  });
  //console.log('Received response:', response);
  return response.data;
}

export const getWeatherofHyderabad = async () => {
  //console.log('Making request to weather API');
  const response = await axios.get(API_URL+"?city=Hyderabad",options, {
      method: "GET",
  });
  //console.log('Received response:', response);
  return response.data;
}