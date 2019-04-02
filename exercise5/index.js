$(document).ready(function(){

    var width = $(document).width() - 300;
    var height = $(document).height() - 300;

    console.log(width)

$('#circle').hover(function(){

    var randomNumber = Math.random() * 300;
    var randomRadius = randomNumber + "px"

    var randomNumber2 = Math.random() * 360;
    var randomHue = "hue-rotate(" + randomNumber2 + "deg)"

    var randomNumber3 = Math.random() * width;
    var randomLeft = randomNumber3 + "px"

    var randomNumber4 = Math.random() * height;
    var randomTop = randomNumber4 + "px"

    var randomOpacity = Math.random() * .5 + .5;


    $(this).css('border-radius', randomRadius);
    $(this).css('filter', randomHue);
    $(this).css('left', randomLeft);
    $(this).css('top', randomTop);
    $(this).css('opacity', randomOpacity);

    $('#metadata').text("radius:" + randomRadius)

})

$('#metadata').hover(function(){



    var randomNumber3 = Math.random() * width;
    var randomLeft = randomNumber3 + "px"

    var randomNumber4 = Math.random() * height;
    var randomTop = randomNumber4 + "px"



    $(this).css('left', randomLeft);
    $(this).css('top', randomTop);


})


})