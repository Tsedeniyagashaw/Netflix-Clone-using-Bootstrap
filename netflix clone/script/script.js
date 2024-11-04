$(document).ready(function() {
    $('.spans').click(function() {
      $(this).next('.discr').slideToggle(300);
      $(this).find('.open').text(function(_, text) {
        return text === '+' ? '×' : '+';
      });
    });
  });
