$(document).ready(function(){

    var width = $(document).width() - 100;
    var height = $(document).height() - 100;

// console.log($(".circle"))

    var shapes = [$(".circle"), $(".triangle"), $(".square")]


    setInterval( function randomStuff(){
    var randomShape = shapes[ Math.floor( Math.random() * shapes.length ) ]
    var clone = randomShape.clone().appendTo('body');

    // console.log(clone)
    clone.last().css( 'left', Math.random() * width )
    clone.last().css( 'top', Math.random() * height )
    },100);

random();
   













})