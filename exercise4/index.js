$(document).ready(function(){

var name = "exercise 4";
var colors = ["white","white","white","white"]

var time = new Date();
var ticker = 1;
var ticker2 = 1;


$('#time').text(time);
$('#ticker').text(ticker);
$('#ticker2').text(ticker2);
$('#name').text(name);


document.getElementById('name').style.zIndex = 10;


function getTime(){

    $('#ticker').text(ticker);
    $('#ticker2').text(ticker2);
    $('#name').text(name);
    $('#time').text(time);
    time = new Date();

}


getTime();

setInterval(function(){

    getTime();
},1000)



})

