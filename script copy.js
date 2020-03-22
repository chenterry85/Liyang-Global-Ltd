var $slider = $('.slideshow .slider'),
  maxItems = $('.item', $slider).length,
  dragging = false,
  tracking,
  rightTracking;

$sliderRight = $('.slideshow').clone().addClass('slideshow-right').appendTo($('.split-slideshow'));

rightItems = $('.item', $sliderRight).toArray();
reverseItems = rightItems.reverse();
$('.slider', $sliderRight).html('');
for (i = 0; i < maxItems; i++) {
  $(reverseItems[i]).appendTo($('.slider', $sliderRight));
}

$slider.addClass('slideshow-left');
$('.slideshow-left').slick({
  vertical: true,
  verticalSwiping: true,
  arrows: false,
  infinite: true,
  dots: true,
  speed: 1000,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {

  if (currentSlide > nextSlide && nextSlide == 0 && currentSlide == maxItems - 1) {
    $('.slideshow-right .slider').slick('slickGoTo', -1);
    $('.slideshow-text').slick('slickGoTo', maxItems);
  } else if (currentSlide < nextSlide && currentSlide == 0 && nextSlide == maxItems - 1) {
    $('.slideshow-right .slider').slick('slickGoTo', maxItems);
    $('.slideshow-text').slick('slickGoTo', -1);
  } else {
    $('.slideshow-right .slider').slick('slickGoTo', maxItems - 1 - nextSlide);
    $('.slideshow-text').slick('slickGoTo', nextSlide);
  }
}).on("mousewheel", function(event) {
  event.preventDefault();
  if (event.deltaX > 0 || event.deltaY < 0) {
    $(this).slick('slickNext');
  } else if (event.deltaX < 0 || event.deltaY > 0) {
    $(this).slick('slickPrev');
  };
}).on('mousedown touchstart', function(){
  dragging = true;
  tracking = $('.slick-track', $slider).css('transform');
  tracking = parseInt(tracking.split(',')[5]);
  rightTracking = $('.slideshow-right .slick-track').css('transform');
  rightTracking = parseInt(rightTracking.split(',')[5]);
}).on('mousemove touchmove', function(){
  if (dragging) {
    newTracking = $('.slideshow-left .slick-track').css('transform');
    newTracking = parseInt(newTracking.split(',')[5]);
    diffTracking = newTracking - tracking;
    $('.slideshow-right .slick-track').css({'transform': 'matrix(1, 0, 0, 1, 0, ' + (rightTracking - diffTracking) + ')'});
  }
}).on('mouseleave touchend mouseup', function(){
  dragging = false;
});

$('.slideshow-right .slider').slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: true,
  speed: 950,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  initialSlide: maxItems - 1
});
$('.slideshow-text').slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: true,
  speed: 900,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
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

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("mySmallNavBar");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

//navigate to article
function navigateToArticlePage(index){
  let file = "article_files/article"+index+".html"
  window.open(file,"_self")
}

//scroll animation
function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval);
    },15);
}

//slideshow
setTimeout(carousel, 500) // Change image every 2 seconds

var slide_index = 0;
function carousel() {
  var x = ["url('image/Bike.jpg')","url('image/bike1.jpg')","url('image/bike7.jpg')"]
  var slideshow = document.getElementsByClassName("slideshow")[0];
  var dots = document.getElementsByClassName("dot");

  //slideshow
  slide_index++
  if (slide_index > x.length) {slide_index = 1}
  slideshow.style.backgroundImage = x[slide_index - 1]

  //dot
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot-active", "");
  }
  dots[slide_index-1].className += " dot-active";


  setTimeout(carousel, 3000) // Change image every 2 seconds
}
