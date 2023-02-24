export const location_options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f3a6e8dfebmsh58371d1429c5be6p155549jsnd060ef4d22b0',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};


export const LOCATION_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

export const getLocation = async (query) => {
    const response = await fetch(`${LOCATION_API_URL}?namePrefix=${query}`, location_options);
    const result = await response.json();
    return result;
}

