async function getWeather () {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchText.value}&APPID=9cab0b810acb28ca5552aaac3bf1138a`, { mode: 'cors' });
  const weatherData = await response.json();

  console.log(weatherData);
  console.log(`${weatherData.name}, ${weatherData.sys.country}`);
  console.log(`${(weatherData.main.feels_like - 273.15).toFixed(1)}°C`);
  console.log(`${weatherData.main.humidity}%`);   
}

const searchText = document.querySelector('.search-text');
const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', () => {
        getWeather();
        searchText.value = "";
    });

               