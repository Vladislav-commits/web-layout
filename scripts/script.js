

$('span').removeClass('anim');
$(function(){

var swiper = new Swiper('.swiper-container', {
  // Default parameters
  loop:true,
slidesPerView:1,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
     pagination: {
      el: '.swiper-pagination',
    },
breakpoints:{
  600:{
    slidesPerView:2,
    spaceBetween:35,

  },
   1026:{
    slidesPerView:3,
    spaceBetween:20,
  }
}

})



$('.vk').on('click', function(){
    location.href='https://vk.com/';

  })
  $('.fb').on('click', function(){
    location.href='https://www.facebook.com/';
  })
    $('.twit').on('click', function(){
    location.href='https://twitter.com/';
  })
  $('.inst').on('click', function(){
    location.href='https://www.instagram.com/';
  })



$(".header-container__image").on('click', function(){
 
  if (($('.header-container_hidden').css('display') == 'none') &&  ($(window).width()>890)){ 

    $(".header-container__image").fadeOut(50)
    $(".header-container_hidden").css('display', 'flex'),
        $(".header-container_hidden").animate({
          width:'320px'
        },400)
        $('.header-container__navigation-bar1').animate({
          width:'280px'
              }, 400)

  }
  else if ((($('.header-container_hidden').css('display') == 'none') &&  ($(window).width()<813))){
    $(".header-container__image").fadeOut(50)
    $(".header-container_hidden").css('display', 'flex'),
        $(".header-container_hidden").animate({
          width:'90px'
        },400)
        $('.header-container__navigation-bar1').animate({
          width:'95px'
              }, 70)
  } else if ((($('.header-container_hidden').css('display') == 'none') &&  (($(window).width()>=813) &&($(window).width()<=890)))){
    $(".header-container__image").fadeOut(50)
    $(".header-container_hidden").css('display', 'flex'),
        $(".header-container_hidden").animate({
          width:'100px',

        },400)
        $('.header-container__navigation-bar1').animate({
          width:'180px'
              }, 70)
  }

});

$('.header-container').on('click', '#img', function(){ 
         $(".header-container_hidden").animate({
          width:'0px'
        },400)
        $('.header-container__navigation-bar1').animate({
          width:'0px'
              }, 70)
        $(".header-container_hidden").css('display', 'none'),
        $(".header-container__image").fadeIn(600)
})



$('.ancor').on('click', function(event){
  event.preventDefault();
  $(".header-container_hidden").animate({
          width:'0px'
        },400)
        $('.header-container__navigation-bar1').animate({
          width:'0px'
              }, 70)
        $(".header-container_hidden").css('display', 'none');
        if($(window).width() < 1026){
        $(".header-container__image").fadeIn(600)}

  let href=$(this).attr('href');
  console.log(href)
 
  let offset = $(href).offset().top;

  $('body, html'). animate({
    scrollTop:offset,
  },700)
 
})

$('input[type="tel"]').inputmask({"mask": "+7 (999) 999-99-99"});



$('.red-button, .white-button').on('click', function(){
$('body').addClass('scroll-hidden')
$('.form-bg').animate({
  height:'100%',
  top:'0'
}, 400)

if ($(this).attr('value') == "Заказать звонок"){
	$('.E-man').css('display', 'none')
}else{$('.E-man').css('display', 'flex')}

$('form').animate({
  height: '550px',
},400)
$('form').css('visibility', 'visible')
})

$('body').on('click', '.form__img', function(){
$('.form-bg').animate({
  height:'0%',
  top:'50%'
}, 400)
$('form').animate({
  height: '0',
},400)
$('form').css('visibility', 'hidden')
$('body').removeClass('scroll-hidden')
})


})