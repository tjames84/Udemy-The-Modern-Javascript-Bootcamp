// Making an HTTP request
// httpstatuses.com
// mdn http message
// https://restcountries.eu/rest/v2/all

const countryName = document.querySelector('#country-name');
const countryFlag = document.querySelector('#country-flag');

const countryISOcode = "us";

getCountry( countryISOcode.toUpperCase(), (error, country) => {
  if (error) {
    console.log(error);
  } else {
   countryName.textContent = (`Country name: ${country.name}`);
   
  }
});