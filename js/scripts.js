(function () {

//Selektory

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

//Dynamiczne dodawanie

$("#dodajElement").on("click",function(){
  var element = $("input[name=element]").val();
  if( element == "")
      {
          alert("Pole input jest puste");
      }else{
          $("#dynamicsection > ul").append("<li>"+element+"</li>");
          $("input[name=element]").val("");
      }

});

//Ajax i JSON
var button = $("#button");

$("button").on("click",function(){
      $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
     }).done(function( data ) {
      console.log(data.length);
        for(var i = 0; i<data.length; i++)
      {
        $(".menu__data ul").append("<li><b>Name:</b> "+data[i].name+" <b>Username:</b> "+data[i].username+" <b>Email:</b> "+data[i].email+" <b>Phone:</b> "+data[i].phone+"</li>");
      }
      });

  });



})();
