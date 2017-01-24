(function() {

  /* variables for section higlighting */
  var $sideNavItems = $( '.side-nav-item' );
  var $anchors =  $( '.anchor' );
  var top_of_element;
  var top_of_screen;
  var bottom_of_screen;
  var previousItem;
  var currentItem;
  /* variable for scroll header */
  var didScroll;

  init();

  function init() {

    bindSideNav();

    bindTopButton();

    scrollListener();

    scrollHeader();

    highlightCurrentSection();

  }

  function scrollListener() {

    $( window ).scroll(function(event){

      didScroll = true;

      highlightCurrentSection();

    });

  }

  function highlightCurrentSection() {


    $anchors.each( function( i, el ) {

      $el = $(el);

      top_of_element = $el.offset().top;
      top_of_screen = $( window ).scrollTop();
      bottom_of_screen = $( window ).scrollTop() + $( window ).height();

      if( ( bottom_of_screen > top_of_element ) && ( top_of_screen < top_of_element ) ) {

        currentItem = $sideNavItems.eq( i );

        if (previousItem && currentItem === previousItem) return;

        if (previousItem && currentItem !== previousItem) previousItem.removeClass( 'active' );

        currentItem.addClass( 'active' );

        previousItem = currentItem;

      }

    });

  }

  function scrollHeader() {

    // Hide Header on on scroll down
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $( '.nav' ).outerHeight();

    setInterval( function() {

      if ( didScroll ) {

        hasScrolled();

        didScroll = false;

      }

    }, 250 );

    function hasScrolled() {

      var st = $( this ).scrollTop();

      // Make sure they scroll more than delta
      if( Math.abs( lastScrollTop - st ) <= delta ) return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if ( st > lastScrollTop && st > navbarHeight ) {
        // Scroll Down
        $( '.nav' ).addClass( 'nav-up' );

      } else {
        // Scroll Up
        if ( st + $( window ).height() < $( document ).height() ) {

          $( '.nav' ).removeClass( 'nav-up' );

        }

      }

      lastScrollTop = st;
    }

  }

  function bindSideNav() {

    var duration = 1000;

    $( '.side-nav-item' ).each( function ( i, nav ) {

      $( nav ).click( function () {

        var anchorName = $( '#block' + ( i+1 ) + ' > .anchor' ).attr( 'name' );

        if ( anchorName ) window.history.pushState( anchorName, anchorName, '#' + anchorName );

        var top = $( '#block' + ( i+1 ) ).offset().top - 80;

        $( 'html, body' ).animate( { scrollTop: top }, duration );

      });

    });

  }

  function bindTopButton() {

    var duration = 1000;

    $( '#topButton' ).click( function() {

      $( 'html, body' ).animate( { scrollTop: 0 }, duration );

    });

  }

  $( document ).ready( function() {

    if ( $( 'img.lazy' ).length ) {

      $( 'img.lazy' ).lazyload( {

        effect : "fadeIn",
        threshold : 500

      } );

    }

    if ( $( '#slideshow-walls' ).length ) {

      setTimeout( function () {

        $( '#slideshow-walls' ).owlCarousel( {

          items: 2,
          lazyLoad: true,
          autoPlay: 5000,
          stopOnHover: true,
          navigation: true

        } );

      }, 3000 );

    }

    if ( $( '#slideshow-floors' ).length ) {

      setTimeout( function () {

        $( '#slideshow-floors' ).owlCarousel( {

          lazyLoad: true,
          items: 2,
          autoPlay: 5000,
          stopOnHover: true,
          navigation: true

        } );

      }, 3000 );

    }

    if ( $( '#slideshow-roofs' ).length ) {

      setTimeout( function () {

        $( '#slideshow-roofs' ).owlCarousel( {

          lazyLoad: true,
          items: 3,
          autoPlay: 5000,
          stopOnHover: true,
          navigation: true

        } );

      }, 3000 );

    }

    if ( $( '#slideshow-equipment' ).length ) {

      setTimeout( function () {

        $( '#slideshow-equipment' ).owlCarousel( {

          lazyLoad: true,
          items: 1,
          autoPlay: 5000,
          stopOnHover: true,
          navigation: true

        } );

      }, 3000 );

    }

    if ( $( '#slideshow-house' ).length ) {

      setTimeout( function () {

        $( '#slideshow-house' ).owlCarousel( {

          lazyLoad: true,
          items: 1,
          autoPlay: 5000,
          stopOnHover: true,
          navigation: true

        } );

      }, 3000 );

    }

    if ( $( '#slideshow-thermo' ).length ) {

      $( '#slideshow-thermo' ).owlCarousel( {

        lazyLoad: true,
        items: 1,
        autoPlay: 5000,
        stopOnHover: true,
        navigation: true

      } );

    }

    if ( $( '#slideshow-arch' ).length ) {

      $( '#slideshow-arch' ).owlCarousel( {

        lazyLoad: true,
        items: 1,
        autoPlay: 5000,
        stopOnHover: true,
        navigation: true

      } );

    }

  } );

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-82566333-1', 'auto');
  ga('send', 'pageview');

})();
