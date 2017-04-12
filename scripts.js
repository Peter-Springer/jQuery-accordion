$('.accordion-button').on('click', function() {
  $(this).next().removeAttr('hidden')
})
