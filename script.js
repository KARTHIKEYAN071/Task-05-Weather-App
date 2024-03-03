const apiKey = '29f9dce87a1954e79528dc831467555b'; 

const searchButton = document.getElementById('search-button');
const locationInput = document.getElementById('location-input');
const weatherInfo = document.getElementById('weather-info');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    getWeather(location);
});

async function getWeather(location) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${apiKey}`);
        const weatherData = await response.json();

        const { main, name, weather } = weatherData;
        const { temp, feels_like, humidity } = main;
        console.log(weather[0]);
        const { description } = weather[0];

        weatherInfo.innerHTML = `
            <h2 style="font-size:40px;color:blue;">${name}</h2>
            <p style="font-size:30px;color:red;">Temperature: ${temp}°C</p>
            <p style="font-size:30px;color:green;">Feels like: ${feels_like}°C</p>
            <p style="font-size:30px;color:orangered;">Humidity: ${humidity}%</p>
            <p style="font-size:30px;color:black;">Condition: ${description}</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again.'+error+'</p>';
    }
}
