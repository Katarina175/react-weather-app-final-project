import React, { useState } from "react";


export default function WeatherTemp(props){
    const [unit, setUnit] = useState("fahrenheit");
    function convertToC(event){
        event.preventDefault();
        setUnit("celsius");

    }
    function convertToF(event){
        event.preventDefault();
        setUnit("fahrenheit");

    }
    if (unit === "fahrenheit") {
        return (
            <div className="WeatherTemp">
                <span className="currentTemp">{Math.round(props.fahrenheit)}
                </span>
                <span className="degrees">
                    °F | <a href="/" onClick={convertToC}>°C</a>
                </span>
            </div>
    
        );
    }else {
    let celsius = ((props.fahrenheit - 32)* 5 / 9);
    return (
            <div className="WeatherTemp">
                <span className="currentTemp">{Math.round(celsius)}
                </span>
                <span className="degrees">
                <a href="/" onClick={convertToF}>°F </a>| °C
                </span>
            </div>
    
        
        );
    }
    
}  