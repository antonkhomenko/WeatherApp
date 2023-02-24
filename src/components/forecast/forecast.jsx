import classes from './forecast.module.css';
import chunk from 'lodash/chunk';
import {useEffect, useState} from "react";
import {createWeatherObj} from "../../helpers/createWeatherObj.js";
import WeeklyForecast from "./weeklyForecast.jsx";



function getTomorrowDate() {
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
    let tomorrowFormat = tomorrow.getFullYear() + '-' + '0' +(tomorrow.getMonth() + 1) + '-' + tomorrow.getDate() + ' 00:00:00';
    return tomorrowFormat;
}


const Forecast = ({data}) => {

    const [currentForecast, setCurrentForecast] = useState('hourly');

    const [hourlyForecast, setHourlyForecast] = useState([]);
    const [weeklyForecast, setWeeklyForecast] = useState([]);


    useEffect(() => {
        const tomorrowFormat = getTomorrowDate();
        const tomorrowIndex = data.list.findIndex(item => item['dt_txt'] === tomorrowFormat);
        const todayArray = data.list.slice(0, tomorrowIndex);

        let hForecast = todayArray.map(item => {
            const date = item['dt_txt'].slice(11, 16);
            const temp = Math.floor(item.main.temp);
            return {name: date, temp};
        })

        setHourlyForecast(hForecast);

        let wForecast = data.list.slice(tomorrowIndex);
        wForecast = chunk(wForecast, 8);
        wForecast = wForecast.map(arr => {
            let date = arr[0]['dt_txt'].slice(0, 10).split('-').reverse().join('-');
            const temp = Math.floor(arr[0].main.temp);
            return {name: date, temp: temp};
        });
        setWeeklyForecast(wForecast);
    }, [data])

    return (
        <div className={classes.container}>
            <div className={classes.nonBlur}>
                <div className={classes.header}>
                    <button
                        className={currentForecast === 'hourly' ? classes.activeForecast : ''}
                        onClick={() => setCurrentForecast('hourly')}
                    >
                        Hourly forecast
                    </button>
                    <button
                        className={currentForecast === 'weekly' ? classes.activeForecast : ''}
                        onClick={() => setCurrentForecast('weekly')}
                    >
                        Weekly forecast
                    </button>
                </div>
                <WeeklyForecast foreCastData={currentForecast === 'hourly' ? hourlyForecast : weeklyForecast}/>

            </div>
        </div>
    );
};

export default Forecast;