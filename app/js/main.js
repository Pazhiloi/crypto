$(function () {
$('.count').each(function (){
    $(this).prop('Counter', 0).animate({
      Counter:$(this).text()
    },{
      duration: 10000,
      easing: 'swing',
      step: function(now){
        $(this).text(Math.ceil(now));
      }
    });
  });
  $('.menu__btn').on('click', function () {
  $('.menu__list').toggleClass('menu__list--active')
});
  $(".menu__link").on("click", function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
  window.onscroll = function showHeader() {
    var header = document.querySelector('.header__inner');
    if(window.pageYOffset > 200) {
      header.classList.add('header__fixed');
    } else{
      header.classList.remove('header__fixed');
    }
   };
  new WOW().init();
});