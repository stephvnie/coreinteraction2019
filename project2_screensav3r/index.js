$(document).ready(function(){





var number = -1;

var colors = ['#00ff00','#ff0000','#0000ff'];

var icon = [$(".face svg"),$(".fish svg"),$(".paw1 svg"),$(".toy svg"),$(".mouse svg")]

var selectSVG = icon[Math.floor(Math.random()*icon.length)]
setInterval(function(){ 

    number+=1;

    if(number>=colors.length){
        number=0;
    }

    selectSVG.css("fill", colors[number]);

var random = Math.random() * 350  + 150;
var randomCSS =  random  + "px" ;
selectSVG.css("height", randomCSS);
selectSVG.css("width", randomCSS);

var width1 = $(document).width() - random;
var height1 = $(document).height() - random;       

var doesnt = Math.random() * width1  + "px" ;
var does = Math.random() * height1 + "px" ;

selectSVG.css("top", does);
selectSVG.css("left", doesnt);

// var randomIcon = Math.floor(Math.random() * icon.length);
// $(".fish svg").html(icon[randomIcon])

}, 1000);










})
