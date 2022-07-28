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
