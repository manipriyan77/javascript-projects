const cityNameElement = document.getElementById("city-search");
const searchButton = document.getElementById("search-button");
const cityNameDisplay = document.getElementById("city-name");
const imgDisplay = document.getElementById("weather-image");
const humidityDisplay = document.querySelector(".humidity");
const windDisplay = document.querySelector(".wind");
const temperatureDisplay = document.querySelector(".temp");
const weatherContainerDisplay = document.querySelector(".weather");

const apiKey = "254b55a21a90edabdb0dd67cdaeecfca";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
searchButton.addEventListener("click", eventHandler);

cityNameElement.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    eventHandler();
    weatherContainerDisplay.style.display = "block";
  }
});

function eventHandler() {
  fetchWeather(cityNameElement.value);
  weatherContainerDisplay.style.display = "block";
}

async function fetchWeather(cityName) {
  const response = await fetch(apiUrl + cityName + `&appid=${apiKey}&units=metric`);
  const data = await response.json();
  cityNameDisplay.textContent = data.name;
  temperatureDisplay.textContent = data.main.temp + "°C";
  humidityDisplay.textContent = data.main.humidity + "%";
  windDisplay.textContent = data.wind.speed + "km/h";
  if (data.weather[0].main === "Clouds") {
    imgDisplay.src = "/images/clouds.png";
  }
  console.log("data", data);
}
