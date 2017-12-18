
$('canvas').on('click', function() {
  var canvName = $(this).attr('rel');
  $('.overlay').slideDown(800, function() {
    $('overlay').addClass('active');
  $('.' + canvName).addClass('active');
});
  
  $('.x-btn').on('click', function() {
  $('.overlay').slideUp(800, function() {
  $('.overlay').removeClass('active');
  })  
});
  });
