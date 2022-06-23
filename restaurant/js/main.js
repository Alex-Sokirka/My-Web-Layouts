$(function() {
  $('.book').click(function() {
  	  $('#modal').addClass('show');
  });
  $('.modal12_overlay').click(function() {
      $('#modal').removeClass('show');
  });   
})