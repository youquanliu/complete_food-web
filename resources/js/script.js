$(document).ready(function () {

    $("h2").click(function () {
        alert("The paragraph was clicked.");
    });
    
    /* For Sticky navigation*/
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    })

    /* Scroll on buttons*/
    $('.js--scroll-to-plan').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    })
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    })

    /* Navigation scroll*/
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    /* Navigation on row*/
    $('.js--wp-1').waypoint(function () {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-2').waypoint(function () {
        $('.js--wp-2').addClass('animate__animated animate__bounceInUp');
    }, {
        offset: '50%'
    });
    $('.js--wp-3').waypoint(function () {
        $('.js--wp-3').addClass('animate__animated animate__fadeInTopRight');
    }, {
        offset: '50%'
    });
    $('.js--wp-4').waypoint(function () {
        $('.js--wp-4').addClass('animate__animated animate__zoomInLeft');
    }, {
        offset: '50%'
    });

    /* Mobile nav */
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon');

        nav.slideToggle(200);

        var compareResult = icon.attr('name') === 'menu-outline';
        if(compareResult){
            icon.attr('name', 'close');
        }else{
            icon.attr('name', 'menu-outline');
        }

    });
})