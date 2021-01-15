console.log('Connected!')


$(document).ready(() => {
  let viewDropdown = false
  $('.form-group__address').on('click', () => {
      $('.form-group__address-dropdown').addClass("view")
      $('.form-group__address').addClass("clicked")
      viewDropdown = true
  })

  $('.form-group__address-dropdown').on('click', () => {
    $('.form-group__address-dropdown').removeClass("view")
    $('.form-group__address').removeClass("clicked")
    viewDropdown = false
  })
})
