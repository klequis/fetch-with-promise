# fetch-with-promise
**Based on *webpack-javascript* **

Learning to use promises with fetch.
Goal is to perform a fetch that is pending.
More fool me - fetch returns a promise.

## Use case
Page has an edit box where the user can enter a city. On initial load ipinfo.io is used to get a guess at a default location (nope, no good on mobile) and weather will be returned for that city. After initial page load the user can type in a city name and weather will be returned for the entered city if found. If not found will just post a message (for now / this version)

### Case 1 App/Page Load
1. Fetch ipinfo and get 'city'
2. Fetch openweathermap to get weather for 'city'
3. Print response to page

### Case 2 User Enters a City Name
1. User enters a 'city' name and presses enter
2. Fetch openweathermap to get weather for 'city'
3. Print response to page

### Psudo
let city  = '';

if (city) 
  fetch(openweathermap?city)
else
  fetch(ipinfo)
  city = ipinfo.response.city
  fetch(openweathermap?city)
end

print to page

So what about this
fetch(ipinfo).then(
  if (!city) city = ipinfo.response.city
  fetch(openweathermap?city)
)

Question: How to do this so am not doing fetch to ipinfo when not needed?
