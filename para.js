$(document).ready(function() {
                  
                  $(window).bind('scroll', function(e) {
                                 parallax();

                    });
                  
                  $('a.home').click(function() {
                                     
                                     $('html, body').animate({scrollTop:0 }, 1000,
                                                             function() {
                                                             parallax();
                                                             });
                                     return false;
                                     });
                  
                  $('a.me').click(function() {
                                    
                                    $('html, body').animate({scrollTop:$('#me').offset().top - 100 }, 1000,
                                                            function() {
                                                            parallax();
                                                            });
                                    return false;
                                    });
                  
                  $('a.projects').click(function() {
                                    
                                    $('html, body').animate({scrollTop:$('#projects').offset().top - 100 }, 1000,
                                                            function() {
                                                            parallax();
                                                            });
                                    return false;
                                    });
                  
                  $('a.hire').click(function() {
                                    
                                    $('html, body').animate({scrollTop:$('#hire').offset().top - 100}, 1000,
                                                            function() {
                                                            parallax();
                                                            });
                                    return false;
                                    });
});

function parallax() {
    var scrollPosition = $(window).scrollTop();
    $('#space').css('top', (0 - (scrollPosition * .2)) + 'px');
    $('#images').css('top', (0 - (scrollPosition * .5)) + 'px');
}

var colors = ["white", "black"];
//var backgs = ["rgba(25, 25, 25, .5)", "rgba(100, 100, 100, .5)"];
var imageBorder = ["2px solid black", "2px solid white"];
var imageBorder2 = ["none", "2px solid white"];
var imageBack = ["none", "white"];
var colorIndex = 0;

function changeColor() {
    var col = document.getElementById("space");
    var im = document.getElementById("img-me");
    var hi = document.getElementById("img-hire");
    
   // var backs = document.getElementById("content article");
    if( colorIndex >= colors.length ) {
        colorIndex = 0;
    }
    
    hi.style.background = imageBack[colorIndex];
    im.style.border = imageBorder[colorIndex];
    hi.style.border = imageBorder2[colorIndex];
    //backs.style.background = backgs[colorINdex];
    col.style.backgroundColor = colors[colorIndex];
    colorIndex++;
}

window.onload = changeColor;


