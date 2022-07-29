let clientName;
const welcomeBackMessage = document.querySelector(".welcome-back");
if (localStorage.getItem("fName")) {
  clientName = localStorage.getItem("fName");
  welcomeBackMessage.innerHTML = `Welcome Back ${clientName}!`;
}
// Slick Slider for classes section
$(function () {
  $(".single-item").slick({
    infinite: true,

    slidesToShow: 1,
    slidestoScroll: 1,
    arrows: true,
    nextArrow: ".arrow_next",
    prevArrow: ".arrow_prev",
  });
});

//Intersection observers
const aboutHeader = document.querySelector(".about h2");
const aboutItem = document.querySelectorAll(".about-item");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      console.log(entry);
    });
  },
  {
    threshold: 1,
  }
);

aboutItem.forEach((item) => {
  observer.observe(item);
});

observer.observe(aboutHeader);

//Modal functionality
const signUpBtn = document.querySelectorAll(".signup-btn");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal");
const modalSignupBtn = document.querySelector(".modal-signup-btn");
const modalHeader = document.querySelector(".modal h2");
const signupForm = document.querySelector(".modal form");
const confirmationMessage = document.querySelector(".confirmation-msg");
const thumbsUp = document.querySelector(".thumb");
let nameInput = document.querySelector("#name");

nameInput.addEventListener("change", (e) => {
  nameInput = e.target.value;
});

for (i = 0; i < signUpBtn.length; i++) {
  signUpBtn[i].addEventListener("click", () => {
    modal.classList.remove("hide");
  });
}
closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hide");
});
modalSignupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (nameInput.length > 0 && nameInput.length < 15) {
    signupForm.classList.add("hide");
    modalHeader.classList.add("hide");
    confirmationMessage.classList.remove("hide");
    thumbsUp.classList.add("approve");
    clientName = nameInput;
    welcomeBackMessage.innerHTML = `Thanks for signing up ${clientName}!`;
    localStorage.setItem("fName", nameInput);
    setTimeout(() => {
      modal.classList.add("hide");
    }, 5000);
  }
});
const checkWeatherBtn = document.querySelector(".check-weather-btn");
const currentTemp = document.querySelector(".current-temp");
const highTempOutput = document.querySelector(".temp-high");
const lowTempOutput = document.querySelector(".temp-low");
const weatherConditions = document.querySelector(".weather-conditions");
const windSpeed = document.querySelector(".wind-speed");
const weatherModal = document.querySelector(".weather-modal");
const weatherModalHeader = document.querySelector(".weather-modal h3");
const weatherHeader = document.querySelector(".weather-header");
const weatherText = document.querySelector(".weather-text");
const weatherIcon = document.querySelector(".weather-modal img");
const weatherModalCloseBtn = document.querySelector(".close-weather-modal");
observer.observe(checkWeatherBtn);
observer.observe(weatherText);
observer.observe(weatherHeader);
let apiKey = "c50fe6a08da5a2fb3b65643955014b1d";
let imgUrlStart = "http://openweathermap.org/img/wn/";
let lat;
let long;
let endpoint;

async function getWeather(lat, long) {
  let object = await fetch(endpoint);
  console.log(endpoint);
  let response = await object.json().then((response) => {
    weatherModalHeader.innerHTML = `<span class='weather-modal-header-span'>Current Weather</span><br> ${response.name}`;
    weatherIcon.src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
    currentTemp.innerHTML = `Current temp: ${Math.floor(response.main.temp)}`;
    highTempOutput.innerHTML = `High: ${Math.floor(response.main.temp_max)}`;
    lowTempOutput.innerHTML = `Low: ${Math.floor(response.main.temp_min)}`;
    weatherConditions.innerHTML = `Current Conditions: ${response.weather[0].description}`;
    windSpeed.innerHTML = `Wind Speed: ${response.wind.speed} MPH`;
  });
}

weatherModalCloseBtn.addEventListener("click", () => {
  weatherModal.classList.add("hide");
});

checkWeatherBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navigator.geolocation.getCurrentPosition(success);
  async function success(location) {
    lat = await location.coords.latitude;
    long = await location.coords.longitude;
    endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${apiKey}`;
    console.log(lat);
    getWeather();
    weatherModal.classList.remove("hide");
  }
});

$(function () {
  $("#tabs").tabs();
});

const trainersHeader = document.querySelector(".trainers-header");
observer.observe(trainersHeader);
