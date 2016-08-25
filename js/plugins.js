// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {
    };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


//Performs a smooth page scroll to an anchor on the same page.
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

// preloader script

$('body').waitForImages(function () {
    $('#f_page').removeClass('hide');
    $('#f_loader').addClass('hide');
});

// simple slider use if needed
//$(function () {
//    var pageSliderElements = $('.SLIDER_ELEMENTS_CLASS_HERE');
//    (function backgroundAnimation(index) {
//        pageSliderElements.addClass('nonOpaque');
//        pageSliderElements.removeClass('nonOpaque').eq(index).addClass('nonOpaque');
//        setTimeout(function () {
//            backgroundAnimation((index + 1) % pageSliderElements.length);
//        }, 6000);
//    }(0));
//});

function simple_opacity_slider(sliderItems) {
    (function backgroundAnimation(index) {
        sliderItems.removeClass('nonOpaque').eq(index).addClass('nonOpaque');
        setTimeout(function () {
            backgroundAnimation((index + 1) % sliderItems.length);
        }, 6000);
    }(0));
}


// Mouse move animations
//$('#f_categories').mousemove(function (e) {
//    var x = (e.pageX * -1 / 25 + $(window).width() / 50);
//    $('.categories').css({'transform': 'translateX(' + x + 'px)', 'transition': 'transform 50ms ease'});
//}).mouseout(function () {
//    $(this).removeAttr("style");
//});


//timer function
function myTimer(elem, maxTime, timeStep) {
    var i = 0;
    test();
    function test() {
        setTimeout(function () {
            elem.text(i);
            i++;
            if (i < maxTime) {
                test();
            } else {
                console.log('end');
                return false;
            }
        }, timeStep);
    }
}


//character counter for any textarea
function charCounter(textAreaEl, counterEl, maxText) {
    $(counterEl).text(maxText);
    var remaining = maxText - $(textAreaEl).val().length;
    $(counterEl).text(remaining);
    $(textAreaEl).keyup(function () {
        remaining = maxText - $(textAreaEl).val().length;
        if ($(textAreaEl).val().length >= maxText) {
            $(this).val($(this).val().substr(0, maxText))
        }
        $(counterEl).text(remaining);
    });
}


/*page controller for one page websites*/
function pageController() {
    switch (true) {
        case (window.location.href.indexOf("about") > -1):

            break;
        case (window.location.href.indexOf("methodic") > -1):

            break;
        case (window.location.href.indexOf("parents") > -1):

            break;
        case (window.location.href.indexOf("training") > -1):

            break;
        case (window.location.href.indexOf("weekdays") > -1):

            break;
        case (window.location.href.indexOf("gallery") > -1):

            break;
        case (window.location.href.indexOf("contactUs") > -1):

            break;
        default:

            break;
    }
}


/*typing text animation plugin*/


function drawLetters(a) {
    var q = a.text().split('').length,
        l = a.text().split('');

    a.text('');
    myTimer();
    function myTimer() {
        var i = 0;
        test();
        function test() {
            setTimeout(function () {
                a.append('<span class="flash">' + l[i] + '</span>');
                i++;
                if (i < q) {
                    test();
                } else {
                    return false;
                }
                setTimeout(function () {
                    a.find('.flash').addClass('light');
                }, 200);
            }, 80);
        }


    }
}


//for form validation use https://github.com/jzaefferer/jquery-validation


/*
 * DOC: adds jQuery function checks if element exists
 * USAGE: $('.element').exists(function(){});
 * */

$.fn.exists = function(callback) {
    var args = [].slice.call(arguments, 1);

    if (this.length) {
        callback.call(this, args);
    }

    return this;
};


