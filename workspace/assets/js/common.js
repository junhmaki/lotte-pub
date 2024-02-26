var oldsc = 0;

$(window).on('scroll', function () {
  var sc = $('html, body').scrollTop();
  if (sc > 0) {
    $('.header').addClass('fixed');
  } else {
    $('.header').removeClass('fixed');
  }

  if (sc > oldsc) {
    $('.header').addClass('down');
  } else {
    $('.header').removeClass('down');
  }
  oldsc = sc;
});


if ($('.sub-content').length) {
  $('.sub-content').addClass('load');
}