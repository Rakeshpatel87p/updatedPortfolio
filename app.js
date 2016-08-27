// Portfolio links
// Contact links hover effect
// Spinning circles on click
// Better circle hover styling
// Timed transitions from About Me links

// Wavy name text - learn less

var headers = $(".portfolioHeaders > h2").toArray();
var images = $(".portfolioImages > img").toArray();
var navigationCircles = $('.portfolioNavigationCircles').children().toArray();
var i = 0;

$(function() {
    // setInterval(updateGradient, 10);

    // $('.fa-envelope-o').hover(function() {
    //     $('.fa-linkedin').css('opacity', 1);
    //     $('.fa-github').css('opacity', 1);

    // });

    // $('.contactLinks').mouseout(function() {
    //     $('.fa-linkedin').css('opacity', 0);
    //     $('.fa-github').css('opacity', 0)
    // })

    $('.aboutMeLink').click(function() {
        $("[id='pageNavigation']").hide();
        $("[class='aboutMeClick']").fadeIn(1000);
        $('.aboutMePartI').slideDown(1000).siblings().hide();
        $('#whoAmI')
            .parent()
            .css({ 'border': '1px dotted #99e052' })
            .css({ 'box-shadow': '1px 1px 3px 1px #52e0e0' })
            .css('transform', 'rotateX(360deg)')
        $('#fa-times-aboutMe').show();
        $('.pageNavigation').find('div').css({'transform': 'rotateY(360deg)'});
        console.log($('.pageNavigation').find('div'))
        // $('.aboutMeLink').css('transform', 'rotateX(360deg)');
        // $('.pageNavigation').find('.aboutMeClick').css('transform', 'rotateX(360deg)');
        // $("[class='aboutMeClick']").css('transform', 'rotateX(360deg)');
        // $('#circle').children('.aboutMeClick').find('.aboutMeClick').css('transform', 'rotateX(360deg)');
        // Not Targeting DOM Elements for Spinning Circle
        // $('#circle').siblings().css('transform', 'rotateY(360deg)');
        // $('.pageNavigation').children('div[id] = "circle"]').css('transform', 'rotateY(360deg)');
        // $("[class='aboutMeClick']").css('transform', 'rotateY(360deg)')
        // .siblings().css('transform', 'rotateY(360deg)');
        // $('.aboutMeLink').parent().css('transform', 'rotateY(360deg)');
        // $('#whatMovesMe').parent().css('transform', 'rotateY(360deg)');



        $(headers).hide(800);
        $(images).hide(800);
        $('.portfolioNavigation').hide();
        $('.aboutMeLink').parent().siblings()
            .css({ 'border': '1px solid purple' })
            .css({ 'box-shadow': '0px 0px 0px 0px' });
        i = 0;

    });
    // Close button for AboutMe section
    $('#fa-times-aboutMe').click(function() {
        $("[class='aboutMeClick']").hide();
        $('.aboutMeBlurb').children().slideUp(1000);
        $('#fa-times-aboutMe').fadeOut(1000);
        $('.pageNavigation').children()
            .css({ 'border': '1px solid purple' })
            .css({ 'box-shadow': '0px 0px 0px 0px' });
        // $('.pageNavigation').children()
        //     .css({ 'border': '1px solid purple' });
        // .css({ 'box-shadow': '0px 0px 0px 0px' });
        $("[id='pageNavigation']").fadeIn(2000);
    });

    $('#whoAmI').click(function() {
        $('.aboutMePartI').fadeIn(1000).siblings().hide();
        $('#whoAmI')
            .parent()
            .css({ 'border': '1px dotted #99e052' })
            .css({ 'box-shadow': '1px 1px 3px 1px #52e0e0' })
            .css('transform', 'rotateX(360deg)')

        .siblings()
            .css({ 'border': '1px solid purple' })
            .css({ 'box-shadow': '0px 0px 0px 0px' });
    });

    $('#whatMovesMe').click(function() {
        $('.aboutMePartII').fadeIn(1000).siblings().hide();
        $('#whatMovesMe')
            .parent()
            .css({ 'border': '1px dotted #99e052' })
            .css({ 'box-shadow': '1px 1px 3px 1px #52e0e0' })
            .siblings()
            .css({ 'border': '1px solid purple' })
            .css({ 'box-shadow': '0px 0px 0px 0px' });
    });

    $('#otherTidBits').click(function() {
        $('.aboutMePartIII').fadeIn(1000).siblings().hide();
        $('#otherTidBits')
            .parent()
            .css({ 'border': '1px dotted #99e052' })
            .css({ 'box-shadow': '1px 1px 3px 1px #52e0e0' })
            .siblings()
            .css({ 'border': '1px solid purple' })
            .css({ 'box-shadow': '0px 0px 0px 0px' });
    });
    // Opens Portfolio
    $('.portfolioLink').click(function() {
        $('.aboutMeBlurb').children().fadeOut(1000);
        $('.portfolioNavigation').show();
        $(images[i]).slideDown(1000);
        $(headers[i]).slideDown(1000);
        $('#navigateBack').fadeIn(1000).siblings().hide();
        $('#navigateForward').fadeIn(2000).siblings().hide();
        $('#fa-times-portfolio-closeButton').show();
        $('.portfolioNavigationCircles').show();
        $('.portfolioLink').parent()
            .css({ 'border': '1px dotted #99e052' })
            .css({ 'box-shadow': '1px 1px 3px 1px #52e0e0' })
            .siblings()
            .css({ 'border': '1px solid purple' })
            .css({ 'box-shadow': '0px 0px 0px 0px' });
        $(navigationCircles[i]).css('color', 'orange').siblings().css('color', 'white');
        i = 0;

    });
    // Close button for Portfolio
    $('#fa-times-portfolio-closeButton').click(function() {
        $('#navigateBack').hide();
        $('#navigateForward').hide();
        $(images).slideUp(1000);
        $(headers).slideUp(1000);
        // $('.portfolioContents').children().hide();
        $('#fa-times-portfolio-closeButton').hide();
        $('#fa-times-aboutMe').hide();
        $('.portfolioNavigationCircles').hide();
        $('.pageNavigation').children()
            .css({ 'border': '1px solid purple' })
            .css({ 'box-shadow': '0px 0px 0px 0px' });
        $("[id='pageNavigation']").fadeIn(2000);
        $('.pageNavigation').children()
            .css({ 'border': '1px solid purple' })
            .css({ 'box-shadow': '0px 0px 0px 0px' });
        $("[id='pageNavigation']").show();
    });
    // Portfolio Navigation 
    $('#navigateForward').click(function() {
        if (i < 3) {
            i++;
            fill(i);
        } else if (i == 3) {
            i = 0;
            fill(i);
        };
    });

    $('#navigateBack').click(function() {
        if (i >= 1) {
            i = i - 1;
            fill(i);
        } else if (i == 0) {
            i = 3;
            fill(i);
        }

    });
    // Cycles through Portfolio contents
    function fill(i) {
        return $(images[i]).fadeIn(500).siblings().hide(),
            $(headers[i]).fadeIn(500).siblings().hide(),
            $(navigationCircles[i]).css('color', 'orange').siblings().css('color', 'white');
    }

});

var colors = new Array(
    // Control these colors
    [0, 0, 0], [51, 0, 51], [0, 0, 51], [51, 0, 102], [25, 0, 51], [51, 0, 25]);

// [62,35,255],
// [60,255,60],
// [255,35,98],
// [45,175,230],
// [255,0,255],
// [255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0, 1, 2, 3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient() {

    if ($ === undefined) return;

    var c0_0 = colors[colorIndices[0]];
    var c0_1 = colors[colorIndices[1]];
    var c1_0 = colors[colorIndices[2]];
    var c1_1 = colors[colorIndices[3]];

    var istep = 1 - step;
    var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

    var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

    $('#gradient')
        .css({ background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))" })
        .css({ background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)" });

    step += gradientSpeed;
    if (step >= 1) {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

        //pick two new target color indices
        //do not pick the same as the current one
        colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

    }
}
