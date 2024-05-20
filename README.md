# Weather App

## Overview

This Weather App is my first project using an API. It provides real-time weather information for different cities using the Weather API from RapidAPI - Weather API Ninjas. The app is built with HTML, JavaScript, and Bootstrap for a responsive and user-friendly interface.

## Features

- Fetches and displays current weather data for a specified city.
- Shows temperature, feels like temperature, humidity, wind speed, wind direction, sunrise, and sunset times.
- Responsive design using Bootstrap.

## Technologies Used

- **HTML**: Structure and content of the app.
- **JavaScript**: Fetching data from the API and updating the DOM.
- **Bootstrap**: Styling and responsive layout.
- **API**: [RapidAPI - Weather API Ninjas](https://rapidapi.com/weather-api-ninjas/api/weather-by-api-ninjas)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-app
   ```

3. Open `index.html` in your preferred web browser.

## Usage

1. Enter the name of the city in the input field.
2. Click the "Get Weather" button.
3. View the weather information displayed on the page.

## Code Snippet

```javascript
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "your-api-key-here",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
  }
};

const getWeather = (city) => {
  document.getElementById("cityName").innerHTML = city;

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      document.getElementById("temp").innerHTML = response.temp;
      document.getElementById("feels_like").innerHTML = response.feels_like;
      document.getElementById("humidity").innerHTML = response.humidity;
      document.getElementById("min_temp").innerHTML = response.min_temp;
      document.getElementById("max_temp").innerHTML = response.max_temp;
      document.getElementById("wind_speed").innerHTML = response.wind_speed;
      document.getElementById("wind_degrees").innerHTML = response.wind_degrees;
      document.getElementById("sunrise").innerHTML = response.sunrise;
      document.getElementById("sunset").innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(document.getElementById("city").value);
});

getWeather("Delhi");
```

## Screenshots

## Credits

- **API**: [RapidAPI - Weather API Ninjas](https://rapidapi.com/weather-api-ninjas/api/weather-by-api-ninjas)
- **Bootstrap**: [Bootstrap](https://getbootstrap.com/)

## License

This project is licensed under the MIT License.