(function() {

  init();

  function init() {
    scrollHeader();
    bindSideNav();
  }

  function scrollHeader() {

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.nav').outerHeight();

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
        $('.nav').addClass('nav-up');
      } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
          $('.nav').removeClass('nav-up');
        }
      }

      lastScrollTop = st;
    }
  }

  function bindSideNav() {

    var duration = 1000;

    $('.side-nav-item').each(function (i, nav) {
      $(nav).click(function (){
        if (i === 0) {
          window.history.pushState('top', 'top', '#top');
          $('html, body').animate({ scrollTop: 0 }, duration);
        } else {
          var anchorName = $("#block" + i + " > .anchor").attr('name');
          if (anchorName) window.history.pushState(anchorName, anchorName, '#' + anchorName);
          var top = $("#block" + i).offset().top - 80;
          $('html, body').animate({ scrollTop: top }, duration);
        }
      });
    });
  }

  $(document).ready(function() {

    if ($("#slideshow-walls").length)
    $("#slideshow-walls").owlCarousel({
      items: 2,
      lazyLoad : true
    });

    if ($("#slideshow-floors").length)
    $("#slideshow-floors").owlCarousel({
      lazyLoad : true,
      items: 2
    });

    if ($("#slideshow-roofs").length)
    $("#slideshow-roofs").owlCarousel({
      lazyLoad : true,
      items: 3
    });

    if ($("#slideshow-equipment").length)
    $("#slideshow-equipment").owlCarousel({
      lazyLoad : true,
      items: 1
    });

    if ($("#slideshow-house").length)
    $("#slideshow-house").owlCarousel({
      lazyLoad : true,
      items: 1
    });

    if ($("#slideshow-thermo").length)
    $("#slideshow-thermo").owlCarousel({
      lazyLoad : true,
      items: 1
    });

  });

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-82566333-1', 'auto');
  ga('send', 'pageview');

})();
