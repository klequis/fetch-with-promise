import * as u from '../lib/ke-utils';

"use-strict";
import 'isomorphic-fetch';

const APP_ID = 'cd605b9a7b8b517b82492ee7bf47a295';
const units = 'metric';
const weatherURLRoot = 'http://api.openweathermap.org/data/2.5/weather?';
const forecastURLRoot = 'http://api.openweathermap.org/data/2.5/forecast?';

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
  let weatherURL = `${weatherURLRoot}q=${city},us&units=${units}&APPID=${APP_ID}`;
  u.log('weatherURL', weatherURL);
  let forecastURL = `${forecastURLRoot}q=${city},us&units=${units}&APPID=${APP_ID}`;
  u.log('forecastURL', forecastURL)
  return Promise.all([
    fetch(`${weatherURLRoot}q=${city},us&units=${units}&APPID=${APP_ID}`),
    fetch(`${forecastURLRoot}q=${city},us&units=${units}&APPID=${APP_ID}`)

    // fetch('http://ipinfo.io/json'),
    // fetch('http://ipinfo.io/json')
  ])
  .then(([fetch1, fetch2]) => {
    return [fetch1.json(), fetch2.json()];
  })
  .catch(reason => {
    console.log('error', reason);
  })
}
