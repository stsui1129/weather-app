import {getWeather} from './fetchData';

const searchText = document.querySelector('.search-text');
  const searchBtn = document.querySelector('.search-btn');
      searchBtn.addEventListener('click', () => {
          getWeather(searchText.value);       
          searchText.value = "";
      });

getWeather("Christchurch");
