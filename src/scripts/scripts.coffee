$form    = $('form')
$input   = $('input')
$content = $('.content')
$error   = $('.error')

resetForm = ->
  $input.val('')
  $content.slideUp()

$('#submit').on 'click', ->
  validated = true

  #For Mentor, why does the first input ignore validation?
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
