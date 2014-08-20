$form    = $('form')
$input   = $('input')
$content = $('.content')
$error   = $('.error')

resetForm = ->
  $input.val('')
  $content.slideUp()

$('#submit').on 'click', ->
  validated = true

  $input.each ->
    $this = $(this)
    if $this.val() is ''
      validated = false

  if validated is true
    $error.text ''
    $content.slideDown()
  else
    $error.text 'Please fill out all the fields, kind sir or madam.'

$('#reset').on 'click', resetForm
