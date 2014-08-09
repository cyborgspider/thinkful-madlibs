$form    = $('form')
$input   = $('input')
$content = $('.content')
$error   = $('.error')

resetForm = ->
  $input.val('')
  $content.addClass 'dn'

$('#submit').on 'click', ->
  validated = false

  #For Mentor, why does the first input ignore validation?
  $input.each ->
    if $input.val() isnt ''
      validated = true

  if validated is true
    $error.text ''
    $content.removeClass 'dn'
  else
    $error.text 'Please fill out all the fields, kind sir or madam.'

$('#reset').on 'click', resetForm
