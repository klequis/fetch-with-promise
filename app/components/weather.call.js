import * as u from '../lib/ke-utils';
import Weather from './weather'
"use-strict";




Weather('livermore').then((responses) => {
  responses[0].then((json) => {
    console.log('json0', json);
  });
  responses[1].then((json) => {
    let days = json.list;
    let days1 = days.map((day) => {
      let o = {
        date: day.dt,
        temp: day.main.temp,
        temp_min: day.main.temp_min,
        conditions: day.weather[0].main,
        conditions_icon: day.weather[0].icon,
        wind_speed: day.wind.speed,
      };
      return o;
    });
    u.log('days1', days1);
  });
})


/*
function getWeather() {
  return Promise.all([
    fetch('http://ipinfo.io/216.58.192.14/json'),
    fetch(`http://ipinfo.io/json`)
  ])
  .then(([a1, a2]) => {
    return [a1.json(), a2.json()];
  })
  .catch(reason => {
    console.log('error', reason);
  })
}

console.log('hi');
getWeather().then((ret) => {
  ret[0].then((json) => {
    console.log('json0', json);
  });
  ret[1].then((json) => {
    console.log('json1', json);
  });
});
*/
/*
.then(([b1, b2]) => {
  let c1 = b1;
  let c2 = b2;
  console.log('c1', c1.resolve());
  console.log('c2', c2.resolve());
})
*/
