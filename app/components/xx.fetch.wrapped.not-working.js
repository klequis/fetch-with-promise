import * as u from '../lib/ke-utils';

"use-strict";
import 'isomorphic-fetch';

const urlIpInfo = 'http://ipinfo.io/json';
const APP_ID = 'cd605b9a7b8b517b82492ee7bf47a295';
const units = 'metric';
const city = '';

// http://api.openweathermap.org/data/2.5/weather?q=${city},us"&units=${units}&APPID=${APP_ID}

let ipinfoURL = 'https://ipinfo.io/json';
let openweathermapURLRoot = 'http://api.openweathermap.org/data/2.5/weather?'

/*
 * Problem: return value is undefined
 */

function weather(city) {

  return (function(city) {
    // start if
    if (city) {
      let url = `${openweathermapURLRoot}q=${city},us"&units=${units}&APPID=${APP_ID}`
      fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          console.log(json);
        });
    } else {
      fetch(ipinfoURL).then(function(response) {
        return response.json();
      })
        .then(function(json) {
          return `${openweathermapURLRoot}q=${json.city},us"&units=${units}&APPID=${APP_ID}`;
        })
        .then(function(url) {
          fetch(url)
            .then(function(response) {
              return response.json();
            })
            .then(function(json) {
              return json;
            })
        })
    };
    // end if
  })(city);
}

console.log(weather('danville'));
