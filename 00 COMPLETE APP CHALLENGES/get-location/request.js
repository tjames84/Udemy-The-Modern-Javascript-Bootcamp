
const getCurrentCountry = async () => {
  const location = await getLocation();
  return getCountry(location.country);
};

const getCountry = async (countryCode) => {
  const response = await fetch("http://restcountries.eu/rest/v2/all");

  if (response.status === 200) {
    const data = await response.json();
    return data.find((country) => country.alpha2Code === countryCode);
  } else {
    throw new Error("Unable to fetch data");
  }
};

// website ipinfo.io
const getLocation = async () => {
  const response = await fetch("https://ipinfo.io/json?token=CODEHERE");

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("Unable to get current location");
  }
};
