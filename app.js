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
const highTempOutput = document.querySelector(".temp-high");
let apiKey = "c50fe6a08da5a2fb3b65643955014b1d";
let imgUrlStart = "http://openweathermap.org/img/wn/";
let lat;
let long;
let endpoint;
async function getWeather(lat, long) {
  let object = await fetch(endpoint);
  let response = await object.json().then((response) => {
    highTempOutput.innerHTML = `High: ${response.main.temp_max}`;
  });
}

checkWeatherBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navigator.geolocation.getCurrentPosition(success);
  async function success(location) {
    lat = await location.coords.latitude;
    long = await location.coords.longitude;
    endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${apiKey}`;
    console.log(lat);
    getWeather();
  }
});
