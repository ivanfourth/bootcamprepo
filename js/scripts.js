(function () {

//Selektory zad 2

$("div.grid.grid-12").addClass("divColor");
$('nav li a[href*="http"]').addClass("navLink");
$('input[type=radio]:not(:checked)').addClass("inputColor");
$('input[type=checkbox]:not(:checked)').addClass("inputColor");
$("#text p:nth-child(1)").addClass("emptyPColor");
$('.pagination > p').addClass("paginationitem");

//Hamburger menu

$('#hamburgermenu').click(function(){
  $(this).toggleClass('open');
  $('.menu__list').slideToggle().toggleClass('showHiddenMenu');
});

})();
