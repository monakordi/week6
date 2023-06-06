function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

function showDescription(response) {
  console.log(response);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = response.data.main.temp;
  let humidity = response.data.main.humidity;
  document.querySelector("#humidity").innerHTML = `Humidity : ${humidity} %`;
  let wind = response.data.wind.speed;
  document.querySelector("#wind").innerHTML = `Wind : ${wind}`;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
}

function displayCity(city) {
  let apiKey = "7e3ee14cebaec2c9539ff301f396fd91";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showDescription);
}

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input").value;
  displayCity(cityInput);
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
