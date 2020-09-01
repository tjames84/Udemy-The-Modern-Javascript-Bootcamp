const cityEl = document.querySelector("#city");
const region = document.querySelector("#region");
const country = document.querySelector("#country");

getLocation()
  .then((location) => {
    cityEl.textContent = `You are currently in ${location.city} ${location.region} ${location.country}!`;
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
