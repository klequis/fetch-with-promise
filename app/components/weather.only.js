import * as u from '../lib/ke-utils';

"use-strict";
import 'isomorphic-fetch';

const APP_ID = 'cd605b9a7b8b517b82492ee7bf47a295';
const units = 'metric';
const openweathermapURLRoot = 'http://api.openweathermap.org/data/2.5/weather?';

export default (city) => {
  return ((city) => {
    if (city) {
      return fetch(`${openweathermapURLRoot}q=${city},us"&units=${units}&APPID=${APP_ID}`)
        .then((response) => {
          return response.json();
        });
    } else {
      return fetch('https://ipinfo.io/json')
        .then((ipinfo) => {
          return ipinfo.json();
        })
        .then((json) => {
          return json.city;
        })
        .then((city) => {
          return fetch(`${openweathermapURLRoot}q=${city},us"&units=${units}&APPID=${APP_ID}`)
            .then((response) => {
              return response.json();
            });
        });
    }
  })(city);
};
