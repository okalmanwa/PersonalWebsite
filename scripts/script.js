const header = document.querySelector('#Home');

window.addEventListener('scroll', () => {
    if (window.scrollY > .1) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const animationDuration = 1000;
const animationDuration2 = 2000;

// SCHOOL JS
$('.school').click(function () {
    $('#description').removeClass('hidden').fadeIn(animationDuration2);
    $('.school').addClass('hidden');

    $('.HotelManagement').fadeOut(animationDuration);
    $('.Tech').fadeOut(animationDuration);
});

$('#close1').click(function () {
    $('#description').fadeOut(animationDuration, function () {
        $('#description').addClass('hidden');
        $('.school').removeClass('hidden');
    });

    $('.HotelManagement').fadeIn(animationDuration);
    $('.Tech').fadeIn(animationDuration);
});

// PROJECT JS
$('.HotelManagement').click(function () {
    $('#project').removeClass('hidden').fadeIn(animationDuration2);
    $('.HotelManagement').addClass('hidden');

    $('.school').fadeOut(animationDuration);
    $('.Tech').fadeOut(animationDuration);
});

$('#close2').click(function () {
    $('#project').fadeOut(animationDuration, function () {
        $('#project').addClass('hidden');
        $('.HotelManagement').removeClass('hidden');
    });

    $('.school').fadeIn(animationDuration);
    $('.Tech').fadeIn(animationDuration);
});

// STUDENT TRAINING JS
$('.Tech').click(function () {
    $('#student_training').removeClass('hidden').fadeIn(animationDuration2);
    $('.Tech').addClass('hidden');

    $('.HotelManagement').fadeOut(animationDuration);
    $('.school').fadeOut(animationDuration);
});

$('#close3').click(function () {
    $('#student_training').fadeOut(animationDuration, function () {
        $('#student_training').addClass('hidden');
        $('.Tech').removeClass('hidden');
    });

    $('.HotelManagement').fadeIn(animationDuration);
    $('.school').fadeIn(animationDuration);
});

$(document).ready(function () {
    var animationDuration = 'slow';

    $("#HamburgerBtn").click(function () {
        if ($("#hamburgerMenuContainer").hasClass("hidden")) {
            $("#hamburgerMenuContainer").removeClass("hidden").fadeIn(animationDuration);
        } else {
            $("#hamburgerMenuContainer").addClass("hidden").fadeOut(animationDuration);
        }
    });

    $('a[href^="#"]').click(function (event) {
        event.preventDefault();
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function () {
            $("#hamburgerMenuContainer").addClass("hidden").fadeOut(animationDuration);
        });
    });
});

$(document).ready(function () {
    // Fade in each content element
    $('.ExpPageContainer .contentHolder > div').each(function (index) {
        $(this).delay(index * 200).animate({ opacity: 1 }, 2000);
    });
});

$(document).ready(function () {
    $('.nav-link').on('click', function () {
        // Remove "active" class from all nav-links
        $('.nav-link').removeClass('active');

        // Add "active" class to the clicked nav-link
        $(this).addClass('active');
    });
});



AOS.init({
    duration: 1400, // Duration of animation
    once: false, // Animate every time an element is in the viewport
    mirror: true, // Whether elements should animate out while scrolling past them
});