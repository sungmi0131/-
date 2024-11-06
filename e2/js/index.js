
//nav
$('.main-menu').mouseenter(function () {
    $(this).find('.sub-menu').stop().slideDown()
})
$('.main-menu').mouseleave(function () {
    $(this).find('.sub-menu').stop().slideUp()
})

//slide
let idx = 0; 

setInterval(function() { 
  idx++; 

  if (idx === 3) { 
    idx = 0; 
  }

  $('.slide-wrap').animate({ 'top': '-100%' }, function () {
    $('.slide:first').appendTo('.slide-wrap')
    $('.slide-wrap').css({ 'top': '0%' }).eq(idx)
})
  
}, 3000); 

//popup
$('.click').click(function () {
    $('.modal').fadeIn()
})
$('.close').click(function () {
    $('.modal').fadeOut()
})