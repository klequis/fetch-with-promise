import * as u from '../lib/ke-utils';

"use-strict";
import 'isomorphic-fetch';

const APP_ID = 'cd605b9a7b8b517b82492ee7bf47a295';
const units = 'metric';
const weatherURLRoot = 'http://api.openweathermap.org/data/2.5/weather?';
const forecastURLRoot = 'api.openweathermap.org/data/2.5/forecast?';

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
  Promise.all([
    fetch('http://ipinfo.io/216.58.192.14/json'),
    fetch(`http://ipinfo.io/json`)
  ])
  .then((responses) => {
    let r1 = responses[0];
    let r2 = responses[1];

    // responses.map(response => console.log(response.json()))
    // return [responses[0].json(), responses[1].json()];
    return [responses[0], responses[1]];
  })
  .then((json) => {
    // console.log(json);
    return json.map(j => j.json());
  })
  .catch(reason => {
    console.log('error', reason);
  })
}
