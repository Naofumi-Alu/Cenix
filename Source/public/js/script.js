/*jshint jquery:true */
/*global $:true */

var $ = jQuery.noConflict();

$(document).ready(function($) {
    "use strict";


    $('#search .trigger').click(function() {
        $('.search-bar').animate({ height: 'toggle' }, 500);
    });


    $(window).load(function() { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({ 'overflow': 'visible' });
    })


    /*-------------------------------------------------*/
    /* =  Paralax
    /*-------------------------------------------------*/

    try {
        $('.paralax1').parallax("50%", 0.3);
    } catch (err) {}

    /*-------------------------------------------------*/
    /* =  Isotope
    /*-------------------------------------------------*/
    var winDow = $(window);
    // Needed variables
    var $container = $('.filter-container');
    var $filter = $('.filter');

    try {
        $container.imagesLoaded(function() {
            $container.show();
            $container.isotope({
                filter: '*',
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });
        });
    } catch (err) {}

    winDow.bind('resize', function() {
        var selector = $filter.find('a.active').attr('data-filter');

        try {
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
        } catch (err) {}
        return false;
    });

    // Isotope Filter 
    $filter.find('a').click(function() {
        var selector = $(this).attr('data-filter');

        try {
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
        } catch (err) {

        }
        return false;
    });


    var filterItemA = $('.filter a');

    filterItemA.on('click', function() {
        var $this = $(this);
        if (!$this.hasClass('active')) {
            filterItemA.removeClass('active');
            $this.addClass('active');
        }
    });



    /*-------------------------------------------------*/
    /* =  Accordion isotope
    /*-------------------------------------------------*/

    $(document).ready(function($) {
        'use strict';

        //Add Inactive Class To All Accordion Headers
        $('.accordion-header').toggleClass('inactive-header');

        //Set The Accordion Content Width
        // var contentwidth = $('.accordion-header').width();
        // $('.accordion-content').css({'width' : contentwidth });

        //Open The First Accordion Section When Page Loads
        $('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
        $('.accordion-content').first().slideDown().toggleClass('open-content');

        // The Accordion Effect
        $('.accordion-header').click(function() {
            if ($(this).is('.inactive-header')) {
                $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
                $(this).toggleClass('active-header').toggleClass('inactive-header');
                $(this).next().slideToggle().toggleClass('open-content');
            } else {
                $(this).toggleClass('active-header').toggleClass('inactive-header');
                $(this).next().slideToggle().toggleClass('open-content');
            }
        });

        return false;
    });

    /*-------------------------------------------------*/
    /* =  browser detect
    /*-------------------------------------------------*/
    try {
        $.browserSelector();
        // Adds window smooth scroll on chrome.
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    }





    /*-------------------------------------------------*/
    /* =  Testimonials
    /*-------------------------------------------------*/

    try {
        $('.bxslider').bxSlider({
            mode: 'horizontal',
            slideMargin: 0,
            auto: true
        });
    } catch (err) {

    }
    try {
        $('.bxslider2').bxSlider({
            mode: 'horizontal',
            slideMargin: 0,
            auto: true
        });
    } catch (err) {

    }



    /*-------------------------------------------------*/
    /* =  Fancybox
    /*-------------------------------------------------*/
    try {
        $("a[data-fancybox-group=group]").fancybox({
            'transitionIn': 'none',
            'transitionOut': 'none',
            'titlePosition': 'over',
            'titleFormat': function(title, currentArray, currentIndex, currentOpts) {
                return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
            }
        });
    } catch (err) {

    }



    /*-------------------------------------------------*/
    /* =  Tabs Widget - { Popular, Recent and Comments }
    /*-------------------------------------------------*/
    $('.tab-links li a').on('click', function(e) {
        e.preventDefault();
        if (!$(this).parent('li').hasClass('active')) {
            var link = $(this).attr('href');

            $(this).parents('ul').children('li').removeClass('active');
            $(this).parent().addClass('active');

            $('.tabs-widget > div').hide();

            $(link).fadeIn();
        }
    });

    /*-------------------------------------------------*/
    /* =  flexslider
    /*-------------------------------------------------*/
    try {

        var SliderPost = $('.flexslider');

        SliderPost.flexslider({
            animation: "swing",
            slideshowSpeed: 4000,
        });
    } catch (err) {

    }

    /* ---------------------------------------------------------------------- */
    /*	Contact Map
    /* ---------------------------------------------------------------------- */
    var contact = { "lat": "30.714623", "lon": "-4.006605" }; //Change a map coordinate here!

    try {
        $('#map').gmap3({
            action: 'addMarker',
            latLng: [contact.lat, contact.lon],
            map: {
                center: [contact.lat, contact.lon],
                zoom: 14
            },
        }, { action: 'setOptions', args: [{ scrollwheel: false }] });
    } catch (err) {

    }



    /*-------------------------------------------------*/
    /* =  Easy PieChart
    /*-------------------------------------------------*/
    try {

        var PieChart = $('.skill-item');
        PieChart.appear(function() {

            $(function() {
                $('.chart').easyPieChart({
                    easing: 'easeOutBounce',
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
                var chart = window.chart = $('.chart').data('easyPieChart');
                $('.js_update').on('click', function() {
                    chart.update(Math.random() * 200 - 100);
                });
            });
        });
    } catch (err) {

    }



    /*-------------------------------------------------*/
    /* = skills animate
    /*-------------------------------------------------*/

    try {
        var skillBar = $('.skills-progress');
        skillBar.appear(function() {

            var animateElement = $(".meter > span");
            animateElement.each(function() {
                $(this)
                    .data("origWidth", $(this).width())
                    .width(0)
                    .animate({
                        width: $(this).data("origWidth")
                    }, 1200);
            });

        });
    } catch (err) {}

    /*-------------------------------------------------*/
    /* =  count increment
    /*-------------------------------------------------*/
    try {
        $('.statistic-post').appear(function() {
            $('.timer').countTo({
                speed: 4000,
                refreshInterval: 60,
                formatter: function(value, options) {
                    return value.toFixed(options.decimals);
                }
            });
        });
    } catch (err) {

    }


    /*-------------------------------------------------*/
    /* =  Scroll to TOP
    /*-------------------------------------------------*/

    (function() {

        var docElem = document.documentElement,
            didScroll = false,
            changeHeaderOn = 550;
        document.querySelector('#back-to-top');

        function init() {
            window.addEventListener('scroll', function() {
                if (!didScroll) {
                    didScroll = true;
                    setTimeout(scrollPage, 50);
                }
            }, false);
        }

        function scrollPage() {
            var sy = scrollY();
            if (sy >= changeHeaderOn) {
                $('#back-to-top').addClass('active');
            } else {
                $('#back-to-top').removeClass('active');
            }
            didScroll = false;
        }

        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }

        init();

    })();

    $('a[href="#top"]').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });


    /* ---------------------------------------------------------------------- */
    /*	Contact Form
    /* ---------------------------------------------------------------------- */
    /*
        var submitContact = $('#submit_contact'),
            message = $('#msg');

        submitContact.on('click', function(e) {
            e.preventDefault();

            var $this = $(this);

            $.ajax({
                type: "POST",
                url: '../../contact.php',
                dataType: 'json',
                cache: false,
                data: $('#contact-form').serialize(),
                success: function(data) {

                    if (data.info !== 'error') {
                        $this.parents('form').find('input[type=text],textarea,select').filter(':visible').val('');
                        message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
                    } else {
                        message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
                    }
                }
            });
        });
    */
    // Header 


    (function() {

        var docElem = document.documentElement,
            didScroll = false,
            changeHeaderOn = 100;
        document.querySelector('nav');

        function init() {
            window.addEventListener('scroll', function() {
                if (!didScroll) {
                    didScroll = true;
                    setTimeout(scrollPage, 55);
                }
            }, false);
        }

        function scrollPage() {
            var sy = scrollY();
            if (sy >= changeHeaderOn) {
                $('nav').addClass('active');
            } else {
                $('nav').removeClass('active');
            }
            didScroll = false;
        }

        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }

        init();


    })();


    (function() {

        var docElem = document.documentElement,
            didScroll = false,
            changeHeaderOn = 100;
        document.querySelector('.top-line');

        function init() {
            window.addEventListener('scroll', function() {
                if (!didScroll) {
                    didScroll = true;
                    setTimeout(scrollPage, 55);
                }
            }, false);
        }

        function scrollPage() {
            var sy = scrollY();
            if (sy >= changeHeaderOn) {
                $('.top-line').addClass('active');
            } else {
                $('.top-line').removeClass('active');
            }
            didScroll = false;
        }

        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }

        init();


    })();

});

$(window).ready(function() {
    'use strict';

    /*-------------------------------------------------*/
    /* =  CarouSels
    /*-------------------------------------------------*/

    //  Responsive layout, resizing the items
    try {
        $('#foo1').carouFredSel({
            responsive: true,
            width: '100%',
            scroll: 1,
            auto: false,
            prev: '#prev3',
            next: '#next3',
            items: {
                width: 350,
                height: 250,
                visible: {
                    min: 1,
                    max: 5
                }
            }
        });
    } catch (err) {}

    //  Responsive layout, resizing the items
    try {
        $('#foo4').carouFredSel({
            responsive: true,
            width: '100%',
            scroll: 1,
            auto: false,
            prev: '#prev3',
            next: '#next3',
            items: {
                width: 250,
                height: 199,
                visible: {
                    min: 1,
                    max: 5
                }
            }
        });
    } catch (err) {}

});