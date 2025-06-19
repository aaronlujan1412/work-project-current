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

const userInfo = {
  ip: "",
  country: "",
  city: "",
  zip: ""
}

function getUserInformation() {
  fetch(`https://api.ipstack.com/172.83.7.250?access_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      userInfo.ip = data.ip;
      userInfo.country = data.country_name;
      userInfo.city = data.city;
      userInfo.zip = data.zip;
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    })
}

function displayUserInfo() {
  divs.ip.innerText = `Your IP address is: ${userInfo.ip}`;
  divs.location.innerText = `Your location is ${userInfo.city}, ${userInfo.country}`;
  divs.zip.innerText = `Your zip code is ${userInfo.zip}`;
}

const useMock = true;

document.getElementById("getInfo").addEventListener("click", displayUserInfo)

switch (useMock) {
  case true:
    userInfo.ip = mockData.ip;
    userInfo.country = mockData.country_name;
    userInfo.city = mockData.city;
    userInfo.zip = mockData.zip;
    break;
  case false:
    getUserInformation();
    // fetch(`https://api.ipstack.com/172.83.7.250?access_key=${apiKey}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     ip = data.ip;
    //     country = data.country_name;
    //     city = data.city;
        // zip = data.zip;
      // })
      // .catch(error => {
        // console.error("Error fetching data:", error);
      // })
    break;
}
