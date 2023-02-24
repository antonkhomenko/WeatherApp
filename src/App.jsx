import './styles/app.css';
import Search from "./components/search/search.jsx";
import CurrentWeather from "./components/current-weather/current-weather.jsx";
import {getForecast, getWeather} from "./api/weather.js";
import {useState} from "react";
import Forecast from "./components/forecast/forecast.jsx";

const App = () => {

    const [currentWeather, setCurrentWeather] = useState(null);
    const [currentForecast, setCurrentForecast] = useState([]);

    const handleOnSearchChange = async (searchData) => {
        const [lat, lon] = searchData.value;
        const weatherData = await getWeather(lat, lon);
        const forecastData = await getForecast(lat, lon);
        setCurrentWeather({...weatherData, name: searchData.label});
        setCurrentForecast(forecastData);
    }



    return (
        <div className='container'>
            <Search onSearchChange={handleOnSearchChange}/>

            {
                currentWeather && (
                    <div className='weather-content'>
                        <CurrentWeather weather={currentWeather}/>
                        <Forecast data={currentForecast}/>
                    </div>
                )
            }
            {/*<CurrentWeather weather={currentWeather}/>*/}
        </div>
    );
};

export default App;