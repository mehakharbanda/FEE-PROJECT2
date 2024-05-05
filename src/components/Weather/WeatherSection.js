import React, { useState } from 'react';
import './WeatherSection.css';

const WeatherSection = () => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [weatherData, setWeatherData] = useState([
        { day: 'Monday', temperature: '25°C', status: 'Partly Cloudy', icon: 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png' },
        { day: 'Tuesday', temperature: '20°C', status: 'Thunderstorm', icon: 'https://www.transparentpng.com/thumb/thunderstorm/collection-of-thunder-storm-icons-png-19.png' },
        { day: 'Wednesday', temperature: '30°C', status: 'Cloudy', icon: 'https://freesvg.org/img/sivvus_weather_symbols_3.png' }
    ]);

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
        setWeatherData([
            { day: 'Monday', temperature: '25°C', status: 'Partly Cloudy', icon: 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png' },
            { day: 'Tuesday', temperature: '20°C', status: 'Thunderstorm', icon: 'https://www.transparentpng.com/thumb/thunderstorm/collection-of-thunder-storm-icons-png-19.png' },
            { day: 'Wednesday', temperature: '30°C', status: 'Cloudy', icon: 'https://freesvg.org/img/sivvus_weather_symbols_3.png' }
        ]);
    };

    return (
        <section className="weather1">
            <div className="weather-text">
                <h2>Weather</h2>
            </div>
            <div className="dropdown">
                <label htmlFor="country">Select Country</label>
                <select 
                    id="country" 
                    name="country-preference" 
                    required
                    value={selectedCountry}
                    onChange={handleCountryChange}
                >
                    <option value="">Choose country you want to visit</option>
                    <option value="1">United States</option>
                    <option value="2">India</option>
                    <option value="3">Amsterdam</option>
                </select>
            </div>
            <div className="weather-section">
                {weatherData.map((weather, index) => (
                    <div className="weather-card" key={index}>
                        <div className="weather-info">
                            <span className="temperature">{weather.temperature}</span>
                            <span className="day">{weather.day}</span>
                        </div>
                        <img src={weather.icon} alt={weather.status} className="icon" />
                        <h5 className="status">{weather.status}</h5>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WeatherSection;
