import * as u from '../lib/ke-utils';
import Weather from './weather'
"use-strict";
// 'http://ipinfo.io/216.58.192.14/json'
let ip = '216.58.192.14';
let noip = '';
let city = 'danville';

Weather('').then(function(json) {
  console.log('final', json);
});
