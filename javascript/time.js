//new year time - adding one year to the year
  var newyear =( new Date().getUTCFullYear() + 1 +'/1/1')

  $('#clock').countdown(newyear, function(event) {
    $(this).html(event.strftime('%D Days <br> %H : %M : %S '));
  });