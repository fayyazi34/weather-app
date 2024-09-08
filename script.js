// script.js

document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'YOUR_API_KEY'; // Ganti dengan API Key OpenWeather
    const searchButton = document.getElementById('search-btn');
    const cityInput = document.getElementById('city-input');
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');

    searchButton.addEventListener('click', function() {
        const city = cityInput.value;
        if (city) {
            fetchWeatherData(city);
        }
    });

    function fetchWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    cityName.textContent = `Weather in ${data.name}`;
                    temperature.textContent = `Temperature: ${data.main.temp}°C`;
                    description.textContent = `Description: ${data.weather[0].description}`;
                } else {
                    cityName.textContent = 'City not found';
                    temperature.textContent = '';
                    description.textContent = '';
                }
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                cityName.textContent = 'Error fetching data';
                temperature.textContent = '';
                description.textContent = '';
            });
    }
});
