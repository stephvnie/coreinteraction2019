$(document).ready(function(){

// var shapeWidth = $('.paw').width();

// var width = $(document).width() - shapeWidth;
// var height = $(document).height() - shapeWidth;

// var speedX = 2;
// var speedY = 3;


// var positionLeft = 0;
// var positionTop = 0;



// function step(timestamp) {

//     positionLeft += speedX;
//     positionTop += speedY;


//     if( positionLeft > width ){
//         speedX = speedX * -1 ;
//     }

//     if( positionLeft < 0 ){
//         speedX = speedX * -1 ;
//     }

//     if ( positionTop > height ){
//         speedY = speedY * -1 ;
//     }

//     if ( positionTop < 0 ){
//         speedY = speedY * -1 ;
//     }




// $('.paw').css("left",positionLeft)
// $('.paw').css("top",positionTop)



// window.requestAnimationFrame(step);

// }

// window.requestAnimationFrame(step);


var width = $(document).width() - 100;
var height = $(document).height() - 100;


var shapes = [$(".paw"),$(".circle"), $(".triangle"), $(".square"),$(".oval"),$(".asset1"),$(".asset2"),$(".asset3")]


setInterval( function randomStuff(){
var randomShape = shapes[ Math.floor( Math.random() * shapes.length ) ]
var clone = randomShape.clone().appendTo('body');

// console.log(clone)
clone.last().css( 'left', Math.random() * width )
clone.last().css( 'top', Math.random() * height )
},2400);







var number = -1;

var colors = ['#C1DDD8','#fdf498','#F5E4DC','#faf0e6','#fad9c1','#9EC4C5','#F2C2C2','#ffffff','#e4dcf1'];

setInterval(function(){ 

    number+=1;

    if(number>=colors.length){
        number=0;
    }

$("#shape").css("background-color", colors[number]);

var random = Math.random() * 300  ;
var randomCSS =  random  + "px" ;
$("#shape").css("height", randomCSS);
$("#shape").css("width", randomCSS);

var width1 = $(document).width() - random;
var height1 = $(document).height() - random;       

var doesnt = Math.random() * width1  + "px" ;
var does = Math.random() * height1 + "px" ;

$("#shape").css("top", does);
$("#shape").css("left", doesnt);

}, 1000);



})
