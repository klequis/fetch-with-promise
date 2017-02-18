"use-strict";

import isomorphic-fetch;
import * as u from '../lib/ke-utils';


u.h1('2.js');

export const toJson = (res) => res.json();

export const checkStatus = (res) => {
  const { status } = res;
  if (status >= 200 && status < 300) {
    return res;
  }

  return Promise.reject(new Error(res.statusText || res.status));
};


export const fetchJson = (url) => {
  fetch(url)
    .then(checkStatus)
    .then(toJson)
};

export default {
  weather: {
    fetch() {
      return fetchJson('http://ipinfo.io/json')
        .then()
    }
  },
}
