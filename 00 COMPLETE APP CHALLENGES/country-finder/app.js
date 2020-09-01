// Making an HTTP request
// httpstatuses.com
// mdn http message
// https://restcountries.eu/rest/v2/all

const countryName = document.querySelector("#country-name");
const countryFlag = document.querySelector("#country-flag");

const countryISOcode = "jp";

// getCountry( countryISOcode.toUpperCase(), (error, country) => {
//   if (error) {
//     console.log(error);
//   } else {
//    countryName.textContent = (`Country name: ${country.name}`);

//   }
// });

// using Promises
getCountry(countryISOcode.toUpperCase()).then(
  (country) => {
    countryName.textContent = `Country Name: ${country.name}`;
  },
  (err) => {
    console.log(`Error: ${err}`);
  }
);