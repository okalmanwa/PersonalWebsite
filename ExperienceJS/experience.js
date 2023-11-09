
$(document).ready(function() {
    var animationDuration3 = 500;
    var animationDuration4=800; 

    $('#OpenTeaching').click(function(){
        $('#Teaching').removeClass('hidden').slideDown(animationDuration4);
        $('#OpenTeaching').addClass('hidden');
    });

    $('#CloseTeaching').click(function(){
        $('#Teaching').slideUp(animationDuration3);
        $('#OpenTeaching').removeClass('hidden');
    });
});


$(document).ready(function() {
    var animationDuration = 500;
    var animationDuration2 = 800;

    $('#OpenConsulting').click(function() {
        $('#Externship').removeClass('hidden').slideDown(animationDuration2);
        $('#OpenConsulting').hide();
    });

    $('#CloseConsulting').click(function() {
        $('#Externship').slideUp(animationDuration, function() {
            $(this).addClass('hidden');
            $('#OpenConsulting').show();
        });
    });
});


$(document).ready(function() {
    var animationDuration5 = 500;
    var animationDuration6 = 800;

    $('#OpenDWebDev').click(function() {
        $('#Webdev').removeClass('hidden').slideDown(animationDuration6);
        $('#OpenDWebDev').hide();
    });

    $('#CloseWebDev').click(function() {
        $('#Webdev').slideUp(animationDuration5, function() {
            $(this).addClass('hidden');
            $('#OpenDWebDev').show();
        });
    });
});



$(document).ready(function() {
    var animationDuration7 = 500;
    var animationDuration8 = 800;

    $('#OpenMentor').click(function() {
        $('#Mentor').removeClass('hidden').slideDown(animationDuration8);
        $('#OpenMentor').hide();
    });

    $('#CloseMentor').click(function() {
        $('#Mentor').slideUp(animationDuration7, function() {
            $(this).addClass('hidden');
            $('#OpenMentor').show();
        });
    });
});


$(document).ready(function() {
    var animationDuration9 = 500;
    var animationDuration10 = 800;

    $('#OpenManager').click(function() {
        $('#Manager').removeClass('hidden').slideDown(animationDuration10);
        $('#OpenManager').hide();
    });

    $('#CloseManager').click(function() {
        $('#Manager').slideUp(animationDuration9, function() {
            $(this).addClass('hidden');
            $('#OpenManager').show();
        });
    });
});

$(document).ready(function() {
    function setStickySidebarHeight() {
        var windowHeight = $(window).height();
        $('#stickySidebar').height(windowHeight);
    }

    // Initial setup
    setStickySidebarHeight();

    // Recalculate height on window resize
    $(window).resize(function() {
        setStickySidebarHeight();
    });
});


$(document).ready(function() {
    // Select all content sections and hide them initially
    $('.contentHolder .TAxp, .contentHolder .consultingXP, .contentHolder .WebDevXP, .contentHolder .CollegeXP, .contentHolder .ManagerXP').hide();
    
    // Animate all content sections to slide down
    $('.contentHolder .TAxp, .contentHolder .consultingXP, .contentHolder .WebDevXP, .contentHolder .CollegeXP, .contentHolder .ManagerXP').slideDown(800);
});



$(document).ready(function() {
    var animationDurationOpen = 800;
    var animationDurationClose = 500;

    $('#OpenWebsiteManager').click(function() {
        $('#WebsiteManager').removeClass('hidden').slideDown(animationDurationOpen);
        $('#OpenWebsiteManager').hide();
    });

    $('#CloseWebsiteManager').click(function() {
        $('#WebsiteManager').slideUp(animationDurationClose, function() {
            $(this).addClass('hidden');
            $('#OpenWebsiteManager').show();
        });
    });
});


AOS.init({
    duration: 1200, // Duration of animation
    once: false, // Animate every time an element is in the viewport
    mirror: true, // Whether elements should animate out while scrolling past them
});





