$(function() {
   var thumbnail =  $('.thumbnail');
   var container = $('.viewer-body');
   var close = $('.close');
   var next = $('.next');
   var prev = $('.prev');

   thumbnail.click(function(){
    var content = $(this).html();
    thumbnail.removeClass('open');
    $(this).addClass('open');
    $('body').addClass('view-open');
    $('.w3-top').hide();
    container.html(content);
  });

  next.click(function() {
    var total = $('.media .thumbnail').length;
    if ($('.open').index() === total- 1){
       $('.thumbnail:last-child').addClass('open');
    }
    else{$('.open').removeClass('open').next().toggleClass('open');}
    var content = $('.open').html();
    container.html(content);
  });

  prev.click(function() {
    if ($('.open').index() == 0){$('.thumbnail:first-child').addClass('open');}
    else{ $('.open').removeClass('open').prev().toggleClass('open');}
     var content = $('.open').html();
     container.html(content);
  });

   close.click(function() {
     $('body').removeClass('view-open');
     $('.w3-top').show();
   });

});


// Modal Image Gallery
function expandImage(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("NavBar")
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar " + "w3-wide" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace("w3-card w3-animate-top w3-white", "");
    }
}

//slideshow
var x,slideshow;
window.onload = function() {
  x = ["url('../image/article-slideshow/slideshow1.jpg')","url('../image/article-slideshow/slideshow2.jpg')","url('../image/article-slideshow/slideshow3.jpg')"]
  slideshow = document.getElementsByClassName("slideshow")[0];

  carousel()
};

var slide_index = 0;
function carousel() {
  slide_index++
  if (slide_index > x.length) {slide_index = 1}
  slideshow.style.backgroundImage = x[slide_index - 1]
  setTimeout(carousel, 3000) // Change image every 3 seconds
}
