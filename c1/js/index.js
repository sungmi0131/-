
//nav
$('.main-menu').mouseenter(function () {
    $(this).find('.sub-menu').stop().slideDown()
})
$('.main-menu').mouseleave(function () {
    $(this).find('.sub-menu').stop().slideUp()
})

/*slide*/
let idx = 0

setInterval(function () {
    idx++;

    if (idx === 3)
        idx = 0


    $('.slide').fadeOut()
    $('.slide').eq(idx).fadeIn()
},3000)
/*tab*/
$('.tab-list li').click(function () {
    $('.tab-list li').removeClass('on')
    $(this).addClass('on')

    let idx = $(this).index()
    $('.tab-contents .tab').hide()
    $('.tab-contents .tab').eq(idx).show()
})



/*popup*/
$('.click').click(function () {
    $('.popup').fadeIn()
})
$('.close').click(function () {
    $('.popup').fadeOut()
})