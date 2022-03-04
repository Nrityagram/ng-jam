$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    center: true,
    dots: false,
    smartSpeed: 500,
    
    navText: [
      '<img src="https://res.cloudinary.com/nrityagram/image/upload/v1646318418/chevron-left-2_bta3sl.png">',
      '<img src="https://res.cloudinary.com/nrityagram/image/upload/v1646318418/chevron-right-2_dped9m.png">',
    ],
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
      },
      768: {
        items: 1,
        stagePadding: 127,
      },
      800: {
        items: 1,
        stagePadding: 132,
      },
      1024: {
        items: 1,
        stagePadding: 169,
      },
      1200: {
        items: 1,
        stagePadding: 198,
      },
      1300: {
        items: 1,
        stagePadding: 213,
      },
      1400: {
        items: 1,
        stagePadding: 231,
      },
      1500: {
        items: 1,
        stagePadding: 248,
      },
      1600: {
        items: 1,
        stagePadding: 264,
      },
      1700: {
        items: 1,
        stagePadding: 281,
      },
      1800: {
        items: 1,
        stagePadding: 297,
      },
      1920: {
        items: 1,
        // 16.5vw is the padding on both sides of center item
        // 0.165 * 1920 = 317
        stagePadding: 317,
      },
      2000: {
        items: 1,
        stagePadding: 330,
      },
      2100: {
        items: 1,
        stagePadding: 347,
      },
    },
  });
});
