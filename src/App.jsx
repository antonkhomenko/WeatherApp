import './styles/app.css';
import Search from "./components/search/search.jsx";
import CurrentWeather from "./components/current-weather/current-weather.jsx";
import {getWeather} from "./api/weather.js";
import {useState} from "react";

const App = () => {

    const [currentWeather, setCurrentWeather] = useState(null);

    const handleOnSearchChange = (searchData) => {
        const query = searchData.label;
        const [lat, lon] = searchData.value.split(' ');
        const data = getWeather(lat, lon);
        data.then(res => setCurrentWeather({...res, query}));
    }



    return (
        <div className='container'>
            <Search />
            {
                currentWeather && <CurrentWeather weather={currentWeather}/>
            }
            {/*<CurrentWeather weather={currentWeather}/>*/}
        </div>
    );
};

export default App;