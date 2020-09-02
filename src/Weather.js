import React, { useState } from "react";
import axios from "axios";
import './Weather.css';

export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/10d@2x.png`,
      date: "August 2, 2020"
    });
    // setTemperature();
    // setReady(true);
  }
  if (weatherData.ready){
    return(
      <div className="Weather">
          <div className="searchBox">
              <form>
              <input type="search" placeholder="Enter a city" />
              <input className="submitButton" type="submit" value="Enter" />
              </form>
              </div>
          <h1>{weatherData.city}</h1>
          <ul>
              <li className="currentDate">{weatherData.date}</li>
              <li className="currentTime">3:30</li>
          </ul>
      <div className="currentWeather">
    <div className="row">
      <div className="col-3 pl-5 pr-0">
        <div className="weatherTemperature">
  <span className="currentTemp">{Math.round(weatherData.temperature)}</span>
          <span className="degrees">
            <a href="/">°F</a> | <a href="/">°C</a>
          </span>
        </div>
        <div className="weatherDetails">
          <ul>
            <li>Wind: {Math.round(weatherData.wind)} mph</li>
            <li>Humidity: {weatherData.humidity}%</li>
          </ul>
        </div>
      </div>
      <div className="col-3 pr-2 pl-4">
        <img src={weatherData.iconUrl} alt ={weatherData.description}/>
      </div>
      <div className="col-6 weatherSaying">
        "{weatherData.description}"
      </div>
    </div>
  </div>
              
      </div>
     
      
  );

  } else {
    const apiKey = "b855a19b8fb3b4c4426ec0e293bf081b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=imperial&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

   return "Loading...";
  }

  

    
}