import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import Weather from "./Weather";
import WeatherIcon from "./WeatherIcon";
import WeatherForecastPreview from "./WeatherForecastPreview";



export default function WeatherForecast(props){
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleForecastResponse(response){
        setForecast(response.data);
        setLoaded(true);

        console.log(response.data);
    }
    if (loaded && props.city === forecast.city.name){
        return(
        <div className="WeatherForecast row">
           
            
            <WeatherForecastPreview data={forecast.list[0]} />   
            <WeatherForecastPreview data={forecast.list[1]} />   
            <WeatherForecastPreview data={forecast.list[2]} />
            <WeatherForecastPreview data={forecast.list[3]} />   
            <WeatherForecastPreview data={forecast.list[4]} /> 
            <WeatherForecastPreview data={forecast.list[5]} />   
  



            
        </div>

        );
         
       
    } else {
        let apiKey = "b855a19b8fb3b4c4426ec0e293bf081b";
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`
        axios.get(url).then(handleForecastResponse);
        return null;

    }

    
}