var $form    = $('form'),
    $input   = $('input'),
    $content = $('.content'),
    $error   = $('.error');

function resetForm(){
  $input.val('');
  $content.slideUp();
}

$('#submit').on('click', function(){
  validated = true

  $input.each(function(){
    $this = $(this)
    if($this.val() === ''){
      validated = false
    }
  });

  if (validated){
    $error.text('');
    $content.slideDown();
  } else {
    $error.text('Please fill out all the fields, kind sir or madam.')
  };

});

$('#reset').on('click', resetForm);
