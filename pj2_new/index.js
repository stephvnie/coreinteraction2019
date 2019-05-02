$(document).ready(function(){





var number = -1;

var colors = ['#73C2FB','#4682B4','#000080','#008ECC','#0080FF','#111E6C','#1034A6','#6593F5','#57A0D3'];

var icon = [$(".face svg"),$(".fish svg"),$(".paw1 svg"),$(".toy svg"),$(".mouse svg"),]

setInterval(function(){ 

    number+=1;

    if(number>=colors.length){
        number=0;
    }

$(".fish svg").css("fill", colors[number]);

var random = Math.random() * 700  ;
var randomCSS =  random  + "px" ;
$(".fish svg").css("height", randomCSS);
$(".fish svg").css("width", randomCSS);

var width1 = $(document).width() - random;
var height1 = $(document).height() - random;       

var doesnt = Math.random() * width1  + "px" ;
var does = Math.random() * height1 + "px" ;

$(".fish svg").css("top", does);
$(".fish svg").css("left", doesnt);

// var randomIcon = Math.floor(Math.random() * icon.length);
// $(".fish svg").html(icon[randomIcon])

}, 500);










})
