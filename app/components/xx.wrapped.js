import * as u from '../lib/ke-utils';

"use-strict";
import 'isomorphic-fetch';

const urlIpInfo = 'http://ipinfo.io/json';
const APP_ID = 'cd605b9a7b8b517b82492ee7bf47a295';
const units = 'metric';

export default function wrapIt(val) {

  return (function(val){
    // start if
      if (val) {
        u.log('val', val);
        return fetch(`https://ipinfo.io/${val}/json`)
          .then(function(response) {
            return response.json();
          });
      } else {
        return fetch('https://ipinfo.io/json')
          .then(function(response) {
            return response.json();
          })
          .then(function(json) {
            return json.city;
          })
          .then(function(city) {
            return city;
          })
      }
    // end if
  })(val);
}
/*
wrapIt(11).then(function(json) {
  console.log(json);
});
*/

/*
wrapped().then(function(json) {
  console.log(json);
});
*/
