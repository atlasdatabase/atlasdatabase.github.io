$('#left-menu a').click(function(e) {
  e.preventDefault();
  $(this).tab('show');
});

// store the currently selected tab in the hash value
$("ul.nav-tabs > li > a").on("shown.bs.tab", function(e) {
  var id = $(e.target).attr("href").substr(1);
  window.location.hash = id;
});

// on load of the page: switch to the currently selected tab
var hash = window.location.hash;
$('#lef-menu a[href="' + hash + '"]').tab('show');
//------------------------------------------------------------//
$(".show-menu").click(function(e) {
  e.preventDefault();
  $(".wrapper").toggleClass("toggled");
});
$('.wrapper .overlay').click(function(e){
    e.stopPropagation();
	$('.wrapper').toggleClass('toggled');
});
$('.left-menu li a').click(function(e){
	$('.wrapper').toggleClass('toggled');
});


$(function(){
    $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $('ul.nav li a[href="' + $(this).attr('href') + '"]').tab('show');
 })
 });

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header,.menu-button').removeClass('down').addClass('up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header,.menu-button').removeClass('up').addClass('down');
        }
    }
    
    lastScrollTop = st;
}

function scrollBanner() {
  var scrollPos = window.scrollY;

  if (scrollPos <= 400) {
     [].forEach.call(
        document.querySelectorAll('.img-parallax'),
        function(node) {
          node.style.transform = "translateY(" + (-scrollPos/3) +"px" + ")";

          var text = node.querySelector('h1');
          text.style.transform =  "translateY(" + (-scrollPos/3) +"px" + ")";
          text.style.opacity = 1 - scrollPos/400;

        }
    );
  }
}

window.addEventListener('scroll', scrollBanner);