"use-strict";
import 'isomorphic-fetch';

// const APP_ID = 'cd605b9a7b8b517b82492ee7bf47a295';
// const units = 'metric';
// const openweathermapURLRoot = 'http://api.openweathermap.org/data/2.5/weather?';
//
// `${openweathermapURLRoot}q=${city},us&units=${units}&APPID=${APP_ID}`

let url = 'http://api.openweathermap.org/data/2.5/weather?q=dublin,us&units=metric&APPID=cd605b9a7b8b517b82492ee7bf47a295'

learnFetch().then(function(json) {
   console.log('final', json)
})


function learnFetch() {
  return fetch(url)
    .then((response) => {
      return response.json()
    })
}





  // Weather('danville').then(function(json) {
  //   console.log('final', json);
  // });


function getIpInfoCity() {
  return fetch('https://ipinfo.io/json').then((response) => {
    return response.json().then((json) => {
      return json.city;
    })
  });
}
