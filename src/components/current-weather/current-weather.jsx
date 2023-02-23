import classes from './current-weather.module.css';
import {useMemo} from "react";
const CurrentWeather = ({weather}) => {

    const {name, description, temp, icon, details} = useMemo(() => {
        const {feels_like, humidity, pressure, temp} = weather.main;
        let {main, icon} = weather.weather[0];
        icon = `/public/icons/${icon}.png`;
        const wind = weather['wind'].speed;
        const name = weather.query;
        return {
            name: name,
            description: main,
            temp: temp,
            icon: icon,
            details: {feels_like, humidity, pressure, wind},
        }
    }, [weather]);



    return (
        <div className={classes.weather}>

        </div>
    );
};

export default CurrentWeather;