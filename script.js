console.log('Connected!')


$(document).ready(() => {
  let viewDropdown = false
  $('.form-group__address').on('click', () => {

    if( viewDropdown == false ) {
      $('.form-group__address-dropdown').addClass("view");
      $('.form-group__address').addClass("clicked");
      $('.form-group__address').html("X");
      viewDropdown = true

    } else if ( viewDropdown == true ) {
      $('.form-group__address-dropdown').removeClass("view");
      $('.form-group__address').removeClass("clicked");
      $('.form-group__address').html("Address");
      viewDropdown = false
    }
  })

})
