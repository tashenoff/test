//скрол меню

jQuery(document).ready(function($) {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
      navbar = $("#navbar");

    if (scrollPos > 100) {
      navbar.addClass("scroll");
    } else {
      navbar.removeClass("scroll");
    }
  });
});

//селект по дефолту

$(document).ready(function() {
  $(".dropdown .dropdown-menu li a")[0].click();
});
