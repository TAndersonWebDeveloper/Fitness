//Slick Slider for classes section
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
      console.log(entry);
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
  if (nameInput.length > 0) {
    modal.classList.add("hide");
    nameInput.value = "";
  }
});
