// Making an HTTP request
// httpstatuses.com
// mdn http message
// https://restcountries.eu/rest/v2/all

const countryName = document.querySelector("#country-name");
const countryFlag = document.querySelector("#country-flag");

const countryISOcode = "us";

getCountry(countryISOcode.toUpperCase())
  .then((country) => {
    countryName.textContent = `Country Name: ${country.name}`;
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

getCurrentCountry()
  .then((country) => {
    console.log(country.name);
  })
  .catch((error) => {
    console.log(error);
  });

// OLD *************************************************************

// getCountry( countryISOcode.toUpperCase(), (error, country) => {
//   if (error) {
//     console.log(error);
//   } else {
//    countryName.textContent = (`Country name: ${country.name}`);

//   }
// });

// using Promises
// getCountry(countryISOcode.toUpperCase()).then(
//   (country) => {
//     countryName.textContent = `Country Name: ${country.name}`;
//   },
//   (err) => {
//     console.log(`Error: ${err}`);
//   }
// );
