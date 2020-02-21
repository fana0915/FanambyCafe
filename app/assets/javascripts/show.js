$(function() {
  $('#menu-list').click(function() {
    $('.menu').stop().fadeToggle(5);
  });
  $('#time').click(function() {
    $('.hour').stop().fadeToggle(5);
  });
  $('#reserv').click(function() {
    $('.phone').stop().fadeToggle(5);
    $('.net').stop().fadeToggle(5);
  });
  $('#info').click(function() {
    $('.store').stop().fadeToggle(5);
  });
});
