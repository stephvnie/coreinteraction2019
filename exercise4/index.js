// console.log("regular js")
//check if document is ready
$(document).ready(function(){
// console.log("jquery")

var name = "exercise 4";
var colors = ["grey","#00ff00","pink","green"]

var time = new Date();
var ticker = 0;
var ticker2 = 0;


//change some html
$('#time').text(time);
$('#ticker').text(ticker);
$('#ticker2').text(ticker2);
$('#name').text(name);


//change some css
$('p').css("font-size",'22px')
$('p').css("color",'grey')



document.getElementById('name').style.zIndex = 10;



//create a function!!!!!!!!111
function getTime(){

    $('#ticker').text(ticker);
    $('#ticker2').text(ticker2);
    $('#name').text(name);
    $('#time').text(time);
    time = new Date();


    var rotate= 'rotate(' + ticker +'deg)';
    $('#clock').css("transform",rotate);
    $('#clock').css("background-color",colors[ticker2]);





    ticker += 10;
    ticker2 +=1;



    if(ticker2 >=4) {

        ticker2=0;
    }
}
//call it
getTime();

setInterval(function(){
    //call it every second
    // console.log("hey")
    getTime();
},1000)



//end document ready function
})







