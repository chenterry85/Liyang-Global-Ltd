// Smooth Scroll on anchor links
(function() {
     'use strict';

    // Feature Test
    if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {

        // Function to animate the scroll
        var smoothScroll = function (anchor, duration) {
            console.log("smoothScroll")

            // Calculate how far and how fast to scroll
            var startLocation = window.pageYOffset;
            var endLocation = anchor.offsetTop;
            var distance = endLocation - startLocation;
            var increments = distance/(duration/16);
            var stopAnimation;

            // Scroll the page by an increment, and check if it's time to stop
            var animateScroll = function () {
                window.scrollBy(0, increments);
                stopAnimation();
            };

            // If scrolling down
            if ( increments >= 0 ) {
                // Stop animation when you reach the anchor OR the bottom of the page
                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
                        clearInterval(runAnimation);
                    }
                };
            }
            // If scrolling up
            else {
                // Stop animation when you reach the anchor OR the top of the page
                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( travelled <= (endLocation || 0) ) {
                        clearInterval(runAnimation);
                    }
                };
            }

            // Loop the animation function
            var runAnimation = setInterval(animateScroll, 16);

        };

        // Define smooth scroll links
        var scrollToggle = document.querySelectorAll('.scroll');

        // For each smooth scroll link
        [].forEach.call(scrollToggle, function (toggle) {

            // When the smooth scroll link is clicked
            toggle.addEventListener('click', function(e) {

                // Prevent the default link behavior
                e.preventDefault();

                // Get anchor link and calculate distance from the top
                var dataID = toggle.getAttribute('href');
                var dataTarget = document.querySelector(dataID);
                var dataSpeed = toggle.getAttribute('data-speed');

                // If the anchor exists
                if (dataTarget) {
                    // Scroll to the anchor
                    smoothScroll(dataTarget, dataSpeed || 500);
                }

            }, false);

        });

    }

 })();

//Smooth Scroll
SmoothScroll({
    // Scrolling Core
    animationTime    : 400, // [ms]
    stepSize         : 100, // [px]

    // Acceleration
    accelerationDelta : 50,  // 50
    accelerationMax   : 3,   // 3

    // Keyboard Settings
    keyboardSupport   : true,  // option
    arrowScroll       : 50,    // [px]

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,

    // Other
    touchpadSupport   : false, // ignore touchpad by default
    fixedBackground   : true,
    excluded          : ''
});

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavBar")
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar " + "w3-navbar " + "w3-wide" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
        console.log(navbar)
    }
}

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

var cursorY;

//detect Scrolling
// window.onscroll = function (e) {
//   var offset = window.pageYOffset
//   var offset_from_bottom = document.documentElement.scrollHeight - window.pageYOffset
//
//   //console.log(offset)
//   //console.log(offset_from_bottom)
//
//   if((offset>=900 && offset<=1438) || (offset>=1831 && offset_from_bottom >= 1164)){
//     for(var i = 0; i < 4; i++){
//       document.getElementsByClassName("w3-bar-item")[i].style.color="#444"
//     }
//   }else{
//     for(var i = 0; i < 4; i++){
//       document.getElementsByClassName("w3-bar-item")[i].style.color="#FFFFFF"
//     }
//   }
//
// }

// //detect cursor location
// window.onload = function(){
//   if (window.Event) {
// 	   document.captureEvents(Event.MOUSEMOVE)
// 	}
// 	document.onmousemove = cursorYLocation
// }
//
// function setcursorY()(e){
//   cursorY = (window.Event) ? e.pageY : event.clientY
// }
