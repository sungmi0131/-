$('.main-menu').mouseenter(function () {
    $('.sub-menu').stop().slideDown()
})
$('.main-menu').mouseleave(function () {
    $('.sub-menu').stop().slideUp()
})


setInterval(function () {
    $('.slide-wrap').animate({ 'left': '-100%' }, function () {
        $('.slide:first').appendTo('.slide-wrap')
        $('.slide-wrap').css({ 'left': '0%' })
    })
}, 3000)



$('.tab-list li').click(function () {
    $('.tab-list li').removeClass('on')
    $(this).addClass('on')

    let idx = $(this).index()
    $('.tab-contents .tab').hide()
    $('.tab-contents .tab').eq(idx).show()
})
