$(document).ready(function(){
    console.log("===========================");
    console.log("    -------Jquery------");
    console.log("===========================");
})
$('#click-hide').click(function(){
    $('.view').hide();
})

$('#click-show').click(function(){
    $('.view').show();
})

$('.about').hide();
$('.contact').hide();

$('#home').click(function(){
    $('.home').show();
    $('.about').hide();
    $('.contact').hide();
})

$('#about').click(function(){
    $('.home').hide();
    $('.about').show();
    $('.contact').hide();
})

$('#contact').click(function(){
    $('.home').hide();
    $('.about').hide();
    $('.contact').show();
})