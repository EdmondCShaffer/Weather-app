import { useState, useEffect } from "react"
import axios from "axios"
import testData from '../testData.json'
import Toggle from "./Toggle"
import "./Weather.css"

function Weather() {
    const [city, setCity] = useState<string>('')
    const [weatherData, setWeatherData] = useState(() => testData)
    const [isCelsius, setIsCelsius] = useState(true);
    // const apiKey = 

    // Converts the Temp to Fahrenheit 
    const convertTemp = (temp: number) => {
        return isCelsius ? temp : (temp * 9 / 5 + 32);
    };

    const temperatureInCelsius = weatherData.data[0].temp
    const temperatureInFahrenheit = convertTemp(temperatureInCelsius)

    const handleToggleUnit = () => {
        setIsCelsius((prev) => !prev);
    };

    // TODO: Review API call Data seems to be incorrect temperature was wrong. May need different API? 

    // Weather API call
    // const fetchWeatherData = async (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault(); 
    //     try {
    //       if (city.trim() !== '') {
    //         const resp = await axios.get(`https://api.weatherbit.io/v2.0/current?city=${city}&country=US&key=${apiKey}&include=minutely`);
    //         setWeatherData(resp.data);
    //       }
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };

    // Sets city value from input
    const handleSetCity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
        console.log(city)
    }

    // TODO: 1. Add option fields to form State && || Country 2. Create componet for 5day forcast

    return (
        <>
            <div className="container">
                <form onSubmit={(e) => e.preventDefault()}>
                    <label>Current Weather</label>
                    <input type="text" value={city} onChange={handleSetCity} placeholder="Enter location to see current weather conditions" />
                    <button type="submit">Submit</button>
                </form>
                <div className="toggle-container">
                    <p className="temperature">Temperature: {temperatureInFahrenheit} {isCelsius ? '°C' : '°F'}</p>
                    <Toggle onToggle={handleToggleUnit} />
                </div>

            </div>
        </>
    )
}

export default Weather