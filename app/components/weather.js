import * as u from '../lib/ke-utils';

"use-strict";
import 'isomorphic-fetch';

const APP_ID = 'cd605b9a7b8b517b82492ee7bf47a295';
const units = 'metric';
const openweathermapURLRoot = 'http://api.openweathermap.org/data/2.5/weather?';

export default (city) => {
  return ((city) => {
    if (!city) {
      return getIpInfoCity()
        .then((city) => {
          return getWeather(city);
        })
    } else {
      return getWeather(city);
    }
  })(city);
};

function getIpInfoCity() {
  return fetch('https://ipinfo.io/json').then((response) => {
    return response.json().then((json) => {
      return json.city;
    })
  });
}

function getWeather(city) {
  return fetch(`${openweathermapURLRoot}q=${city},us&units=${units}&APPID=${APP_ID}`)
    .then((response) => {
      return response.json();
    })
}
