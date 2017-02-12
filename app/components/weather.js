import * as u from '../lib/ke-utils';

"use-strict";
import 'isomorphic-fetch';

const urlIpInfo = 'http://ipinfo.io/json';
const APP_ID = 'cd605b9a7b8b517b82492ee7bf47a295';
const units = 'metric';
let openweathermapURLRoot = 'http://api.openweathermap.org/data/2.5/weather?'

export default (city) => {
  return (function(city){
    if (city) {
      return fetch(`${openweathermapURLRoot}q=${city},us"&units=${units}&APPID=${APP_ID}`)
        .then(function(response) {
          return response.json();
        });
    } else {
      return fetch('https://ipinfo.io/json')
        .then(function(ipinfo) {
          return ipinfo.json();
        })
        .then(function(json) {
          return json.city;
        })
        .then(function(city) {
          return fetch(`${openweathermapURLRoot}q=${city},us"&units=${units}&APPID=${APP_ID}`)
            .then(function(response) {
              return response.json();
            })
        })
    }
  })(city);
}
