async function getWeather () {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=christchurch&APPID=9cab0b810acb28ca5552aaac3bf1138a', { mode: 'cors' });
  const weatherData = await response.json();
  
  // const object = {"City": `${weatherData.name}`,
  //                 "Country": `${weatherData.sys.country}`,
  //                 "Temperature": `${weatherData.main.feels_like}`,
  //                 "Humidity": `${weatherData.main.humidity}`
  //               }

  // return object;


  console.log(weatherData);
  console.log(weatherData.name);
  console.log(weatherData.sys.country);
  console.log(`${(weatherData.main.feels_like - 273.15).toFixed(1)}°C`);
  console.log(`${weatherData.main.humidity}%`);
    
}

getWeather();
