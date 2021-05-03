/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("async function getWeather () {\n  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=christchurch&APPID=9cab0b810acb28ca5552aaac3bf1138a', { mode: 'cors' });\n  const weatherData = await response.json();\n  \n  // const object = {\"City\": `${weatherData.name}`,\n  //                 \"Country\": `${weatherData.sys.country}`,\n  //                 \"Temperature\": `${weatherData.main.feels_like}`,\n  //                 \"Humidity\": `${weatherData.main.humidity}`\n  //               }\n\n  // return object;\n\n\n  console.log(weatherData);\n  console.log(weatherData.name);\n  console.log(weatherData.sys.country);\n  console.log(`${(weatherData.main.feels_like - 273.15).toFixed(1)} °C`);\n  console.log(`${weatherData.main.humidity}%`);\n    \n}\n\ngetWeather();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;