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




  $(window).scroll((event) => {
    let scroll = $(window).scrollTop().valueOf();
    if (scroll > 300) {
      let alpha = (scroll - 300) * 0.0217
      $('.footer').css('color', `rgba(34, 34, 68, ${alpha})`)
      $('.footer').css('background-color', `rgba(153, 153, 153, ${alpha})`)
    } else {
      $('.footer').css('color', 'rgba(34, 34, 68, 0)')
      $('.footer').css('background-color', 'rgba(153, 153, 153, 0)')
    }
  })

})
