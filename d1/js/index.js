//nav
$('.main-menu').mouseenter(function () {
    $(this).find('.sub-menu').stop().slideDown()
})
$('.main-menu').mouseleave(function () {
    $(this).find('.sub-menu').stop().slideUp()
})

//slide
setInterval(function () {
    $('.slide-wrap').animate({ 'top': '-100%' }, function () {
        $('.slide:first').appendTo('.slide-wrap')
        $('.slide-wrap').css({ 'top': '0%' })
    })

}, 3000)

//tab
$('.tab-list li').click(function(){
    $('.tab-list li').removeClass('on')
    $(this).addClass('on')

    let idx=$(this).index()
    $('.tab-contents .tab').hide()
    $('.tab-contents .tab').eq(idx).show()
})


//popup
$('.click').click(function(){
    $('.popup').fadeIn()
})
$('.close').click(function(){
    $('.popup').fadeOut()
})