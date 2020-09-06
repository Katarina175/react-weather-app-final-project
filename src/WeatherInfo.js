import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherTemp from "./WeatherTemp";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
    return <div className="WeatherInfo">
           <h1>{props.data.city}</h1>
          <ul>
              <li> <FormattedDate date={props.data.date} /></li>
              <li> <FormattedTime time={props.data.time} /></li>
          </ul>
      <div className="currentWeather">
    <div className="row">
      <div className="col-3 pl-5 pr-0">
        <div className="weatherTemperature">
        <WeatherTemp fahrenheit={props.data.temperature}/>

  {/* <span className="currentTemp">{Math.round(props.data.temperature)}</span>
          <span className="degrees">
            <a href="/">°F</a> | <a href="/">°C</a>
          </span> */}
        </div>
        <div className="weatherDetails">
          <ul>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
            <li>Humidity: {props.data.humidity}%</li>
          </ul>
        </div>
      </div>
      
      <div className="col-3 pr-2 pl-4">
      <WeatherIcon code={props.data.icon} />
      </div>
      <div className="col-6 weatherSaying">
        "{props.data.description}"
      </div>
    </div>
  </div>
    </div>;
}