$(document).ready(function() {
  $('.overlay_popup').delay(3000).queue(function() {
    $('.overlay_popup').addClass('popup-open')
  });
});

$.fn.popupClose = function() {
  $(".overlay_popup").removeClass("popup-open");
  return this;
};