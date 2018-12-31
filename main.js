$('button').on('click', e => {
  $('#dialog').toggleClass('active')

  $('#wrapper').on('click', e => {
    e.stopPropagation()
  })

  setTimeout(() => {
    $(document).one('click', () => {
      $('#dialog').removeClass('active')
    })
  }, 0)
})
