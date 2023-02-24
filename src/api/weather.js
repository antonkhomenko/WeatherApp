
const WEATHER_API_KEY = 'f4136e69920a7086a04bbc10bde8660a';
const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather`;
const WEATHER_API_FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast/`;



export async function getWeather(lat, lon) {
    const response = await fetch(`${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    return response.json();
}


export async function getForecast(lat, lon) {
    const response = await fetch(`${WEATHER_API_FORECAST_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`);
    return response.json();
}



