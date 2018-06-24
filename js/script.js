// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
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

$(document).ready(function () {
    switchMenu('Eissorten');
})

$(function () {
    $(document).scroll(function () {
        var $nav = $("header");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});


function switchMenu(name) {
    $("#menuContainer").children().hide();
    $("#menuPointsContainer").children().css("text-decoration", "none");
    $('#' + name).show();
    $('#menuCaption').text(name);
    $('li:contains(' + name + ')').css("text-decoration", "underline");
}

function myFunction() {
    var x = document.getElementById("nav-bar");
    var y = document.getElementById("header");
    if (x.className === "mobile-nav") {
        x.className = "responsive";
    } else {
        x.className = "mobile-nav";
    }
}

function expandMenu() {
    if (!$("#navMenu").is(":visible")) {
        $('#navMenu').show();
        $('#navMenu').css("height", "250px");
        $('#navMenu').css("visibility", "visible");
    } else {
        $('#navMenu').hide();
        $('#navMenu').css("height", "0px");
        $('#navMenu').css("visibility", "hidden");
    }

}
