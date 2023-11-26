// const header = document.querySelector('#Home');

// window.addEventListener('scroll', () => {
//     if (window.scrollY > .1) {
//         header.classList.add('scrolled');
//     } else {
//         header.classList.remove('scrolled');
//     }
// });

// Define a variable for animation speed
var animationSpeed = 1000; // Adjust this value as needed for speed

// Function to handle the fading in of a section and sliding out of images
function openSection(sectionToShow, elementsToHide, clickedElement) {
    $(sectionToShow).hide().removeClass('hidden').fadeIn(animationSpeed);
    $(elementsToHide).not(clickedElement).addClass('hidden');
    $(elementsToHide).animate({ width: 'hide' }, animationSpeed);
}

// Function to handle the fading out of a section and sliding in of images
function closeSection(sectionToHide, elementsToShow) {
    $(sectionToHide).fadeOut(animationSpeed, function () {
        $(this).addClass('hidden');
        $(elementsToShow).removeClass('hidden').animate({ width: 'show' }, animationSpeed);
    });
}

// School Sectionnn
$('.school').click(function () {
    openSection('#description', '.HotelManagement, .Tech, .school', '.school');
});

$('#close1').click(function () {
    closeSection('#description', '.school, .HotelManagement, .Tech');
});

// Hotel Management Section
$('.HotelManagement').click(function () {
    openSection('#project', '.school, .Tech, .HotelManagement', '.HotelManagement');
});

$('#close2').click(function () {
    closeSection('#project', '.school, .HotelManagement, .Tech');
});

// Tech Section
$('.Tech').click(function () {
    openSection('#student_training', '.HotelManagement, .school, .Tech', '.Tech');
});

$('#close3').click(function () {
    closeSection('#student_training', '.school, .HotelManagement, .Tech');
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
    $('.nav-link').on('click', function () {
        // Remove "active" class from all nav-links
        $('.nav-link').removeClass('active');

        // Add "active" class to the clicked nav-link
        $(this).addClass('active');
    });
});



AOS.init({
    duration: 1200, // Duration of animation
    once: false, // Animate every time an element is in the viewport
    mirror: true, // Whether elements should animate out while scrolling past them
});

$(document).ready(function() {
    $('.hamburger-lines').click(function() {
      $(this).toggleClass('hamburger-active');
    });
  });
