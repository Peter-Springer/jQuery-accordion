$('.accordion-button').on('click', function() {
  if ($(this).next().attr('hidden')) {
    $(this).next().removeAttr('hidden')
  } else {
    $(this).next().attr('hidden', true)
  }
})
