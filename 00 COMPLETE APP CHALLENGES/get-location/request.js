const getCountry = (countryCode) => {
  return fetch("http://restcountries.eu/rest/v2/all")
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch data");
      }
    })
    .then((data) => {
      return data.find((country) => country.alpha2Code === countryCode);
    });
};

// website ipinfo.io 
const getLocation = () => {
  return fetch("https://ipinfo.io/json?token=CODEHERE").then(
    (response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch location");
      }
    }
  );
};
