function renderData(data) {
    const cityDiv = document.getElementById("city");
    const countryFlag = document.getElementById("flag");
    const temperatureDiv = document.getElementById("temperature");
    const humidityDiv = document.getElementById("humidity");
    const pressureDiv = document.getElementById("pressure");
  
    cityDiv.textContent = data.city;
    countryFlag.src = `https://www.countryflags.io/${data.country}/flat/64.png`;
    temperatureDiv.textContent = `${(data.temperature - 273.15).toFixed(1)}°C`;
    humidityDiv.textContent = `Humidity: ${data.humidity}%`;
    pressureDiv.textContent = `Pressure: ${data.pressure}hPa`;
  }

export default renderData;