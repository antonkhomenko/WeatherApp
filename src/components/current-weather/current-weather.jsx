import classes from './current-weather.module.css';
import {useMemo} from "react";
import {createWeatherObj} from "../../helpers/createWeatherObj.js";
const CurrentWeather = ({weather}) => {

    const {name, description, temp, icon, details} = useMemo(() => {
        return createWeatherObj(weather);
    }, [weather]);



    return (
        <div className={classes.weather}>
            <p className={classes.temperature}>
                {temp}°
            </p>
            <img src={icon} alt="weather-icon" className={classes.weatherIcon}/>
            <div className={classes.locDet}>
                <p className={classes.details}>
                    <span>H:{details.humidity}°</span>
                    <span>L:{details.feels_like}°</span>
                </p>
                <p className={classes.locationName}>{name}</p>
            </div>
            <p className={classes.description}>{description}</p>
        </div>
    );
};

export default CurrentWeather;