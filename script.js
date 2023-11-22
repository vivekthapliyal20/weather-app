// this function renderWeatherinfo is used to display the temp into the screen
function renderWeatherInfo(data) {
  let newPara = document.createElement('p');
  newPara.textContent = `${data?.temp.toFixed(2)} °C`
  document.body.appendChild(newPara);
}

// for all fatch weather info 
async function fatchWeather() {
  let city = "delhi";
  const url = (`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'be6b0d6e72msh6eee759577dafd7p1bf29cjsn51e83241a480',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("Weather data", data);
    renderWeatherInfo(data);

  } catch (error) {
    console.error("Error Found", error);
  }

}

// fatchWeather();

function switchTab(clickTab) {
  apiErrorContainer.classList.remove("active");

  if (clickTab !== currentTab) {
    currentTab.classList.remove("current-tab");
    currentTab = clickTab;
    currentTab.classList.add("current-tab");

    if (!searchForm.classList.contains("active")) {
      userInfoContainer.classList.remove("active");
      grantAccessContainer.classList.remove("active");
      searchForm.classList.add("active");
    }
    else {
      searchForm.classList.remove("active");
      userInfoContainer.classList.remove("active");
      // getFromSessionStorage();

    }
    // console.log("Current Tab", currentTab);
  }

}


// for finding current location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else {
    console.log("No geoLocation Support");
  }

}

function showPosition(position) {
  let lat = position.coords.latitude;
  let longi = position.coords.longitude;
  console.log(lat);
  console.log(longi);
}