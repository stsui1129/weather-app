import renderData from './displayData';

async function getWeather (city) {
    try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9cab0b810acb28ca5552aaac3bf1138a`, { mode: 'cors' });
    const weatherData = await response.json();   
    console.log(weatherData);
    const processedData = processData(weatherData);
    renderData(processedData); 
    } catch(error) {
        console.error(error);
        };     
  }
  
  function processData (weatherData) {
  
    const myWeatherData = {city: weatherData.name,
                          country: weatherData.sys.country,
                          temperature: weatherData.main.temp,
                          humidity: weatherData.main.humidity,
                          pressure: weatherData.main.pressure}
  
    console.log(myWeatherData);                    
    return myWeatherData;
  }

export {getWeather};