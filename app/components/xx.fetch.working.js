import * as u from '../lib/ke-utils';

"use-strict";
import 'isomorphic-fetch';


function wrapIt(val) {

  return (function(val){
      if (val === 11) {
        return 'a';
      } else {
        return 'b';
      }
  })(val);
}
console.log(wrapIt(11)); // 1


/* ******* GOOD
const urlIpInfo = 'http://ipinfo.io/json';
const APP_ID = 'cd605b9a7b8b517b82492ee7bf47a295';
const units = 'metric';
const city = '';

// http://api.openweathermap.org/data/2.5/weather?q=${city},us"&units=${units}&APPID=${APP_ID}

let ipinfoURL = 'https://ipinfo.io/json';
let openweathermapURLRoot = 'http://api.openweathermap.org/data/2.5/weather?'

const weather = (function(city) {
  return city;
})();

console.log(weather('some city'));

/*
// console.log(ipinfoURL);
// console.log(openweathermapURL);
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
          console.log(json);
        })
    })
};
GOOD *** */



/*
 * This works but isn't necessary because fetch is
   already a promise.
 */
 /*
function doFetch(url) {
  return new Promise(function(resolve, reject) {
    let err = false;
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        resolve(json);
      });
    if (err) {
      regect("Oh no!")
    }
  });
}
let ipinfo = doFetch('https://ipinfo.io/json');
console.log(ipinfo);
ipinfo.then(function(json) {
  console.log(json);
});
*/

/*
 * This is the api calls from my weather app.
 * There are two conditions:
 *   Case 1) App load: user has not typed in a city name so 'userCity' is an empty string
 *   Case 2) User has typed in a city so 'userCity' has a value which is a valid city name
 * For Case 1 two api calls are sent. The first is to ipinfo.io to get city name based on
     the users ip address. The second is to openweathermap to get the weather.
 * For Case 2 the call to openweathermap is done using the value of userCity
 *
 * Problem: It works but all the code for the fetch to openweathermap is repeated.
 *   The promise is being used to make the fetch to openweather wait for the fetch
 *   to ipinfo.io. If promise is not used then call to openweathermap is sent
 *   before the city name from ipinfo is returned so results in an error.

const urlIpInfo = 'http://ipinfo.io/json';
const APP_ID = 'cd605b9a7b8b517b82492ee7bf47a295';
const units = 'metric';
const userCity = '';

if (userCity) {
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${userCity},us"&units=${units}&APPID=${APP_ID}`;
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
    });
} else {
  fetch(urlIpInfo)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${json.city},us"&units=${units}&APPID=${APP_ID}`;
      fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          console.log(json);
        })
    });
}
*/
