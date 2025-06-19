const mockData = {
  ip:"123.123.12.123",
  country_name: "Botswana",
  city: "Botswana City",
  zip: "88552"
}

const divs = {
  ip: document.getElementById("ip"),
  location: document.getElementById("location"),
  zip: document.getElementById("zip"),
};

const apiKey = "Removed for security";

const userInfo = {
  ip: "",
  country: "",
  city: "",
  zip: ""
}

function getUserInformation() {
  return fetch("https://ipapi.co/json/")
    .then(response => response.json())
    .then(data => {
      userInfo.ip = data.ip || "Unknown";
      userInfo.country = data.country_name || "Unknown";
      userInfo.city = data.city || "Unknown";
      userInfo.zip = data.postal || "Unknown";
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      Object.keys(userInfo).forEach(key => userInfo[key] = "Could not load");
    })
}

function displayUserInfo() {
  divs.ip.innerText = `Your IP address is: ${userInfo.ip}`;
  divs.location.innerText = `Your location is ${userInfo.city}, ${userInfo.country}`;
  divs.zip.innerText = `Your zip code is ${userInfo.zip}`;
}

function setMockInfo() {
  userInfo.ip = mockData.ip;
  userInfo.country = mockData.country_name;
  userInfo.city = mockData.city;
  userInfo.zip = mockData.zip;
}

const useMock = true;

document.getElementById("getInfo").addEventListener("click", function() {
  if (useMock) {
    setMockInfo();
    displayUserInfo();
  } else {
    getUserInformation().then(() => {
      displayUserInfo();
    });
  }
});
