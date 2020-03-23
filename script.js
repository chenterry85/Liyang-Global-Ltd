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
  var slideshow = document.getElementsByClassName("mainSlideshow")[0];
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
