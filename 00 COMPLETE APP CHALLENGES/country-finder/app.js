// Making an HTTP request
// httpstatuses.com
// mdn http message
// https://restcountries.eu/rest/v2/all

getCountry("JP", (error, country) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Country name: ${country.name}`);
  }
});