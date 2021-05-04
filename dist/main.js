/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/displayData.js":
/*!****************************!*\
  !*** ./src/displayData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction renderData(data) {\n    const cityDiv = document.getElementById(\"city\");\n    const countryFlag = document.getElementById(\"flag\");\n    const temperatureDiv = document.getElementById(\"temperature\");\n    const humidityDiv = document.getElementById(\"humidity\");\n    const pressureDiv = document.getElementById(\"pressure\");\n  \n    cityDiv.textContent = data.city;\n    countryFlag.src = `https://www.countryflags.io/${data.country}/flat/64.png`;\n    temperatureDiv.textContent = `${(data.temperature - 273.15).toFixed(1)}°C`;\n    humidityDiv.textContent = `Humidity: ${data.humidity}%`;\n    pressureDiv.textContent = `Pressure: ${data.pressure}hPa`;\n  }\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderData);\n\n//# sourceURL=webpack://weather-app/./src/displayData.js?");

/***/ }),

/***/ "./src/fetchData.js":
/*!**************************!*\
  !*** ./src/fetchData.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeather\": () => (/* binding */ getWeather)\n/* harmony export */ });\n/* harmony import */ var _displayData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayData */ \"./src/displayData.js\");\n\n\nasync function getWeather (city) {\n    try {\n    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9cab0b810acb28ca5552aaac3bf1138a`, { mode: 'cors' });\n    const weatherData = await response.json();   \n    console.log(weatherData);\n    const processedData = processData(weatherData);\n    (0,_displayData__WEBPACK_IMPORTED_MODULE_0__.default)(processedData); \n    } catch(error) {\n        console.error(error);\n        };\n      \n  }\n  \n  function processData (weatherData) {\n  \n    const myWeatherData = {city: weatherData.name,\n                          country: weatherData.sys.country,\n                          temperature: weatherData.main.temp,\n                          humidity: weatherData.main.humidity,\n                          pressure: weatherData.main.pressure}\n  \n    console.log(myWeatherData);                    \n    return myWeatherData;\n  }\n\n\n\n//# sourceURL=webpack://weather-app/./src/fetchData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData */ \"./src/fetchData.js\");\n\n\nconst searchText = document.querySelector('.search-text');\n  const searchBtn = document.querySelector('.search-btn');\n      searchBtn.addEventListener('click', () => {\n          (0,_fetchData__WEBPACK_IMPORTED_MODULE_0__.getWeather)(searchText.value);       \n          searchText.value = \"\";\n      });\n\n(0,_fetchData__WEBPACK_IMPORTED_MODULE_0__.getWeather)(\"Christchurch\");\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;