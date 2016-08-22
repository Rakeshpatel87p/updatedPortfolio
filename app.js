// Finish CSS styling

var headers = $(".portfolioHeaders > h2").toArray();
var images = $(".portfolioImages > img").toArray();
var navigationCircles = $('.portfolioNavigationCircles').children().toArray();
var i = 0;

$(function() {
    setInterval(updateGradient, 10);

    $('.fa-envelope-o').hover(function() {
        $('.fa-linkedin').css('opacity', 1);
        $('.fa-github').css('opacity', 1);

    });

    $('.contactLinks').mouseout(function() {
        $('.fa-linkedin').css('opacity', 0);
        $('.fa-github').css('opacity', 0)
    })

    $('.aboutMeLink').click(function() {
        $("[id='pageNavigation']").hide();
        $("[class='aboutMeClick']").show();
        $('#fa-times-aboutMe').show();
        // $('.aboutMeClick').wrapAll('display');
        $(headers).hide(800);
        $(images).hide(800);
        $('.portfolioNavigation').hide(800);
        $('.aboutMeLink').parent().siblings()
            .css({ 'border': '1px solid purple' })
            .css({ 'box-shadow': '0px 0px 0px 0px' });
        i = 0;

    });

    $('#fa-times-aboutMe').click(function() {
        $("[class='aboutMeClick']").hide();
        $('.aboutMeBlurb').children().hide();
        $('#fa-times-aboutMe').hide();
        $('.pageNavigation').children()
            .css({ 'border': '1px solid purple' })
            .css({ 'box-shadow': '0px 0px 0px 0px' });
        // $('.pageNavigation').children()
        //     .css({ 'border': '1px solid purple' });
        // .css({ 'box-shadow': '0px 0px 0px 0px' });
        $("[id='pageNavigation']").show();
    });

    $('#whoAmI').click(function() {
        $('.aboutMePartI').show().siblings().hide();
        $('#whoAmI')
            .parent()
            .css({ 'border': '1px dotted #99e052' })
            .css({ 'box-shadow': '1px 1px 3px 1px #52e0e0' })
            .siblings()
            .css({ 'border': '1px solid purple' })
            .css({ 'box-shadow': '0px 0px 0px 0px' });
    });

    $('#whatMovesMe').click(function() {
        $('.aboutMePartII').show().siblings().hide();
        $('#whatMovesMe')
            .parent()
            .css({ 'border': '1px dotted #99e052' })
            .css({ 'box-shadow': '1px 1px 3px 1px #52e0e0' })
            .siblings()
            .css({ 'border': '1px solid purple' })
            .css({ 'box-shadow': '0px 0px 0px 0px' });
    });

    $('#otherTidBits').click(function() {
        $('.aboutMePartIII').show().siblings().hide();
        $('#otherTidBits')
            .parent()
            .css({ 'border': '1px dotted #99e052' })
            .css({ 'box-shadow': '1px 1px 3px 1px #52e0e0' })
            .siblings()
            .css({ 'border': '1px solid purple' })
            .css({ 'box-shadow': '0px 0px 0px 0px' });
    });

    $('.portfolioLink').click(function() {
        $('.aboutMeBlurb').children().hide();
        $('.portfolioNavigation').show();
        $(images[i]).show();
        $(headers[i]).show();
        $('#navigateBack').show().siblings().hide();
        $('#navigateForward').show().siblings().hide();
        $('#fa-times-portfolio').show();
        $('.portfolioNavigationCircles').show();
        $('.portfolioLink').parent()
            .css({ 'border': '1px dotted #99e052' })
            .css({ 'box-shadow': '1px 1px 3px 1px #52e0e0' })
            .siblings()
            .css({ 'border': '1px solid purple' })
            .css({ 'box-shadow': '0px 0px 0px 0px' });
        $(navigationCircles[i]).css('color', 'gold').siblings().css('color', 'white');
        i = 0;

    });

    $('#fa-times-portfolio').click(function() {
        $('#navigateBack').hide();
        $('#navigateForward').hide();
        $(images).hide();
        $(headers).hide();
        // $('.portfolioContents').children().hide();
        $('#fa-times-portfolio').hide();
        $('#fa-times-aboutMe').hide();
        $('.portfolioNavigationCircles').hide();
        $('.pageNavigation').children()
            .css({ 'border': '1px solid purple' })
            .css({ 'box-shadow': '0px 0px 0px 0px' });
        $("[id='pageNavigation']").show();
        $('.pageNavigation').children()
            .css({ 'border': '1px solid purple' })
            .css({ 'box-shadow': '0px 0px 0px 0px' });
        $("[id='pageNavigation']").show();
    });

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

    function fill(i) {
        return $(images[i]).show().siblings().hide(),
            $(headers[i]).show().siblings().hide(),
            $(navigationCircles[i]).css('color', 'gold').siblings().css('color', 'white');
    }

});


var colors = new Array(
    [62, 35, 255], [60, 255, 60], [255, 35, 98], [45, 175, 230], [255, 0, 255], [255, 128, 0]);

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

    $('#gradient').css({
            "background": "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
        })
        // .css({
        //    'background-color', "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

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
