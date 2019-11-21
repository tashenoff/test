/* jQuery
================================================== */
$(".acc__card").click();
$(".acc__card.first")
  .find(".acc__title")
  .addClass("active");
$(".acc__card.first")
  .find(".acc__panel")
  .css("display", "block");
$(function() {
  $(".acc__title").click(function(j) {
    var dropDown = $(this)
      .closest(".acc__card")
      .find(".acc__panel");
    $(this)
      .closest(".acc")
      .find(".acc__panel")
      .not(dropDown)
      .slideUp();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this)
        .closest(".acc")
        .find(".acc__title.active")
        .removeClass("active");
      $(this).addClass("active");
    }

    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });
});
