$(document).ready(function() {
    $('header nav ul li:first-child').click(function(){
      $(this).parent().toggleClass('slideDown');
    });

    // Hide show sticky background on scroll
      $(window).scroll(function(){

        if(window.scrollY === 0) {
            $('.sticky').removeClass("sticky-background-show")
            $('.sticky').addClass("sticky-background-hide")
        } else {
            $('.sticky').removeClass("sticky-background-hide")
            $('.sticky').addClass("sticky-background-show")
        }
    });
      

    // Receipe filter
    $('#receipes-filter-all').click(function(event) {
        event.preventDefault();
        showNoReceipes();
        removeActive();
        $(this).addClass('active');
        showAllReceipes();
    });

    $('#receipes-filter-sweet').click(function(event) {
        event.preventDefault();
        showNoReceipes();
        removeActive();
        $(this).addClass('active');
        $('.sweet').show();
    });

    $('#receipes-filter-savoury').click(function(event) {
        event.preventDefault();
        showNoReceipes();
        removeActive();
        $(this).addClass('active');
        $('.savoury').show();
    });
  });


  function showAllReceipes() {
      console.log('all clicked');
      $('.sweet').show();
      $('.savoury').show();
  }

  function showNoReceipes() {
    $('.sweet').hide();
    $('.savoury').hide();
  }

  function removeActive() {
    $('#receipes-filter-all, #receipes-filter-sweet, #receipes-filter-savoury').removeClass('active');
  }

var filter = "sweet";


// STICKY NAV BAR
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    navbar.classList.add("sticky-background-show")
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("sticky-background-show");
    
  }
}

// Paralax scrolling home page
function parallax() {
	var $slider = document.getElementById("home-container");

	var yPos = window.pageYOffset / $slider.dataset.speed;
	yPos = -yPos;
	
	var coords = '0% '+ yPos + 'px';
	
	$slider.style.backgroundPosition = coords;
}

window.addEventListener("scroll", function(){
	parallax();	
});



