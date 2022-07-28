// $(document).ready(function () {
//   $(".clients").slick({
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });
// });

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
