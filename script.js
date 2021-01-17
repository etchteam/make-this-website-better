console.log('Connected!')


$(document).ready(() => {
  console.log('doc: ' + $(document).height())
  console.log('window: ' + $(window).height())
  $('.hero').css('left', '5%')
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
    scroll = parseFloat($(document).height()) - $(window).scrollTop().valueOf() - parseFloat($(window).height())
    scrollPercentage = (scroll / $(document).height()) * 100
    // if (scroll > 300) {
    //   let alpha = (scroll - 300) * 0.0217
    if (scrollPercentage < 15) {
      let alpha = (15 - scrollPercentage) * 0.07
      $('.footer').css('color', `rgba(34, 34, 68, ${alpha})`)
      $('.footer').css('background-color', `rgba(153, 153, 153, ${alpha})`)
    } else {
      $('.footer').css('color', 'rgba(34, 34, 68, 0)')
      $('.footer').css('background-color', 'rgba(153, 153, 153, 0)')
    }
  })

  $(window).scroll((event) => {
    let scroll = $(window).scrollTop().valueOf();
    if (scroll <= 140) {
      $('.hero').css('left', `${5 + (0.168 * scroll)}%`)

      if (parseFloat($('.hero').offset().left) >= parseFloat($('.main').offset().left)) {
        $('.hero').css('display', 'none')
      } else {
        $('.hero').css('display', 'block')
      }
    } else if (scroll > 140) {
      $('.hero').css('left', '28.5%')

      if (parseFloat($('.hero').offset().left) >= parseFloat($('.main').offset().left)) {
        $('.hero').css('display', 'none')
      } else {
        $('.hero').css('display', 'block')
      }
    }
  })

  if ($(document).height() <= $(window).height()) {
    $('.footer').css('color', `rgba(34, 34, 68, 1)`)
    $('.footer').css('background-color', `rgba(153, 153, 153, 1)`)
  }

})
