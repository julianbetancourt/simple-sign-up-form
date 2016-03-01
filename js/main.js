$(document).ready(function() {
  $('form input').blur(function() {
    if( $(this).val() ) {
          $(this).addClass('used');
    }
  });
});
