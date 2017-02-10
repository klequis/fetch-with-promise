import * as u from '../lib/ke-utils';

"use-strict";
import 'isomorphic-fetch';

function wrapIt(val) {

  return (function(val){
    // start if
      if (true) {
        return fetch('https://ipinfo.io/json')
          .then(function(response) {
            return response.json();
          });
      } else {
        return 'b';
      }
    // end if
  })(val);
}
wrapIt(11).then(function(json) {
  console.log(json);
});
