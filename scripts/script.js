const header = document.querySelector('#Home');

window.addEventListener('scroll', () => {
    if (window.scrollY > .1) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


const animationDuration = 1000;
const animationDuration2= 2000;

// SCHOOL JS
$('.school').click(function(){
    $('#description').removeClass('hidden').slideDown(animationDuration2);
    $('.school').addClass('hidden');

    $('.HotelManagement').slideUp(animationDuration);
    $('.Tech').slideUp(animationDuration);
});

$('#close1').click(function(){
    $('#description').slideUp(animationDuration);
    $('.school').removeClass('hidden');

    $('.HotelManagement').slideDown(animationDuration);
    $('.Tech').slideDown(animationDuration);
});

// PROJECT JS
$('.HotelManagement').click(function(){
    $('#project').removeClass('hidden').slideDown(animationDuration2);
    $('.HotelManagement').addClass('hidden');

    $('.school').slideUp(animationDuration);
    $('.Tech').slideUp(animationDuration);
});



$('#close2').click(function(){
    $('.HotelManagement').removeClass('hidden');
    $('#project').slideUp(animationDuration);

    $('.school').slideDown(animationDuration);
    $('.Tech').slideDown(animationDuration);
});

// STUDENT TRAINING JS
$('.Tech').click(function(){
    $('#student_training').removeClass('hidden').slideDown(animationDuration2);
    $('.Tech').addClass('hidden');

    $('.HotelManagement').slideUp(animationDuration);
    $('.school').slideUp(animationDuration);
});

$('#close3').click(function(){
    $('.Tech').removeClass('hidden');
    $('#student_training').slideUp(animationDuration);

    $('.HotelManagement').slideDown(animationDuration);
    $('.school').slideDown(animationDuration);
});




$(document).ready(function() {
    var animationDuration = 'slow'; 
  
    $("#HamburgerBtn").click(function () {
      if ($("#hamburgerMenuContainer").hasClass("hidden")) {
        $("#hamburgerMenuContainer").removeClass("hidden").slideDown(animationDuration);
      } else {
        $("#hamburgerMenuContainer").addClass("hidden").slideUp(animationDuration);
      }
    });
  
    $('a[href^="#"]').click(function(event) {
      event.preventDefault();
      var target = $(this.hash);
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        $("#hamburgerMenuContainer").addClass("hidden").slideUp(animationDuration);
      });
    });
  });




  $(document).ready(function() {
    // Fade in each content element
    $('.ExpPageContainer .contentHolder > div').each(function(index) {
        $(this).delay(index * 200).animate({ opacity: 1 }, 2000);
    });
});


$(document).ready(function() {
  $('.nav-link').on('click', function() {
      // Remove "active" class from all nav-links
      $('.nav-link').removeClass('active');
      
      // Add "active" class to the clicked nav-link
      $(this).addClass('active');
  });
});





  
  


  


 
