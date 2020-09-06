import React, { useState } from "react";
import axios from "axios";

import './Weather.css';
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response){
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      time: new Date(response.data.dt * 1000),
    });
    // setTemperature();
    // setReady(true);
  }
function search(){
  const apiKey = "b855a19b8fb3b4c4426ec0e293bf081b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  //city
}

function handleSubmit(event){
  event.preventDefault();
  //search for city
  search();
}
function handleCityChange(event){
  setCity(event.target.value);

}

  if (weatherData.ready){
    return(
      <div className="Weather">
          <div className="searchBox">
              <form onSubmit={handleSubmit}>
              <input type="search" placeholder="Enter a city" onChange={handleCityChange}/>
              <input className="submitButton" type="submit" value="Enter" />
              </form>
              </div>
            <WeatherInfo data={weatherData}/>
            <WeatherForecast city={weatherData.city}/>
          
              
      </div>
     
      
  );

  } else {
    search();
   return "Loading...";
  }

  

    
}