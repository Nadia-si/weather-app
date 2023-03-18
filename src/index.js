function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return ` ${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humidityElelement = document.querySelector("#humidity");
  humidityElelement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#windSpeed");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  console.log(response.data);
}

let apiKey = "1a8e14dead82d28c527cf46b1e514682";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=uppsala&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
