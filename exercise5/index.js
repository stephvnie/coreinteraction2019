$(document).ready(function(){


    var txt = "yo hey"
    var age = " welcome to"
    var combined = txt + age;
        combined += " exercise 5";
    var number = -1;

    var colors = ['#FDC7D7','#FF9DE6','#A5D8F3','#E8E500'];
    var size = ['20px','100px','50px','13px','35px'];

    var heys = ["jk go away", "i love coding", "welcome to exercise 5", "bye bye"]

    var colors1 = ['#08F7FE','#09FBD3','#FE53BB','#F5D300'];



    setInterval(function(){ 

            number+=1;

            if(number>=colors.length){
                number=0;
            }

       $("#shape").css("background-color", colors[number]);
        $("#name").css("font-size",size[number]);
        $("#name").css("color", colors1[number]);


       
        var randomText = Math.floor(Math.random() * heys.length);
        $("#name").html(heys[randomText])


        var random = Math.random() * 300  ;
        var randomCSS =  random  + "px" ;
       $("#shape").css("height", randomCSS);
       $("#shape").css("width", randomCSS);

       var width = $(document).width() - random;
       var height = $(document).height() - random;       
       
       var doesnt = Math.random() * width  + "px" ;
       var does = Math.random() * height + "px" ;

        $("#shape").css("top", does);
        $("#shape").css("left", doesnt);



        var random1 = Math.random() * 300  ;

        var width1 = $(document).width() - random1;
        var height1 = $(document).height() - random1;       
 
       
        var randomWidth = Math.random() * width1;
        var randomHeight = Math.random() * height1;

        var leftCss = Math.floor(randomWidth) + "px"
        var topCss = Math.floor(randomHeight) + "px"

        $("#name").css("left", leftCss)
        $("#name").css("top", topCss)
        console.log('hi')





}, 1000);



})



