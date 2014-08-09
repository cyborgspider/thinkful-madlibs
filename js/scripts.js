(function() {
  var $content, $error, $form, $input, resetForm;

  $form = $('form');

  $input = $('input');

  $content = $('.content');

  $error = $('.error');

  resetForm = function() {
    $input.val('');
    return $content.addClass('dn');
  };

  $('#submit').on('click', function() {
    var validated;
    validated = false;
    $input.each(function() {
      if ($input.val() !== '') {
        return validated = true;
      }
    });
    if (validated === true) {
      $error.text('');
      return $content.removeClass('dn');
    } else {
      return $error.text('Please fill out all the fields, kind sir or madam.');
    }
  });

  $('#reset').on('click', resetForm);

}).call(this);
