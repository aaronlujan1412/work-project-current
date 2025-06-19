const mockData = {
  ip:"123.123.12.123",
  country_name: "United States",
  city: "Salt Lake",
  zip: "84128"
}

const divs = {
  ip: document.getElementById("ip"),
  location: document.getElementById("location"),
  zip: document.getElementById("zip"),
};

const apiKey = "6c05027224217364784994e52646e49d";

let ip = "";
let country = "";
let city = "";
let zip = "";

const useMock = true;

switch (useMock) {
  case true:
    ip = mockData.ip;
    country = mockData.country_name;
    city = mockData.city;
    zip = mockData.zip;
    break;
  case false:
    fetch(`https://api.ipstack.com/172.83.7.250?access_key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        ip = data.ip;
        country = data.country_name;
        city = data.city;
        zip = data.zip;
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      })
    break;
}


