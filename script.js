const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c6c3af1a94mshe8c383b3fbdb9fap180249jsn74cc8137265b',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    document.getElementById('cityName').innerHTML = city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)
            document.getElementById('temp').innerHTML = response.temp;
            document.getElementById('temp2').innerHTML = response.temp;
            document.getElementById('feels_like').innerHTML = response.feels_like;
            document.getElementById('humidity').innerHTML = response.humidity;
            document.getElementById('humidity2').innerHTML = response.humidity;
            document.getElementById('min_temp').innerHTML = response.min_temp;
            document.getElementById('max_temp').innerHTML = response.max_temp;
            document.getElementById('wind_speed').innerHTML = response.wind_speed;
            document.getElementById('wind_speed2').innerHTML = response.wind_speed;
            document.getElementById('wind_degrees').innerHTML = response.wind_degrees;
            document.getElementById('sunrise').innerHTML = response.sunrise;
            document.getElementById('sunset').innerHTML = response.sunset;
        })
        .catch(err => console.error(err));
}

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault()
    getWeather(document.getElementById('city').value)
})

// Initial weather data for Delhi
getWeather("Delhi")



// Mumbai weather data
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
    .then(response => response.json())
    .then(response => {
        console.log(response);

        const cloudPctMumbaiElem = document.getElementById('cloud_pct_mumbai');
        const tempMumbaiElem = document.getElementById('temp_mumbai');
        const feelsLikeMumbaiElem = document.getElementById('feels_like_mumbai');
        const humidityMumbaiElem = document.getElementById('humidity_mumbai');
        const minTempMumbaiElem = document.getElementById('min_temp_mumbai');
        const maxTempMumbaiElem = document.getElementById('max_temp_mumbai');
        const windSpeedMumbaiElem = document.getElementById('wind_speed_mumbai');
        const windDegreesMumbaiElem = document.getElementById('wind_degrees_mumbai');
        const sunriseMumbaiElem = document.getElementById('sunrise_mumbai');
        const sunsetMumbaiElem = document.getElementById('sunset_mumbai');

        if (!cloudPctMumbaiElem || !tempMumbaiElem || !feelsLikeMumbaiElem || !humidityMumbaiElem || !minTempMumbaiElem || !maxTempMumbaiElem || !windSpeedMumbaiElem || !windDegreesMumbaiElem || !sunriseMumbaiElem || !sunsetMumbaiElem) {
            console.error('One or more elements for Mumbai weather are missing in the HTML.');
            return;
        }

        cloudPctMumbaiElem.innerHTML = response.cloud_pct;
        tempMumbaiElem.innerHTML = response.temp;
        feelsLikeMumbaiElem.innerHTML = response.feels_like;
        humidityMumbaiElem.innerHTML = response.humidity;
        minTempMumbaiElem.innerHTML = response.min_temp;
        maxTempMumbaiElem.innerHTML = response.max_temp;
        windSpeedMumbaiElem.innerHTML = response.wind_speed;
        windDegreesMumbaiElem.innerHTML = response.wind_degrees;
        sunriseMumbaiElem.innerHTML = response.sunrise;
        sunsetMumbaiElem.innerHTML = response.sunset;
    })
    .catch(err => console.error(err));



// Madhya Pradesh weather data
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Madhya Pradesh', options)
    .then(response => response.json())
    .then(response => {
        console.log(response);

        const cloudPctMpElem = document.getElementById('cloud_pct_mp');
        const tempMpElem = document.getElementById('temp_mp');
        const feelsLikeMpElem = document.getElementById('feels_like_mp');
        const humidityMpElem = document.getElementById('humidity_mp');
        const minTempMpElem = document.getElementById('min_temp_mp');
        const maxTempMpElem = document.getElementById('max_temp_mp');
        const windSpeedMpElem = document.getElementById('wind_speed_mp');
        const windDegreesMpElem = document.getElementById('wind_degrees_mp');
        const sunriseMpElem = document.getElementById('sunrise_mp');
        const sunsetMpElem = document.getElementById('sunset_mp');

        if (!cloudPctMpElem || !tempMpElem || !feelsLikeMpElem || !humidityMpElem || !minTempMpElem || !maxTempMpElem || !windSpeedMpElem || !windDegreesMpElem || !sunriseMpElem || !sunsetMpElem) {
            console.error('One or more elements for Mp weather are missing in the HTML.');
            return;
        }

        cloudPctMpElem.innerHTML = response.cloud_pct;
        tempMpElem.innerHTML = response.temp;
        feelsLikeMpElem.innerHTML = response.feels_like;
        humidityMpElem.innerHTML = response.humidity;
        minTempMpElem.innerHTML = response.min_temp;
        maxTempMpElem.innerHTML = response.max_temp;
        windSpeedMpElem.innerHTML = response.wind_speed;
        windDegreesMpElem.innerHTML = response.wind_degrees;
        sunriseMpElem.innerHTML = response.sunrise;
        sunsetMpElem.innerHTML = response.sunset;
    })
    .catch(err => console.error(err));



// Chennai weather data
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
    .then(response => response.json())
    .then(response => {
        console.log(response);

        const cloudPctchennaiElem = document.getElementById('cloud_pct_chennai');
        const tempchennaiElem = document.getElementById('temp_chennai');
        const feelsLikechennaiElem = document.getElementById('feels_like_chennai');
        const humiditychennaiElem = document.getElementById('humidity_chennai');
        const minTempchennaiElem = document.getElementById('min_temp_chennai');
        const maxTempchennaiElem = document.getElementById('max_temp_chennai');
        const windSpeedchennaiElem = document.getElementById('wind_speed_chennai');
        const windDegreeschennaiElem = document.getElementById('wind_degrees_chennai');
        const sunrisechennaiElem = document.getElementById('sunrise_chennai');
        const sunsetchennaiElem = document.getElementById('sunset_chennai');

        if (!cloudPctchennaiElem || !tempchennaiElem || !feelsLikechennaiElem || !humiditychennaiElem || !minTempchennaiElem || !maxTempchennaiElem || !windSpeedchennaiElem || !windDegreeschennaiElem || !sunrisechennaiElem || !sunsetchennaiElem) {
            console.error('One or more elements for Chennai weather are missing in the HTML.');
            return;
        }

        cloudPctchennaiElem.innerHTML = response.cloud_pct;
        tempchennaiElem.innerHTML = response.temp;
        feelsLikechennaiElem.innerHTML = response.feels_like;
        humiditychennaiElem.innerHTML = response.humidity;
        minTempchennaiElem.innerHTML = response.min_temp;
        maxTempchennaiElem.innerHTML = response.max_temp;
        windSpeedchennaiElem.innerHTML = response.wind_speed;
        windDegreeschennaiElem.innerHTML = response.wind_degrees;
        sunrisechennaiElem.innerHTML = response.sunrise;
        sunsetchennaiElem.innerHTML = response.sunset;
    })
    .catch(err => console.error(err));



// Kolkata weather data
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
    .then(response => response.json())
    .then(response => {
        console.log(response);

        const cloudPctKolkataElem = document.getElementById('cloud_pct_Kolkata');
        const tempKolkataElem = document.getElementById('temp_Kolkata');
        const feelsLikeKolkataElem = document.getElementById('feels_like_Kolkata');
        const humidityKolkataElem = document.getElementById('humidity_Kolkata');
        const minTempKolkataElem = document.getElementById('min_temp_Kolkata');
        const maxTempKolkataElem = document.getElementById('max_temp_Kolkata');
        const windSpeedKolkataElem = document.getElementById('wind_speed_Kolkata');
        const windDegreesKolkataElem = document.getElementById('wind_degrees_Kolkata');
        const sunriseKolkataElem = document.getElementById('sunrise_Kolkata');
        const sunsetKolkataElem = document.getElementById('sunset_Kolkata');

        if (!cloudPctKolkataElem || !tempKolkataElem || !feelsLikeKolkataElem || !humidityKolkataElem || !minTempKolkataElem || !maxTempKolkataElem || !windSpeedKolkataElem || !windDegreesKolkataElem || !sunriseKolkataElem || !sunsetKolkataElem) {
            console.error('One or more elements for Kolkata weather are missing in the HTML.');
            return;
        }

        cloudPctKolkataElem.innerHTML = response.cloud_pct;
        tempKolkataElem.innerHTML = response.temp;
        feelsLikeKolkataElem.innerHTML = response.feels_like;
        humidityKolkataElem.innerHTML = response.humidity;
        minTempKolkataElem.innerHTML = response.min_temp;
        maxTempKolkataElem.innerHTML = response.max_temp;
        windSpeedKolkataElem.innerHTML = response.wind_speed;
        windDegreesKolkataElem.innerHTML = response.wind_degrees;
        sunriseKolkataElem.innerHTML = response.sunrise;
        sunsetKolkataElem.innerHTML = response.sunset;
    })
    .catch(err => console.error(err));
