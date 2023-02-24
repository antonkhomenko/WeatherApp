
export const createWeatherObj = (weather) => {
    const {feels_like, humidity, pressure, temp} = weather.main;
    let {description, icon} = weather.weather[0];
    icon = `/src/assets/icons/${icon}.svg`;
    const wind = weather['wind'].speed;
    const name = weather?.name;
    return {
        name: name,
        description: description,
        temp: Math.floor(+temp),
        icon: icon,
        details: {feels_like: Math.floor(feels_like), humidity, pressure, wind},
    }
}