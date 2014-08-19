(function() {
  var $content, $error, $form, $input, resetForm;

  $form = $('form');

  $input = $('input');

  $content = $('.content');

  $error = $('.error');

  resetForm = function() {
    $input.val('');
    return $content.slideUp();
  };

  $('#submit').on('click', function() {
    var validated;
    validated = true;
    $input.each(function() {
      var $this;
      $this = $(this);
      if ($this.val() === '') {
        return validated = false;
      }
    });
    if (validated === true) {
      $error.text('');
      return $content.slideDown();
    } else {
      return $error.text('Please fill out all the fields, kind sir or madam.');
    }
  });

  $('#reset').on('click', resetForm);

}).call(this);
