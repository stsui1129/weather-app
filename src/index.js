async function getWeather () {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchText.value}&APPID=9cab0b810acb28ca5552aaac3bf1138a`, { mode: 'cors' });
  const weatherData = await response.json();

  console.log(weatherData);

  const processedData = processData(weatherData);
  renderData(processedData);
  
}

const searchText = document.querySelector('.search-text');
const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', () => {
        getWeather();       
        searchText.value = "";
    });

function processData (weatherData) {

  const myWeatherData = {city: weatherData.name,
                        country: weatherData.sys.country,
                        temperature: weatherData.main.feels_like,
                        humidity: weatherData.main.humidity}

  console.log(myWeatherData);                    
  return myWeatherData;
}

function renderData(data) {
  const cityDiv = document.getElementById("city");
  const countryFlag = document.getElementById("flag");
  const temperatureDiv = document.getElementById("temperature");
  const humidityDiv = document.getElementById("humidity");

  cityDiv.textContent = data.city;
  countryFlag.src = `https://www.countryflags.io/${data.country}/flat/64.png`;
  temperatureDiv.textContent = `Temperature: ${data.temperature}°C`;
  humidityDiv.textContent = `Humidity: ${data.humidity}%`;
}

